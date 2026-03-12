import { Menu } from "lucide-react";
import { useState } from "react";

export default function DashboardNavbar() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <header className="bg-white shadow p-4 flex justify-between items-center">
                <button onClick={() => setOpen(!open)} className="md:hidden text-2xl"><Menu /> </button>

                <h2 className="text-xl font-semibold">Dashboard</h2>

                {/* <div className="flex items-center gap-4">
                    <input type="text" placeholder="Search tasks..." className="border border-blue-600 outline-none px-3 py-1 rounded-lg hidden md:block" />
                    <img src="https://i.pravatar.cc/40" alt="profile" className="w-10 h-10 rounded-full" />
                </div> */}
            </header>
        </div>
    )
}