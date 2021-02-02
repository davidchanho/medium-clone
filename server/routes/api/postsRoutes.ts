import express from "express";
import postsControllers from "../../controllers/postsControllers";

const router = express.Router();

// Matches with "/api/posts"
router
  .route("/")
  .get(postsControllers.fetchPosts)
  .post(postsControllers.addPost);

// Matches with "/api/posts/seed"
router.route("/seed").post(postsControllers.seedPosts);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(postsControllers.fetchPost)
  .put(postsControllers.updatePost)
  .delete(postsControllers.deletePost);

export default router;
