import mongoose from "mongoose";

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI);
  console.log(conn);
  console.log(conn.connection.user);
};

export default connectDB;
