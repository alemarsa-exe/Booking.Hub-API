import mongoose, { Mongoose, SchemaType } from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const reservationSchema = new mongoose.Schema({

    //Conexión con resourceID que no sé cómo establecer
    //No estoy seguro si es array de string o de number
    resID:{
        type: Number,
        //required: true
    },

    subject: {
        type: String,
        required: true,
    },

    startDate: {
        type: String,
        required: true
    },

    endDate: {
        type: String,
        required: true
    },

    userId: {
        type: ObjectId ,
        required: true
    },


    nowStatus: {
        type: String,
        required: true
    }
});
const Reservation = mongoose.model("reservation", reservationSchema)
//export default mongoose.model("laboratory", labSchema)

export default Reservation