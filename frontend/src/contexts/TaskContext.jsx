import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { createTask, deleteTask, updateTask, getTasks } from "../api/task";
import { useAuth } from "./AuthContext";

const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editTask, setEditTask] = useState(null);

    const { user } = useAuth();

    async function fetchTasks(filters = {}) {
        try {
            const { data } = await getTasks(filters);
            setTasks(data);
        }
        catch (error) {
            toast.error("Failed to fetch tasks")
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user) {
            fetchTasks();
        }
    }, [user]);

    async function handleCreateTask(form) {
        try {
            await createTask(form);
            toast.success("Task created");
            fetchTasks();
            setIsModalOpen(false);
        }
        catch (error) {
            toast.error("Failed to create task")
        }
    }

    async function handleEditTask(id, form) {
        try {
            await updateTask(id, form);
            toast.success("Task updated");
            fetchTasks();
            setIsModalOpen(false);
            setEditTask(null);
        }
        catch (error) {
            toast.error("Failed to edit task")
        }
    }

    async function handleDeleteTask(id) {
        try {
            await deleteTask(id);
            toast.success("Task deleted");
            fetchTasks();
        }
        catch (error) {
            toast.error("Failed to delete task");
        }
    }

    return (
        <TaskContext.Provider value={{ tasks, loading, fetchTasks, isModalOpen, setIsModalOpen, editTask, setEditTask, handleCreateTask, handleEditTask, handleDeleteTask }}>
            {children}
        </TaskContext.Provider>
    )
}

export function useTasks() {
    return useContext(TaskContext);
}