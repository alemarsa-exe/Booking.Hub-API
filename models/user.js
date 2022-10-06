import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    surname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    status: {
        type: Boolean,
        default: true,
        required: true
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    role: {
        type: String,
        default: "User"
    }
},
    { timestamps: true }
);

export default mongoose.model("User", userSchema)