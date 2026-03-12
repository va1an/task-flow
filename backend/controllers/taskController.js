import Task from "../models/taskModel.js";
import Activity from "../models/activityModel.js";

export const createTask = async (req, res) => {
    try {
        const { title, description, status, priority, dueDate } = req.body;

        const task = await Task.create({ title, description, status, priority, dueDate, user: req.user._id });

        await Activity.create({ user: req.user._id, action: "Created a task", taskTitle: task.title });

        res.status(201).json(task);
    }
    catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}

export const getTasks = async (req, res) => {
    try {
        const { search, priority, sort } = req.query;
        let query = { user: req.user._id };

        if (priority) {
            query.priority = priority;
        }

        if (search) {
            query.$or = [
                { title: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } }
            ];
        }

        let taskQuery = Task.find(query);

        if (sort === "dueDate") {
            taskQuery = taskQuery.sort({ dueDate: 1 });
        }

        const tasks = await taskQuery;

        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}

export const updateTask = async (req, res) => {
    try {
        const { title, description, status, priority, dueDate } = req.body;

        const task = await Task.findByIdAndUpdate({ _id: req.params.id }, { title, description, status, priority, dueDate }, { new: true });

        await Activity.create({ user: req.user._id, action: "Updated a task", taskTitle: task.title });

        res.status(200).json(task);
    }
    catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        await Activity.create({ user: req.user._id, action: "Deleted a task", taskTitle: task.title });

        await Task.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: "Task deleted" });
    }
    catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}

export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        res.status(200).json(task);
    }
    catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}