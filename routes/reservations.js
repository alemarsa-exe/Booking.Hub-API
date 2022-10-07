import express from "express";
import { createReservation, deleteReservation, getAllReservation, getReservation, updateReservation } from "../controllers/reservController.js";
import { createError } from "../utils/error.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

/*
router.get("/", (req, res) => {
    res.send("Hello, this is the labs endpoint")
})
*/

//CREATE
router.post("/", createReservation);
router.put("/:id", updateReservation);
router.delete("/:id", deleteReservation);
router.get("/:id", getReservation);
router.get("/", getAllReservation);


export default router