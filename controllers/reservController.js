import Reservation from "../models/reservation.js";

//CREATE ORIGINAL

/*
export const createDevice = async (req, res, next) => {
    const newDevice = new Device(req.body)

    try {
        const savedDevice = await newDevice.save()
        res.status(200).json(savedDevice)
    } catch (err) {
        next(err)
    }
}
*/
//CREATE
export const createReservation = async (req, res, next) => {
    const newReservation = new Reservation(req.body)

    try {
        const savedReservation = await newReservation.save()
        res.status(200).json(savedReservation)
    } catch (err) {
        next(err)
    }
}

//UPDATE
export const updateDevice = async (req, res, next) => {
    try {
        const updatedDevice = await Device.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedDevice)
    } catch (err) {
        next(err)
    }
}


//DELETE
export const deleteDevice = async (req, res, next) => {
    try {
        await Device.findByIdAndDelete(
            req.params.id,
        );
        res.status(200).json("Device has been deleted.")
    } catch (err) {
        next(err)
    }
}


//GET
export const getDevice = async (req, res, next) => {
    try {
        const device = await Device.findById(
            req.params.id
        );
        res.status(200).json(device)
    } catch (err) {
        next(err)
    }
}


//GET ALL
export const getAllReservation = async (req, res, next) => {
    try {
        const Reservations = await Reservation.find();
        res.status(200).json(Reservations)
    } catch (err) {
        next(err)
    }
}