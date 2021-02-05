import express from "express";
import usersControllers from "../../controllers/usersControllers";

const router = express.Router();

// Matches with "/api/users"
router.route("/").get(usersControllers.getUsers).post(usersControllers.addUser);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersControllers.getUser)
  .put(usersControllers.updateUser)
  .delete(usersControllers.deleteUser);

export default router;
