import cors from "cors";
import express from "express";
import connectDB from "./config/db";
import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: `http://localhost:${PORT}` }));

connectDB();

app.use(routes);

app.listen(PORT, () => {
  console.log(`server running on: http://localhost:${PORT}`);
});
