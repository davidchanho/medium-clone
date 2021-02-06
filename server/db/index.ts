import { connectDb } from "./seed/utils";

const connectDB = async () => {
  try {
    await connectDb();
  } catch (err) {
    console.error(err.message);
    process.exit();
  }
};

export default connectDB;
