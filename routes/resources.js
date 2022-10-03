import express from "express";
import { createResource } from "../controllers/resourceController.js"

const router = express.Router();

/*
router.get("/", (req, res) => {
    res.send("Hello, this is resources endpoint")
})
*/

//CREATE
router.post("/", createResource)
//UPDATE
//DELETE
//GET
//GET ALL


export default router