import mongoose from 'mongoose';
export const connectDb = async() => {
    try {
        console.log("mongo uri : ", process.env.MONGO_URI);
       const connection = await mongoose.connect(process.env.MONGO_URI)
       console.log(`MongoDB database connected successfully ${connection.connection.host}`);
    } catch (error) {
        console.log("mongoDB connection error:", error.message);
        process.exit(1); // Exit the process with failure, 0 status means success 
    }
}