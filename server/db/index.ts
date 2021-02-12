import mongoose from "mongoose";

export const connectDb = () => {
  return mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/medium",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  );
};

const connectDB = async () => {
  try {
    await connectDb();
  } catch (err) {
    console.error(err.message);
    process.exit();
  }
};

export default connectDB;
