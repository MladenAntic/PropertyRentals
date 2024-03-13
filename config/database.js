import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // If the connection is already established, return that connection
  if (connected) {
    return mongoose.connection;
  }

  try {
    // Connect to the MongoDB database
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    throw error;
  }
};

export default connectDB;
