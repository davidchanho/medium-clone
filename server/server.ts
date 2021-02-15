import compression from "compression";
import cors from "cors";
import express from "express";
import logger from "morgan";
import startDB from "./db";
import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(compression());
app.use(cors({ origin: `http://localhost:${PORT}` }));

startDB();

app.use(routes);

app.listen(PORT, () => {
  console.log(`server running on: http://localhost:${PORT}`);
});
