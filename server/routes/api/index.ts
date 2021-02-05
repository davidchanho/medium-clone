import express from "express";
import postRoutes from "./postsRoutes";
import publicationRoutes from "./publicationsRoutes";
import commentRoutes from "./commentsRoutes";
import userRoutes from "./usersRoutes";

const router = express.Router();

router.use("/posts", postRoutes);
router.use("/publications", publicationRoutes);
router.use("/comments", commentRoutes);
router.use("/users", userRoutes);

export default router;
