import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";
import { useTasks } from "../contexts/TaskContext";

export default function TaskColumn({ id, title, tasks }) {
    // const { tasks } = useTasks();
    const { setNodeRef } = useDroppable({ id });
    return (
        <div ref={setNodeRef} className="bg-gray-100 rounded-xl p-4 font-inter">
            <h2 className="font-semibold mb-4">{title}</h2>

            <div className="space-y-3">
                {tasks.length === 0 ? (
                    <div className="text-center text-gray-400 py-10 border-2 border-dashed border-gray-300 rounded-lg">
                        <p className="text-sm">No tasks yet</p>
                        <p className="text-xs mt-1">Drag a task here or create one</p>
                    </div>
                ) : (tasks.map((task) => (
                    <TaskCard key={task._id} task={task} />
                )))}
            </div>
        </div>
    )
}