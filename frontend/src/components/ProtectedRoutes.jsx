import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"

export default function ProtectedRoutes() {
    const { user } = useAuth();

    return user ? <Outlet /> : <Navigate to={'/login'} />
}