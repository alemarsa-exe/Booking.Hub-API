import mongoose from "mongoose";

const labSchema = new mongoose.Schema({

    //Conexión con resourceID que no sé cómo establecer
    //No estoy seguro si es array de string o de number
    resID:{
        type: Number,
        //required: true,
        unique: true
    },

    name: {
        type: String,
        required: true,
        unique: true
    },

    capacity: {
        type: Number,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    availableTime: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    images: {
        type: String,
        required: true
    }//,
    
    //Array de dates
    //unavailableDates: [{ type: Date }],
});
const labModel = mongoose.model("laboratory", labSchema)
//export default mongoose.model("laboratory", labSchema)

export default labModel