import express from "express";
import postRoutes from "./postsRoutes";

const router = express.Router();

router.use("/posts", postRoutes);

export default router;
