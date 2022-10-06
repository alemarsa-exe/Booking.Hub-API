import express from "express";
import { getAllDevices } from "../controllers/deviceController.js";
import { getAllLab } from "../controllers/labController.js";
import { getAllSoftware } from "../controllers/softwareController.js";
import { createError } from "../utils/error.js";


const router = express.Router();


//GET ALL
router.get("/", getAllDevices);
router.get("/", getAllLab);
router.get("/", getAllSoftware);

export default router