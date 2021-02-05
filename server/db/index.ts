import dotenv from "dotenv";
import { connectDb } from "./seed/utils";

dotenv.config();

const connectDB = async () => {
  try {
    await connectDb();
  } catch (err) {
    console.error(err.message);
    process.exit();
  }
};

export default connectDB;
