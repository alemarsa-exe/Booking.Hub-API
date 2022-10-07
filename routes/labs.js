import express from "express";
import { createLab, deleteLab, getAllLab, getLab, updateLab } from "../controllers/labController.js";
import laboratory from "../models/laboratory.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

/*
router.get("/", (req, res) => {
    res.send("Hello, this is the labs endpoint")
})
*/

//CREATE
//router.post("/", verifyAdmin, createLab);
router.post("/", verifyAdmin, createLab);


//UPDATE
router.put("/:id", updateLab);


//DELETE
router.delete("/:id", deleteLab);


//GET
router.get("/:id", getLab);


//GET ALL
router.get("/", getAllLab);

export default router