import compression from "compression";
import cors from "cors";
import express from "express";
import logger from "morgan";
import startDB from "./db";
import routes from "./routes";
import { initOpenApi, openApiInstance } from "./openApi";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(compression());
app.use(cors({ origin: `http://localhost:${PORT}` }));

startDB();
// initOpenApi(app, openApiInstance);
app.use(routes);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}

export default app;
