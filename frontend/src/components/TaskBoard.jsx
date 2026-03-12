import { DndContext } from '@dnd-kit/core'
import TaskColumn from "./TaskColumn";
import { getTasks, updateTask } from "../api/task";
import { useTasks } from '../contexts/TaskContext';

export default function TaskBoard() {

    const { loading, tasks, fetchTasks } = useTasks();

    const todo = tasks.filter((task) => task.status === "todo");
    const progress = tasks.filter((task) => task.status === "progress");
    const done = tasks.filter((task) => task.status === "done");

    async function handleDrangEnd(event) {
        const { active, over } = event;

        if (!over) return;

        const taskId = active.id;
        const newStatus = over.id;

        const task = tasks.find(t => t._id === taskId);

        if (task.status !== newStatus) {
            await updateTask(taskId, { status: newStatus });
            fetchTasks();
        }
    }

    if (loading) return <p>Loading...</p>
    return (
        <DndContext onDragEnd={handleDrangEnd}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <TaskColumn title={`To Do (${todo.length})`} tasks={todo} id={"todo"} />
                <TaskColumn title={`In Progress (${progress.length})`} tasks={progress} id={"progress"} />
                <TaskColumn title={`Completed (${done.length})`} tasks={done} id={"done"} />
            </div>
        </DndContext>
    )
}