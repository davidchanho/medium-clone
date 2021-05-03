import express from "express";
import topicsControllers from "../../controllers/topicsControllers";

const router = express.Router();

// Matches with "/api/topics"
router.route("/").get(topicsControllers.getTopics);

// Matches with "/api/topics/:id"
router.route("/:id").get(topicsControllers.getTopic);

export default router;
