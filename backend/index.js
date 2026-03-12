import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoutes.js';
import taskrouter from './routes/taskRoutes.js';
import activityRouter from './routes/activityRoutes.js';

const app = express();

const allowedOrigins = ["http://localhost:5173", "https://task-flow-wheat-theta.vercel.app"]

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/task", taskrouter);
app.use("/api/activities", activityRouter);

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL)
    .then(() => {
        console.log("MongoDB connected successfully")
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })