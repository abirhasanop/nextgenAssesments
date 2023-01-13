import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Attendence from "../Pages/Attendence/Attendence";
import ComingSoon from "../Pages/ComingSoon/ComingSoon";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/attendence",
                element: <Attendence />
            },
            {
                path: "/coming-soon",
                element: <ComingSoon />
            },
            {
                path: "*",
                element: <ErrorPage />
            }
        ]
    }
])