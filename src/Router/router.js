import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Attendence from "../Pages/Attendence/Attendence";
import Dashboard from "../Pages/Dashboard/Dashboard";

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
            }
        ]
    }
])