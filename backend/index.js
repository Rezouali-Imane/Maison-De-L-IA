import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './database/connectDb.js';
import authRoutes from './routes/authRoute.js';
import cookieParser from 'cookie-parser';


dotenv.config();

const app = express();
app.use(cookieParser());
const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
   //connect to db 
   connectDb();
  console.log("Server is running on port", PORT);
});
