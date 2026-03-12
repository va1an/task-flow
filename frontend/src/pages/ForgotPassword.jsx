import { useState } from "react";
import Input from "../components/Input";
import { Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { forgotPassword } from "../api/auth";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    async function handleSubmit() {
        try {
            console.log(email)
            const { data } = await forgotPassword(email);
            toast.success("Reset link sent to your email");
            console.log(data.resetLink);
            navigate('/');
        }
        catch (error) {
            toast.error("Failed to sent reset link");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-200">
            <div className="max-w-lg w-full bg-white p-8 rounded-xl">
                <h1 className="font-inter font-bold text-center text-3xl">Forgot Password?</h1>
                <p className="font-inter text-gray-500 text-center mt-3">No worries. Enter your registered email address and we'll send you a link to reset your password.</p>
                <form action={handleSubmit} className="mt-5 space-y-3">
                    <Input label={"Email"} type="email" value={email} placeholder={"Email"} onChange={(e) => setEmail(e.target.value)} icon={<Mail />} />
                    <button className="bg-blue-500 hover:bg-blue-600 font-inter text-white px-4 py-2 cursor-pointer w-full rounded-lg">Send Reset Link</button>
                </form>
                <Link to={"/login"} className="mt-5 flex items-center justify-center text-blue-800 font-inter hover:underline">Back to login</Link>
            </div>
        </div>
    )
}