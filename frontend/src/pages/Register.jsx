import { useState } from "react";
import Input from "../components/Input";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { registerUser } from "../api/auth";
import { useAuth } from "../contexts/AuthContext";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState("");
    const [showConfirmPassword, setShowConfirmPassword] = useState("");

    const navigate = useNavigate();

    const { login } = useAuth();

    async function handleSubmit() {
        try {
            if (password !== confirmPassword) {
                return toast.error("Password and confirm password did not match");
            }

            const res = await registerUser({ name, email, password });
            login(res.data.user, res.data.accessToken);
            toast.success("User register successful");
            navigate('/dashboard');
        }
        catch (error) {
            toast.error("Failed to signup");
        }
    }

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            <div className="relative hidden md:block">
                <img src="login.png" alt="login illustrator" className="absolute inset-0 w-full h-full object-contain" />
            </div>
            <div className="flex items-center justify-center bg-slate-200">
                <div className="p-8 bg-white rounded-xl max-w-md w-full">
                    <h2 className="font-inter text-3xl font-bold">Get Started</h2>
                    <p className="font-inter text-gray-500">Create your account</p>

                    <form action={handleSubmit} className="space-y-3 mt-3">
                        <Input label={"Name"} value={name} onChange={(e) => setName(e.target.value)} placeholder={"Name"} icon={<User />} />
                        <Input label={"Email"} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"Email"} icon={<Mail />} />
                        <Input label={"Password"} type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={"Password"} icon={<Lock />} rightIcon={showPassword ? <EyeOff /> : <Eye />} onRightIconClick={() => setShowPassword(!showPassword)} />
                        <Input label={"Confirm Password"} type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder={"Confirm Password"} icon={<Lock />} rightIcon={showConfirmPassword ? <EyeOff /> : <Eye />} onRightIconClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                        <button className="bg-blue-500 hover:bg-blue-600 font-inter text-white cursor-pointer w-full px-4 py-2 rounded-lg">Signup</button>
                    </form>
                    <p className="mt-3 text-center font-inter">Already have an account? <Link to={"/login"} className="text-blue-800 hover:underline">Login</Link></p>
                </div>
            </div>
        </div>
    )
}