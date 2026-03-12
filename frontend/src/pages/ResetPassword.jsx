import { useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom";
import Input from "../components/Input";
import { Eye, EyeOff, Lock } from "lucide-react";
import toast from "react-hot-toast";
import { resetPassword } from "../api/auth";

export default function ResetPassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();
    const { token } = useParams();

    async function handleSubmit() {
        try {
            if (password !== confirmPassword) {
                return toast.error("New password and confirm password did not match");
            }

            await resetPassword(token, password);
            toast.success("Password reset successful");
            navigate("/login");
        }
        catch (error) {
            toast.error("Failed to reset password");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-200">
            <div className="bg-white p-8 max-w-lg w-full rounded-xl">
                <h1 className="font-inter font-bold text-center text-3xl">Reset Your Password</h1>
                <p className="font-inter text-gray-500 text-center mt-3">Enter new password below to reset your password.</p>

                <form action={handleSubmit} className="mt-5 space-y-3">
                    <Input type={showPassword ? "text" : "password"} label={"New Password"} placeholder={"New Password"} value={password} onChange={(e) => setPassword(e.target.value)} icon={<Lock />} rightIcon={showPassword ? <EyeOff /> : <Eye />} onRightIconClick={() => setShowPassword(!showPassword)} />
                    <Input type={showConfirmPassword ? "text" : "password"} label={"Confirm New Password"} placeholder={"Confirm New Password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} icon={<Lock />} rightIcon={showConfirmPassword ? <EyeOff /> : <Eye />} onRightIconClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                    <button className="bg-blue-500 hover:bg-blue-600 w-full rounded-lg font-inter text-white cursor-pointer px-4 py-2">Reset Password</button>
                </form>
                <Link to={"/login"} className="mt-5 flex items-center justify-center text-blue-800 font-inter hover:underline">Back to login</Link>
            </div>
        </div>
    )
}