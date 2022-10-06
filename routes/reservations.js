import express from "express";
import { createReservation, getAllReservation } from "../controllers/reservController.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

/*
router.get("/", (req, res) => {
    res.send("Hello, this is the labs endpoint")
})
*/

//CREATE
router.post("/", verifyAdmin, createReservation);
router.get("/", getAllReservation);


export default router