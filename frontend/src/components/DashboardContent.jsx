import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import TaskBoard from "./TaskBoard";
import TaskModal from "./TaskModal";
import toast from "react-hot-toast";
import { getTasks } from "../api/task";
import { useTasks } from "../contexts/TaskContext";
import TaskControls from "./TaskControls";
import ActivityPanel from "../pages/ActivityPanel";

export default function DashboardContent() {
    const [open, setOpen] = useState(false);

    const { tasks, setIsModalOpen } = useTasks();

    const totalTasks = tasks.length;
    const progress = tasks.filter((task) => task.status === "progress").length;
    const done = tasks.filter((task) => task.status === "done").length;

    return (
        <main className="font-inter">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Welcome Back!</h3>
                <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white rounded-lg font-semibold">+ Add Task</button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow">
                    <p className="text-gray-500">Total Tasks</p>
                    <h3 className="text-3xl font-bold">{totalTasks}</h3>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                    <p className="text-gray-500">In Progress</p>
                    <h3 className="text-3xl font-bold">{progress}</h3>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                    <p className="text-gray-500">Completed</p>
                    <h3 className="text-3xl font-bold">{done}</h3>
                </div>
            </div>

            <TaskControls />
            <TaskBoard />
            {/* <ActivityPanel /> */}
            <TaskModal />
        </main>
    )
}