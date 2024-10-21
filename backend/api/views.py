import calendar
from datetime import timedelta
from datetime import datetime

from django.db.models import F, Sum, Max, Q
from django.db.models.functions import TruncMonth, TruncDate
from django.utils import timezone
from django.shortcuts import render
from django.db.models import Sum
from django.db.models.functions import TruncDay
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import action

from django.conf import settings
# settings.AUTH_USER_MODEL

from base.models import (
    SubCategory,
    InvestmentGoal,
    Category,
    Vendor,
    SavingsGoal,
    IncomeSource,
    InvestmentName,
    InvestmentPurchase,
    ReacurringInvestmentPurchase,
    DailyInvestmentValue,
    Transaction,
    ReacurringTransaction,
    NetWorth,
)
from .serializers import (
    ReacurringTransactionSerializer,
    SubCategoryModelSerializer,
    DailyInvestmentValueSerializer,
    InvestmentGoalSerializer,
    InvestmentNameSerializer,
    InvestmentPurchaseSerializer,
    NetWorthSerializer,
    ReacurringInvestmentPurchaseSerializer,
    CategorySerializer,
    VendorySerializer,
    SavingsGoalSerializer,
    IncomeSourceSerializer,
    InvestmentPurchase,
    TransactionSerializer,
)


class SubCategoryModelViewSet(viewsets.ModelViewSet):
    queryset = SubCategory.objects.all()
    serializer_class = SubCategoryModelSerializer
    # permission_classes = [IsAuthenticated]
    http_method_names = ["option", "head", "get", "post", "put", "delete"]

    @action(detail=False, methods=["get"])
    def subcategory_expenses_sum(self, request):
        # Aggregate total TransactionAmount for each SubCategory
        now = timezone.now()
        first_day_of_month = datetime(now.year, now.month, 1)
        subcategories = SubCategory.objects.annotate(
            total_spent=Sum(
                "category__vendor__transaction__TransactionAmount",
                filter=Q(
                    category__vendor__transaction__CreatedAt__gte=first_day_of_month
                ),
            )
        ).values("SubCategory", "total_spent")

        return Response(subcategories)


class CategoryModelViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ["option", "head", "get", "post", "put", "delete"]

    def get_queryset(self):
        return Category.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=False, methods=["get"])
    def category_expenses_sum(self, request):
        now = timezone.now()
        first_day_of_month = datetime(now.year, now.month, 1)
        qs = Category.objects.filter(user=self.request.user).annotate(
        total=Sum(
            "vendor__transaction__TransactionAmount",
            filter=Q(vendor__transaction__CreatedAt__gte=first_day_of_month),
        )
    )

        # Transforming the queryset into a list of dictionaries
        result = [
            {
                "category": category.Category,  # Use the category name
                "total": category.total or 0,    # Set total to 0 if None
            }
            for category in qs
        ]

        return Response(result)


class VendorModelViewset(viewsets.ModelViewSet):
    queryset = Vendor.objects.all()
    serializer_class = VendorySerializer
    permission_classes = [AllowAny]
    http_method_names = ["option", "head", "get", "post", "put", "delete"]

    def get_queryset(self):
        return Vendor.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class SavingsGoalModelViewset(viewsets.ModelViewSet):
    queryset = SavingsGoal.objects.all()
    serializer_class = SavingsGoalSerializer
    permission_classes = [AllowAny]
    http_method_names = ["option", "head", "get", "post", "put", "delete"]


class InvestmentGoalModelViewset(viewsets.ModelViewSet):
    queryset = InvestmentGoal.objects.all()
    serializer_class = InvestmentGoalSerializer
    permission_classes = [AllowAny]
    http_method_names = ["option", "head", "get", "post", "put", "delete"]


class IncomeSourceModelViewset(viewsets.ModelViewSet):
    queryset = IncomeSource.objects.all()
    serializer_class = IncomeSourceSerializer
    permission_classes = [AllowAny]
    http_method_names = ["option", "head", "get", "post", "put", "delete"]

    @action(detail=False, methods=["get"])
    def income_left(self, request):
        now = timezone.now()
        start_of_month = now.replace(day=1)
        latest_income_source = IncomeSource.objects.order_by("-id").first()
        if latest_income_source:
            cost = (
                Transaction.objects.filter(CreatedAt__gte=start_of_month).aggregate(
                    total=Sum("TransactionAmount")
                )["total"]
                or 0
            )
            month_savings = latest_income_source.Value - cost
            data = {
                "income": latest_income_source.Value,
                "transaction_total": cost,
                "month_savings": month_savings,
            }
            return Response(data, status=status.HTTP_200_OK)
        return Response(
            {"error": "No IncomeSource found."}, status=status.HTTP_404_NOT_FOUND
        )


class InvestmentNameModelViewSet(viewsets.ModelViewSet):
    queryset = InvestmentName.objects.all()
    serializer_class = InvestmentNameSerializer
    permission_classes = [AllowAny]
    http_method_names = ["option", "head", "get", "post", "put", "delete"]


class InvestmentPurchaseModelViewSet(viewsets.ModelViewSet):
    queryset = InvestmentPurchase.objects.all()
    serializer_class = InvestmentPurchaseSerializer
    permission_classes = [AllowAny]
    http_method_names = ["option", "head", "get", "post", "put", "delete"]

    @action(detail=False, methods=["get"])
    def total_amount_invested(self, request):
        # Group by InvestmentName and calculate total AmountInvested
        grouped_investments = (
            self.queryset.values("InvestmentName__InvestmentName")
            .annotate(total_amount_invested=Sum("AmountInvested"))
            .order_by("InvestmentName__InvestmentName")
        )

        # Create two separate lists: one for the investment names, and one for the amounts
        investment_names = [
            item["InvestmentName__InvestmentName"] for item in grouped_investments
        ]
        total_amounts = [item["total_amount_invested"] for item in grouped_investments]

        return Response(
            {
                "investment_names": investment_names,
                "total_amount_invested": total_amounts,
            }
        )

    # @action(detail=False, methods=["get"])
    # def total_current_value(self, request):
    #     # Group by InvestmentName and calculate total CurrentValue
    #     grouped_investments = (
    #         self.queryset.values("InvestmentName__InvestmentName")
    #         .annotate(total_current_value=Max("CurrentValue"))
    #         .order_by("InvestmentName__InvestmentName")
    #     )

    #     # Create two separate lists: one for the investment names, and one for the current values
    #     investment_names = [
    #         item["InvestmentName__InvestmentName"] for item in grouped_investments
    #     ]
    #     total_values = [item["total_current_value"] for item in grouped_investments]

    #     return Response(
    #         {"investment_names": investment_names, "total_current_value": total_values}
    #     )


class ReacurringInvestmentPurchaseModelViewSet(viewsets.ModelViewSet):
    queryset = ReacurringInvestmentPurchase.objects.all()
    serializer_class = ReacurringInvestmentPurchaseSerializer
    permission_classes = [AllowAny]
    http_method_names = ["option", "head", "get", "post", "put", "delete"]


class DailyInvestmentValueModelViewSet(viewsets.ModelViewSet):
    queryset = DailyInvestmentValue.objects.all()
    serializer_class = DailyInvestmentValueSerializer
    permission_classes = [AllowAny]
    http_method_names = ["option", "head", "get", "post", "put", "delete"]

    @action(detail=False, methods=["get"])
    def total_current_value(self, request):
        latest_investments = self.queryset.values("InvestmentName").annotate(
            latest_date=Max("CreatedAt")
        )

        recent_investments = self.queryset.filter(
            InvestmentName__in=[item["InvestmentName"] for item in latest_investments],
            CreatedAt__in=[item["latest_date"] for item in latest_investments],
        ).order_by("InvestmentName__InvestmentName")

        # Serialize and return the result
        serializer = self.get_serializer(recent_investments, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=["get"], url_path="investment-data")
    def investment_data(self, request):
        investments = DailyInvestmentValue.objects.order_by(
            "InvestmentName", "CreatedAt"
        )

        # Create a list of unique investment names
        investment_names = investments.values_list(
            "InvestmentName__InvestmentName__id", flat=True
        ).distinct()

        # Creating lists of values for each unique investment name
        investment_values = []
        for name in investment_names:
            values_for_name = investments.filter(
                InvestmentName__InvestmentName=name
            ).values_list("TotalValue", flat=True)
            investment_values.append(list(values_for_name))

        # Creating a list of unique dates
        dates = investments.values_list("CreatedAt", flat=True).distinct()

        return Response(
            {
                "investment_names": list(investment_names),
                "investment_values": investment_values,
                "dates": list(dates),
            }
        )


class TransactionModelViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ["option", "head", "get", "post", "put", "delete"]

    def get_queryset(self):
        return Transaction.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
    @action(detail=False, methods=["GET"])
    def monthly_expenses(self, request):
        today = timezone.now().date()
        first_day_of_month = today.replace(day=1)
        queryset = self.get_queryset().filter(CreatedAt__gte=first_day_of_month)

        # Annotate by day and sum the transaction amounts per day
        daily_totals = queryset.annotate(day=TruncDay('CreatedAt')).values('day').annotate(total_expense=Sum('TransactionAmount')).order_by('day')

        # Format the day as "Jan 1" and return the data
        formatted_expenses = [
            {"day": datetime.strptime(str(item['day']), "%Y-%m-%d").strftime("%b %d"), "Sammanlagda Utgifter": item["total_expense"]}
            for item in daily_totals
        ]

        return Response(formatted_expenses)
    
    @action(detail=False, methods=["get"])
    def recent_expenses(self, request):
        limit = request.query_params.get("limit", 10)
        try:
            limit = int(limit)
        except ValueError:
            return Response({"error": "Limit must be an integer"}, status=400)
        
        now = timezone.now()
        start_of_month = now.replace(day=1)

        recent_transactions = self.queryset.filter(user=request.user).filter(CreatedAt__gte=start_of_month).order_by("-CreatedAt")[:limit]
        grouped_recent_transactions = recent_transactions.values(
            transactionId=F("id"),
            transactionAmount=F("TransactionAmount"),
            vendor=F("Vendor__Vendor"),
            category=F("Vendor__Category__Category"),
            createdAt=F("CreatedAt"),
        )
        return Response(grouped_recent_transactions)

    @action(detail=False, methods=["get"])
    def monthly_summary_spending_category(self, request):
        now = timezone.now()
        start_of_month = now.replace(day=1)

        expenses = self.queryset.filter(CreatedAt__gte=start_of_month)
        # Group by a field, e.g., category or date
        grouped_expenses = expenses.values(
            category_id=F("Vendor__SubCategory__id"),
            spending_category=F("Vendor__SubCategory__SubCategory"),
            category_type=F("Vendor__SubCategory__Category__Category"),
            maximum_spending_goal=F("Vendor__SubCategory__SpendingLimit"),
        ).annotate(total=Sum("Expense"))
        return Response(grouped_expenses)


class NetworthModelViewSet(viewsets.ModelViewSet):
    queryset = NetWorth.objects.all()
    serializer_class = NetWorthSerializer
    http_method_names = ["option", "head", "get", "post", "put", "delete"]
    permission_classes = [AllowAny]

    @action(detail=False, methods=["get"])
    def monthly_networth(self, request):
        networth_by_month = (
            self.queryset.annotate(
                month=TruncMonth("CreatedAt"),
                net_worth=F("TotalAssets")
                - F("TotalLiabilities"),  # Calculate net worth
            )
            .values("month")
            .annotate(monthly_networth=Sum("net_worth"))
            .order_by("month")
        )

        # Format the results to display month names and year for January
        formatted_results = []
        for entry in networth_by_month:
            month_date = entry["month"]
            month_name = calendar.month_name[month_date.month]  # Get full month name

            # If it's January, include the year in the month name
            if month_date.month == 1:
                month_name = f"{month_name} {month_date.year}"

            formatted_results.append(
                {"month": month_name, "monthly_networth": entry["monthly_networth"]}
            )

        return Response(formatted_results)


class ReacurringTransactionModelViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = ReacurringTransactionSerializer
    permission_classes = [AllowAny]
    http_method_names = ["option", "head", "get", "post", "put", "delete"]


class MonthlyExpenseSummary(viewsets.ViewSet):
    queryset = Transaction.objects.all()
    serializer_class = ReacurringTransaction
    permission_classes = [AllowAny]
    http_method_names = ["option", "head", "get", "post", "put", "delete"]

    def list(self, request):
        one_month_ago = timezone.now() - timedelta(days=30)
        expenses = Transaction.objects.filter(created_at__gte=one_month_ago)
