import { useEffect, useState } from "react"
import api from "../api/axios";

export default function ActivityPanel() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        async function fetchActivities() {
            const { data } = await api.get("/activities");
            setActivities(data);
        }
        fetchActivities();
    }, []);

    return (
        <div className="bg-white p-4 rounded-xl shadow font-inter">
            <h3 className="font-semibold mb-4">Recent Activity</h3>

            <div className="space-y-3 text-sm">
                {activities.map((a) => (
                    <div key={a._id} className="border-b pb-2">
                        <p>You {a.action}</p>
                        <p className="text-gray-500">{a.taskTitle}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}