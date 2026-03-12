import { useState } from "react";
import { useTasks } from "../contexts/TaskContext"

export default function TaskControls() {
    const { fetchTasks } = useTasks();

    const [search, setSearch] = useState("");
    const [priority, setPriority] = useState("");
    const [sort, setSort] = useState("");

    function handleSearch() {
        fetchTasks({ search, priority, sort });
    }

    return (
        <form action={handleSearch} className="flex flex-wrap gap-3 mb-6 font-inter">
            <input type="text" placeholder="Search tasks..." value={search} onChange={(e) => setSearch(e.target.value)} className="border px-3 py-1 rounded-lg" />

            <select name="priority" id="" value={priority} onChange={(e) => setPriority(e.target.value)} className="border px-3 py-1 rounded-lg">
                <option value="">All Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <select name="sort" id="" value={sort} onChange={(e) => setSort(e.target.value)} className="border px-3 py-1 rounded-lg">
                <option value="">Sort</option>
                <option value="dueDate">Due Date</option>
            </select>

            <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-lg px-4 py-2">Apply</button>
        </form>
    )
}