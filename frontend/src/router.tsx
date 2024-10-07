import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout";
import DashboardPage from "./dashboard/DashboardPage";
import LoginPage from "./login/LoginPage";
import HomePage from "./homepage/HomePage";
import TestComponent from "./TestComponent";
import { ChadDashboard } from "./ChadDashboard";
import MonthlyBudget from "./dashboard/MonthlyBudget";
import TotalSaved from "./dashboard/TotalSaved";
import MonthlyInvestments from "./dashboard/MonthlyInvestments";
import ExpenseCategories from "./dashboard/ExpenseCategories";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {index: true, element: <HomePage />},
            {path: "/dashboard", element: <DashboardPage />},
            {path: "/login", element: <LoginPage />},
            {path: "/test", element: <TestComponent />},
            {path: "/chad", element: <ChadDashboard />},
            {path: "/monthlybudget", element: <MonthlyBudget />},
            {path: "/totalsaved", element: <TotalSaved />},
            {path: "/monthlyinvestments", element: <MonthlyInvestments />},
            {path: "/expensecategories", element: <ExpenseCategories />},
        ]

    }
]);

export default router