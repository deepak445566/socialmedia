import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import connectDB from './config/db.js';
import postRouter from './routes/postRoutes.js';
import userRouter from './routes/userRoutes.js';


dotenv.config();
const app = express();
app.use(cookieParser());
await connectDB();
app.use(cors({
  origin: 'http://localhost:5173', // ✅ Vite frontend URL
  credentials: true,               // ✅ Allow cookies / token
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/post',postRouter);
app.use('/api/user',userRouter);

app.use(express.static("uploads"))




const PORT=4000;

app.listen(PORT,()=>{
  console.log(`server runn on POrt ${PORT}`)
})

