import express from "express";
import verify from "jsonwebtoken";
import { deleteUser, getAllUsers, getUser, updateUser} from "../controllers/userController.js";
import { createError } from "../utils/error.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

/*router.get("/checkauth", verifyToken, (req, res, next)=>{
    res.send("Hello user, you're logged in")
})

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("Hello user, you're logged in and you can delete your account")
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("Hello admin, you're logged in and you can delete all accounts")
})
*/

//UPDATE
//router.put("/:id", verifyUser, updateUser);
router.put("/:id", updateUser);


//DELETE
//router.delete("/:id", verifyUser, deleteUser);
router.delete("/:id", deleteUser);


//GET
//router.get("/:id", verifyUser, getUser);
router.get("/:id", getUser);


//GET ALL
//router.get("/", verifyAdmin, getAllUsers);
router.get("/", getAllUsers);

export default router