from django.contrib import admin
from .models import (
    SubCategory,
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
   NetWorth
)




# Register your models here.
admin.site.register(SubCategory)
admin.site.register(Category)
admin.site.register(Vendor)
admin.site.register(SavingsGoal)
admin.site.register(IncomeSource)
admin.site.register(InvestmentName)
admin.site.register(InvestmentPurchase)
admin.site.register(ReacurringInvestmentPurchase)
admin.site.register(DailyInvestmentValue)
admin.site.register(Transaction)
admin.site.register(ReacurringTransaction)
admin.site.register(NetWorth)