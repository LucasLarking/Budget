from django.urls import path, include
from rest_framework_nested import routers
from rest_framework.routers import DefaultRouter
from .views import (
    CategoryModelViewSet,
    NetworthModelViewSet,
    SubCategoryModelViewSet,
    VendorModelViewset,
    SavingsGoalModelViewset,
    InvestmentGoalModelViewset,
    IncomeSourceModelViewset,
    InvestmentNameModelViewSet,
    InvestmentPurchaseModelViewSet,
    ReacurringInvestmentPurchaseModelViewSet,
    DailyInvestmentValueModelViewSet,
    TransactionModelViewSet,
    ReacurringTransactionModelViewSet,
)

router = DefaultRouter()

router.register(r"categories", CategoryModelViewSet)
router.register(r"savinggoals", SavingsGoalModelViewset, basename="savinggoal")
router.register(
    r"investmentgoals", InvestmentGoalModelViewset, basename="investmentgoal"
)
router.register(r"incomesources", IncomeSourceModelViewset, basename="incomesource")
router.register(
    r"investmentnames", InvestmentNameModelViewSet, basename="investmentname"
)
router.register(
    r"investmentpurchases",
    InvestmentPurchaseModelViewSet,
    basename="investmentpurchase",
)
router.register(
    r"reacurringinvestmentpurchases",
    ReacurringInvestmentPurchaseModelViewSet,
    basename="reacurringinvestmentpurchase",
)
router.register(
    r"dailyinvestmentvalues",
    DailyInvestmentValueModelViewSet,
    basename="dailyinvestmentvalue",
)
router.register(r"transactions", TransactionModelViewSet, basename="transaction")
router.register(
    r"reacurringtransactions",
    ReacurringTransactionModelViewSet,
    basename="reacurringtransaction",
)
router.register(r"networths", NetworthModelViewSet, basename="networth")
router.register(r"subcategories", SubCategoryModelViewSet, basename="spendingcategory")
router.register(r"vendors", VendorModelViewset, basename="vendor")


#### CategoryType => SpendingCategory => Vendor ####
# CategoryTpeRouter = routers.NestedDefaultRouter(router, r'categories', lookup='categorytype')
# CategoryTpeRouter.register(r'subcategories', SpendingCategoryModelViewset, basename='categorytype-subcategories')

# SpendingCategory_router = routers.NestedDefaultRouter(CategoryTpeRouter, r'subcategories', lookup='spendingcategory')
# SpendingCategory_router.register(r'vendors', VendoryModelViewset, basename='spendingcategory-vendors')
#### CategoryType => SpendingCategory => Vendor ####


# The API URLs are now determined automatically by the router
urlpatterns = [
    path("", include(router.urls)),  # Include the main router
    # path('', include(CategoryTpeRouter.urls)),  # Include the nested router
    # path('', include(SpendingCategory_router.urls)) # Second level nested router (Vendor)
]
