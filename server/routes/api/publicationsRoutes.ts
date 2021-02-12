import express from "express";
import publicationsControllers from "../../controllers/publicationsControllers";

const router = express.Router();

// Matches with "/api/publications"
router.route("/").get(publicationsControllers.getPublications);

// Matches with "/api/publications/:id"
router.route("/:id").get(publicationsControllers.getPublication);

export default router;
