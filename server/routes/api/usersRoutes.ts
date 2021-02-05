import express from "express";
import usersControllers from "../../controllers/usersControllers";

const router = express.Router();

// Matches with "/api/users"
router.route("/").get(usersControllers.getPosts).post(usersControllers.addPost);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersControllers.getPost)
  .put(usersControllers.updatePost)
  .delete(usersControllers.deletePost);

export default router;
