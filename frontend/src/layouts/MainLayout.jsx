import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";

export default function MainLayout() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <DashboardSidebar />
            <div className="flex-1 flex flex-col">
                <DashboardNavbar />
                <main className="p-6 overflow-y-auto flex-1">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}