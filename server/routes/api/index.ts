import express from "express";
import commentRoutes from "./commentsRoutes";
import postRoutes from "./postsRoutes";
import publicationRoutes from "./publicationsRoutes";
import topicRoutes from "./topicsRoutes";
import userRoutes from "./usersRoutes";

const router = express.Router();

router.use("/posts", postRoutes);
router.use("/publications", publicationRoutes);
router.use("/comments", commentRoutes);
router.use("/users", userRoutes);
router.use("/topics", topicRoutes);

export default router;
