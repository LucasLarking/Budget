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
import NewHomePage from "./homepage/NewHomePage";
import BlockHomePage from "./homepage/BlockHomePage";
import BlockDashboard from "./homepage/BlockDashboard";
import TransactionPage from "./transaction/TransactionPage";
import TransactionForm from "./transaction/TransactionForm";
import SignUpPage from "./login/SignUpPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {index: true, element: <BlockHomePage />},
            {path: "/login", element: <LoginPage />},
            {path: "/signup", element: <SignUpPage />},
            {path: "/test", element: <TestComponent />},
            {path: "/newdashboard", element: <NewDashboard />},
            {path: "/newhomepage", element: <NewHomePage />},
            {path: "/block", element: <BlockHomePage />},
            {path: "/blockdashboard", element: <BlockDashboard />},
            {path: "/transaction", element: <TransactionForm closeForm={() => {}} />},
            // {path: "/vendor", element: <VendorForm />},
            {path: "/addtransaction", element: <TransactionPage />},
        ]

    }
]);

export default router