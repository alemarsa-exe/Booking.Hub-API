import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { createError } from "../utils/error.js";
import User from "../models/user.js";


// -----------Users------------

//CREATE
export const createUser = async (req, res, next) => {
    try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        //Por si quiero pasar todo de una
        //const newAdmin = new admin(req.body)

        //Si quiero hacer variable los parámetros 
        const newUser = new User({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: hash,
            status: req.body.status,
            isAdmin: req.body.isAdmin,
            role: req.body.role,
        });

        await newUser.save()
        res.status(200).send("User has been created.")
    } catch (err) {
        next(err)
    }
};


//LOGIN
export const loginUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) return next(createError(404, "User not found."))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(createError(400, "Wrong password or username"))

        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT)

        const { password, role, ...otherDetails } = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({ ...otherDetails });
    } catch (err) {
        next(err)
    }
}