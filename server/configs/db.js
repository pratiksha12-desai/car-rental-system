import mongoose from "mongoose";

const defaultMongoUri = "mongodb://127.0.0.1:27017";

const connectDB = async () => {
  try {
    const mongoUri = (process.env.MONGODB_URI || defaultMongoUri).replace(/\/$/, "");

    mongoose.connection.on("connected", () => console.log("Database connected"));
    mongoose.connection.on("error", (error) => console.log("MongoDB connection error:", error.message));

    await mongoose.connect(`${mongoUri}/car-rental`, {
      serverSelectionTimeoutMS: 3000,
      connectTimeoutMS: 3000,
    });
  } catch (error) {
    console.log("MongoDB connection failed:", error.message);
  }
};

export default connectDB;
