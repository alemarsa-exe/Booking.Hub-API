import mongoose from "mongoose";

const softwareSchema = new mongoose.Schema({

    //Conexión con resourceID que no sé cómo establecer
    //No estoy seguro si es array de string o de number
    resID: {
        type: Number
    },

    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true
    },

    version:{
        type: String,
        required: true
    },

    expireDate:{
        type:Number,
        required: true,
        default: 0,
    },

    images: {
        type: String,
        required: false
    }//,
    
    //unavailableDates: [{ type: Date }],
});

//export default mongoose.model("Device", deviceSchema)

const Software = mongoose.model("Software", softwareSchema)

export default Software