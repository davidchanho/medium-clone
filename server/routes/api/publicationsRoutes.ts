import express from "express";
import publicationsControllers from "../../controllers/publicationsControllers";

const router = express.Router();

// Matches with "/api/publications"
router
  .route("/")
  .get(publicationsControllers.getPublications)
  .post(publicationsControllers.addPublication);

// Matches with "/api/publications/seed"
router.route("/seed").post(publicationsControllers.seedPublications);

// Matches with "/api/publications/:id"
router
  .route("/:id")
  .get(publicationsControllers.getPublication)
  .put(publicationsControllers.updatePublication);

router.route('/:id/posts').get(publicationsControllers.getPublicationPosts)

export default router;
