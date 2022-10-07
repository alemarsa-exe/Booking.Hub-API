import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({

    //Conexión con resourceID que no sé cómo establecer
    //No estoy seguro si es array de string o de number
    resID: {
        type: Number
    },

    name: {
        type: String,
        required: true,
        unique: true
    },

    brand: {
        type: String,
        required: true
    },

    model: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    portable: {
        type: Boolean,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    images: {
        type: String,
        required: true
    }//,

    //unavailableDates: [{ type: Date }]
});

//export default mongoose.model("Device", deviceSchema)

const Device = mongoose.model("Device", deviceSchema)

export default Device