import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    return (
        <div className="bg-gray-50 text-gray-800 font-inter">
            <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-white shadow-sm">
                <h1 className="text-2xl font-bold text-blue-600">Task Flow</h1>
                <div className="hidden md:flex gap-8 items-center">
                    <a href="#" className="hover:text-blue-600">Home</a>
                    <a href="#" className="hover:text-blue-600">Features</a>
                    <a href="#" className="hover:text-blue-600">Pricing</a>
                    <a href="#" className="hover:text-blue-600">About</a>
                    <button onClick={() => navigate('/login')} className="px-4 py-2 border border-blue-600 rounded-lg hover:bg-gray-100 cursor-pointer">Login</button>
                    <button onClick={() => navigate('/register')} className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg cursor-pointer">Get Started</button>
                </div>

                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-3xl">{menuOpen ? <X /> : <MenuIcon />}</button>
            </nav>

            {menuOpen && (
                <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-4 font-inter">
                    <a href="#" className="block hover:text-blue-600 text-center">Home</a>
                    <a href="#" className="block hover:text-blue-600 text-center">Features</a>
                    <a href="#" className="block hover:text-blue-600 text-center">Pricing</a>
                    <a href="#" className="block hover:text-blue-600 text-center">About</a>
                    <button onClick={() => navigate('/login')} className="w-full px-4 py-2 rounded-lg hover:bg-gray-100 border border-blue-600 cursor-pointer">Login</button>
                    <button onClick={() => navigate('/register')} className="w-full px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg cursor-pointer">Get Started</button>
                </div>
            )}
        </div>
    )
}