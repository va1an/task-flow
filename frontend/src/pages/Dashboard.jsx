import toast from "react-hot-toast";
import { logoutUser } from "../api/auth";
import { useAuth } from "../contexts/AuthContext"
import DashboardSidebar from "../components/DashboardSidebar";
import DashboardContent from "../components/DashboardContent";
import DashboardNavbar from "../components/DashboardNavbar";


export default function Dashboard() {

    return (
        <div>
            <DashboardContent />
        </div>
    )
}