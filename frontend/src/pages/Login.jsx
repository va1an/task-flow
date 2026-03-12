import { useState } from "react";
import Input from "../components/Input";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { loginUser } from "../api/auth";
import { useAuth } from "../contexts/AuthContext";
import { setAccessToken } from "../utils/token";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { login, user } = useAuth();

    const navigate = useNavigate();

    async function handleSubmit() {
        try {
            const res = await loginUser({ email, password });
            const loggedInUser = res.data.user;
            login(loggedInUser, res.data.accessToken);
            setAccessToken(res.data.accessToken);
            toast.success("Login successful");
            navigate('/dashboard')
        }
        catch (error) {
            toast.error("Login failed");
        }
    }

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            <div className="relative hidden md:block">
                <img src="login.png" alt="login illustrator" className="absolute inset-0 w-full h-full object-contain" />
            </div>
            <div className="flex items-center justify-center bg-slate-200">
                <div className="p-8 bg-white rounded-xl max-w-md w-full">
                    <h2 className="font-inter text-3xl font-bold">Welcome Back</h2>
                    <p className="font-inter text-gray-500">Login to your account</p>

                    <form action={handleSubmit} className="space-y-3 mt-3">
                        <Input label={"Email"} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"Email"} icon={<Mail />} />
                        <Input label={"Password"} type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={"Password"} icon={<Lock />} rightIcon={showPassword ? <EyeOff /> : <Eye />} onRightIconClick={() => setShowPassword(!showPassword)} />
                        <button className="bg-blue-500 hover:bg-blue-600 font-inter text-white cursor-pointer w-full px-4 py-2 rounded-lg">Login</button>
                    </form>
                    <p onClick={() => navigate('/forgot-password')} className="text-end mt-3 font-inter text-blue-800 hover:underline cursor-pointer">Forgot password?</p>
                    <p className="mt-3 text-center font-inter">Don't have an account? <Link to={"/register"} className="text-blue-800 hover:underline">Signup</Link></p>
                </div>
            </div>
        </div>
    )
}