import express from "express";
import { createDevice, deleteDevice, getAllDevices, getDevice, updateDevice } from "../controllers/deviceController.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createDevice);


//UPDATE
router.put("/:id", verifyAdmin, updateDevice);


//DELETE
router.delete("/:id", verifyAdmin, deleteDevice);


//GET
router.get("/:id", getDevice);


//GET ALL
router.get("/", getAllDevices);

export default router