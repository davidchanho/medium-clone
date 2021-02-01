import express from "express";
import postRoutes from "./postsRoutes";
import publicationRoutes from "./publicationsRoutes";

const router = express.Router();

router.use("/posts", postRoutes);
router.use("/publications", publicationRoutes);

export default router;
