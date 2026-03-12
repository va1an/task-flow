import { useDraggable } from "@dnd-kit/core";
import { Calendar, Pencil, Trash } from "lucide-react";
import { CSS } from "@dnd-kit/utilities";
import { useTasks } from "../contexts/TaskContext";
import { useState } from "react";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

export default function TaskCard({ task }) {
    const { handleDeleteTask, setIsModalOpen, setEditTask } = useTasks();
    const [openModal, setOpenModal] = useState(false);
    const [taskId, setTaskId] = useState(null);

    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: task._id });

    const style = {
        transform: transform ? CSS.Translate.toString(transform) : undefined
    };

    function handleEdit() {
        setEditTask(task);
        setIsModalOpen(true);
    }

    async function handleDelete() {
        handleDeleteTask(taskId);
        setOpenModal(false);
    }

    return (
        <div ref={setNodeRef} style={style} className="bg-white shadow rounded-lg p-4 cursor-pointer hover:shadow-md font-inter">
            <div {...listeners} {...attributes}>
                <h3 className="font-semibold text-gray-800 text-lg">{task.title}</h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{task.description}</p>

                <div className="flex item-center justify-between mt-4">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${task.priority === "high" ? "bg-red-100 text-red-600" : task.priority === "medium" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>
                        {task.priority}
                    </span>

                    {task.dueDate && (
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Calendar />
                            {new Date(task.dueDate).toLocaleDateString()}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex justify-end gap-3 mt-4 text-gray-500">
                <button onClick={handleEdit} className="hover:text-blue-600"><Pencil /></button>
                <button onClick={() => { setTaskId(task._id); setOpenModal(true) }} className="hover:text-red-600"><Trash /></button>
            </div>

            <ConfirmDeleteModal open={openModal} onClose={() => setOpenModal(false)} onConfirm={handleDelete} />
        </div>
    )
}