import { X } from "lucide-react";
import { useEffect, useState } from "react"
import { createTask, updateTask } from "../api/task";
import toast from "react-hot-toast";
import { useTasks } from "../contexts/TaskContext";

export default function TaskModal() {
    const { isModalOpen, setIsModalOpen, editTask, handleEditTask, handleCreateTask } = useTasks();

    const emptyForm = {
        title: "",
        description: "",
        status: "todo",
        priority: "medium",
        dueDate: ""
    }

    const [form, setForm] = useState(emptyForm);

    useEffect(() => {
        if (editTask) {
            setForm(editTask);
        } else {
            setForm(emptyForm)
        }
    }, [editTask]);

    function handleChange(e) {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    async function handleSubmit() {
        try {
            if (editTask) {
                handleEditTask(editTask._id, form);
            }
            else {
                handleCreateTask(form);
                setForm(emptyForm);
            }
        }
        catch (error) {
            toast.error("Something went wrong")
        }
    }

    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl w-full max-w-lg p-6 shadow-lg">

                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">{editTask ? "Edit Task" : "Add Task"}</h2>
                    <button onClick={() => setIsModalOpen(false)}><X /></button>
                </div>

                <form action={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-sm font-medium">Title</label>
                        <input type="text" name="title" value={form.title} onChange={handleChange} className="w-full border rounded-lg outline-none px-3 py-1 mt-1" placeholder="Title" required />
                    </div>

                    <div>
                        <label className="text-sm font-medium">Description</label>
                        <textarea type="text" name="description" value={form.description} onChange={handleChange} className="w-full border rounded-lg outline-none px-3 py-1 mt-1" placeholder="Description" />
                    </div>

                    <div>
                        <label className="text-sm font-medium">Priority</label>
                        <select name="priority" value={form.priority} onChange={handleChange} className="w-full border rounded-lg outline-none px-3 py-1 mt-1">
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-sm font-medium">Status</label>
                        <select name="status" value={form.status} onChange={handleChange} className="w-full border rounded-lg outline-none px-3 py-1 mt-1">
                            <option value="todo">Todo</option>
                            <option value="progress">In Progress</option>
                            <option value="done">Completed</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-sm font-medium">Due Date</label>
                        <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} className="w-full border rounded-lg outline-none px-3 py-1 mt-1" />
                    </div>

                    <div className="flex justify-end gap-3 pt-3">
                        <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 rounded-lg border hover:bg-gray-100 cursor-pointer">Cancel</button>
                        <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 cursor-pointer">{editTask ? "Update Task" : "Create Task"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}