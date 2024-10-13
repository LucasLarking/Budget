from rest_framework import serializers
from base.models import (
    SubCategory,
    Category,
    Vendor,
    SavingsGoal,
    InvestmentGoal,
    IncomeSource,
    InvestmentName,
    InvestmentPurchase,
    ReacurringInvestmentPurchase,
    DailyInvestmentValue,
    Transaction,
    ReacurringTransaction,
    NetWorth,
)


class SubCategoryModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = ["id", "SubCategory", "SpendingLimit"]
        read_only_fields = ["id"]


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "Category", "SpendingLimit"]
        read_only_fields = ["id"]

    def validate(self, data):
        # SubCategory = data["SubCategory"]
        SpendingLimit = data["SpendingLimit"]
        # if SpendingLimit > SubCategory.SpendingLimit:
        #     ErrorMsg = f"Category SpendingLimit ({SubCategory}) cannot be greater than SubCategory SpendingLimit ({SubCategory.SpendingLimit})."
        #     raise serializers.ValidationError(ErrorMsg)
        if SpendingLimit <= 0:
            ErrorMsg = "Maximum Spending cannot be less than 0"
            raise serializers.ValidationError(ErrorMsg)

        return data


class VendorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ["id", "Vendor", "Category", "SpendingLimit"]
        read_only_fields = ["id"]

    def validate(self, data):
        Category = data["Category"]
        SpendingLimit = data["SpendingLimit"]
        if SpendingLimit > Category.SpendingLimit:
            ErrorMsg = f"Category SpendingLimit ({Category}) cannot be greater than Category SpendingLimit ({Category.SpendingLimit})."
            raise serializers.ValidationError(ErrorMsg)
        if SpendingLimit <= 0:
            ErrorMsg = "Maximum Spending cannot be less than 0"
            raise serializers.ValidationError(ErrorMsg)
        return data


class SavingsGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavingsGoal
        fields = ["id", "GoalName", "TargetValue", "TargetDate", "Reacurring"]
        read_only_fields = ["id"]

    def validate(self, data):
        Value = data["TargetValue"]
        if Value <= 0:
            ErrorMsg = "Value Cannot Be Smaller Than 0"
            raise serializers.ValidationError(ErrorMsg)
        return data


class InvestmentGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestmentGoal
        fields = ["id", "GoalName", "TargetValue", "TargetDate", "Reacurring"]
        read_only_fields = ["id"]

    def validate(self, data):
        Value = data["TargetValue"]
        if Value <= 0:
            ErrorMsg = "Value Cannot Be Smaller Than 0"
            raise serializers.ValidationError(ErrorMsg)
        return data


class IncomeSourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = IncomeSource
        fields = ["id", "IncomeSource", "Value", "Reacurring", "SavingsGoal"]
        read_only_fields = ["id"]

    def validate(self, data):
        Value = data["Value"]
        if Value <= 0:
            ErrorMsg = "Value Cannot Be Smaller Than 0"
            raise serializers.ValidationError(ErrorMsg)
        return data


class InvestmentNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestmentName
        fields = ["id", "InvestmentName", "CurrentValue"]
        read_only_fields = ["id"]


class InvestmentPurchaseSerializer(serializers.ModelSerializer):
    CurrentValue = serializers.ReadOnlyField()

    class Meta:
        model = InvestmentPurchase
        fields = [
            "id",
            "InvestmentName",
            "AmountInvested",
            "CurrentValue",
            "SavingsGoal",
        ]
        read_only_fields = ["id", "CurrentValue"]


class ReacurringInvestmentPurchaseSerializer(InvestmentPurchaseSerializer):
    class Meta:
        model = ReacurringInvestmentPurchase
        fields = [
            "id",
            "InvestmentName",
            "AmountInvested",
            "CurrentValue",
            "SavingsGoal",
            "DueDate",
        ]


class DailyInvestmentValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyInvestmentValue
        fields = ["InvestmentName", "TotalValue", "CreatedAt"]


class TransactionSerializer(serializers.ModelSerializer):
    # Vendor = VendorySerializer()
    class Meta:
        model = Transaction
        fields = ["id", "TransactionAmount", "Vendor", "CreatedAt"]
        read_only_fields = ["id", "CreatedAt"]

    # def to_representation(self, instance):
    #     representation = super().to_representation(instance)
    #     representation["Vendor"] = (
    #         instance.Vendor.Vendor
    #     )  # Assuming Vendor has a 'vendor' attribute
    #     return representation


class ReacurringTransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReacurringTransaction
        fields = ["id", "TransactionAmount", "Vendor", "CreatedAt", "DueDate"]
        read_only_fields = ["id", "CreatedAt"]


class NetWorthSerializer(serializers.ModelSerializer):
    net_worth = serializers.ReadOnlyField()

    class Meta:
        model = NetWorth
        fields = ["id", "TotalAssets", "TotalLiabilities", "CreatedAt", "net_worth"]
        read_only_fields = ["id", "CreatedAt"]
