import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URL;
    await mongoose.connect(mongoURI);

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
