import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout";
import DashboardPage from "./dashboard/DashboardPage";
import LoginPage from "./login/LoginPage";
import HomePage from "./homepage/HomePage";
import Expenses_over_time from "./dashboard/Expenses_over_time";
import { ChadDashboard } from "./ChadDashboard";
import MonthlyBudget from "./dashboard/MonthlyBudget";
import TotalSaved from "./dashboard/TotalSaved";
import MonthlyInvestments from "./dashboard/MonthlyInvestments";
import ExpenseCategories from "./dashboard/ExpenseCategories";
import TestComponent from "./dashboard/TestComponent";
import TransactionsTableComponent from "./dashboard/TransactionsTableComponent";
import NewDashboard from "./dashboard/NewDashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {index: true, element: <HomePage />},
            {path: "/dashboard", element: <DashboardPage />},
            {path: "/login", element: <LoginPage />},
            {path: "/expensesovertime", element: <Expenses_over_time />},
            {path: "/chad", element: <ChadDashboard />},
            {path: "/monthlybudget", element: <MonthlyBudget />},
            {path: "/totalsaved", element: <TotalSaved />},
            {path: "/monthlyinvestments", element: <MonthlyInvestments />},
            {path: "/expensecategories", element: <ExpenseCategories />},
            {path: "/test", element: <TestComponent />},
            {path: "/transactions", element: <TransactionsTableComponent />},
            {path: "/newdashboard", element: <NewDashboard />},
        ]

    }
]);

export default router