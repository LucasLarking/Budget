import uuid
from django.db import models
from backend import settings
# Create your models here.


class SubCategory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    # Fundamental, Fun, Future you
    SubCategory = models.CharField(max_length=255, unique=True)
    SpendingLimit = models.IntegerField()

    def __str__(self) -> str:
        return f"{self.SubCategory}"


class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    # Morgage, Utilities, Phone
    # SubCategory = models.ForeignKey(SubCategory, on_delete=models.CASCADE)
    Category = models.CharField(max_length=255)
    SpendingLimit = models.IntegerField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    
    def __str__(self) -> str:
        return f"{self.Category}"


class Vendor(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    # ICA, Elgiganten
    Vendor = models.CharField(max_length=255)
    Category = models.ForeignKey(Category, on_delete=models.CASCADE)
    SpendingLimit = models.IntegerField(null=True, blank=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    def __str__(self) -> str:
        return f"{self.Vendor} ({self.Category.Category})"


class SavingsGoal(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    GoalName = models.CharField(max_length=255)
    TargetValue = models.IntegerField()
    TargetDate = models.DateField()
    Reacurring = models.BooleanField(default=True)

    def __str__(self) -> str:
        return f"Savings Goal: {self.GoalName}"


class InvestmentGoal(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    GoalName = models.CharField(max_length=255)
    TargetValue = models.IntegerField()
    TargetDate = models.DateField()
    Reacurring = models.BooleanField(default=True)

    def __str__(self) -> str:
        return f"Investment Goal: {self.GoalName}"


class IncomeSource(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    IncomeSource = models.CharField(max_length=255)
    Value = models.IntegerField()
    Reacurring = models.BooleanField(default=False)
    SavingsGoal = models.ManyToManyField(SavingsGoal, null=True, blank=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    
    
    def __str__(self) -> str:
        return f"{self.IncomeSource}: {self.Value}"


class InvestmentName(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    InvestmentName = models.CharField(max_length=255)
    CurrentValue = models.IntegerField()

    def __str__(self) -> str:
        return self.InvestmentName

class InvestmentPurchase(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    InvestmentName = models.ForeignKey(InvestmentName, on_delete=models.CASCADE)
    AmountInvested = models.IntegerField()
    CurrentValue = models.IntegerField(null=True, blank=True)
    SavingsGoal = models.ManyToManyField(SavingsGoal, blank=True)
    
    def __str__(self) -> str:
        return f"{self.InvestmentName.InvestmentName}: {self.AmountInvested}"


class ReacurringInvestmentPurchase(InvestmentPurchase):
    DueDate = models.DateField()


class DailyInvestmentValue(models.Model):
    # Setup Cronjob which checks daily value
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    InvestmentName = models.ForeignKey(InvestmentName, on_delete=models.CASCADE)
    TotalValue = models.IntegerField()
    CreatedAt = models.DateField(auto_now_add=False)

    def __str__(self) -> str:
        return (
            f"{self.InvestmentName.InvestmentName}: {self.TotalValue} {self.CreatedAt}"
        )


class Transaction(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    TransactionAmount = models.IntegerField()
    Vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE, null=True, blank=True)
    CreatedAt = models.DateField(auto_now_add=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"{self.TransactionAmount}kr på"


class ReacurringTransaction(Transaction):
    DueDate = models.DateField(blank=True, null=True)


class NetWorth(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    TotalAssets = models.IntegerField()
    TotalLiabilities = models.IntegerField()
    CreatedAt = models.DateField(auto_now_add=True)

    @property
    def net_worth(self):
        return self.TotalAssets - self.TotalLiabilities

    def __str__(self):
        return f"Net Worth on {self.CreatedAt}: {self.net_worth}"
