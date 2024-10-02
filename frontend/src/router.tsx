import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout";
import DashboardPage from "./dashboard/DashboardPage";
import LoginPage from "./login/LoginPage";
import HomePage from "./homepage/HomePage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {index: true, element: <HomePage />},
            {path: "/dashboard", element: <DashboardPage />},
            {path: "/login", element: <LoginPage />},
        ]

    }
]);

export default router