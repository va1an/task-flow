import Activity from "../models/activityModel.js"

export const getActivities = async (req, res) => {
    try {
        const activities = await Activity.find({ user: req.user._id }).sort({ createdAt: -1 }).limit(10);

        res.status(200).json(activities);
    }
    catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}