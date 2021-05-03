import express from "express";
import commentsControllers from "../../controllers/commentsControllers";

const router = express.Router();

// Matches with "/api/comments"
router
  .route("/")
  .get(commentsControllers.getComments)
  .post(commentsControllers.addComment);

// Matches with "/api/comments/:id"
router
  .route("/:id")
  .get(commentsControllers.getComment)
  .patch(commentsControllers.updateComment)
  .delete(commentsControllers.deleteComment);

export default router;
