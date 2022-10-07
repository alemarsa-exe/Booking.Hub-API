import express from "express";
import { createSoftware, deleteSoftware, getAllSoftware, getSoftware, updateSoftware } from "../controllers/softwareController.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();


//CREATE
router.post("/", createSoftware);


//UPDATE
router.put("/:id", updateSoftware);


//DELETE
router.delete("/:id", deleteSoftware);


//GET
router.get("/:id", getSoftware);


//GET ALL
router.get("/", getAllSoftware);

export default router