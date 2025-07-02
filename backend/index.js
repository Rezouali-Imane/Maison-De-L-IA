import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './database/connectDb.js';
import authRoutes from './routes/authRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
  res.send('server test');
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
   //connect to db 
   connectDb();
  console.log("Server is running on port", PORT);
});
