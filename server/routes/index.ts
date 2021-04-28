import express from "express";
import apiRoutes from "./api";

const router = express.Router();

router.use("/api", apiRoutes);
router.use(express.static(__dirname + "frontend/public/index.html"));

export default router;
