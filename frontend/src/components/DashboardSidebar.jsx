import { LayoutDashboard, LogOut, SquareCheck, User2 } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { logoutUser } from "../api/auth";

export default function DashboardSidebar() {
    const [open, setOpen] = useState(false);

    const { logout } = useAuth();

    async function handleLogout() {
        try {
            await logoutUser();
            logout();
        }
        catch (error) {
            toast.error("Failed to logout");
        }
    }

    return (
        <div className={`bg-white shadow-lg w-64 p-6 space-y-6 fixed md:relative z-20 transform font-inter ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition duration-300`}>
            <h1 className="text-2xl font-bold text-blue-600">TaskFlow</h1>
            <nav className="space-y-4">
                <a className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer"><LayoutDashboard />Dashboard</a>
                {/* <a className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer"><SquareCheck />Tasks</a>
                <a className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer"><User2 />Profile</a> */}
                <a onClick={handleLogout} className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer"><LogOut />Logout</a>
            </nav>
        </div>
    )
}