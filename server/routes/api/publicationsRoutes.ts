import express from "express";
import publicationsControllers from "../../controllers/publicationsControllers";

const router = express.Router();

// Matches with "/api/publications"
router
  .route("/")
  .get(publicationsControllers.fetchPublications)
  .post(publicationsControllers.addPublication);

// Matches with "/api/publications/:id"
router
  .route("/:id")
  .get(publicationsControllers.fetchPublication)
  .put(publicationsControllers.updatePublication)
  .delete(publicationsControllers.deletePublication);

export default router;
