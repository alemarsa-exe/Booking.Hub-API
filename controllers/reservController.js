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
export const updateReservation = async (req, res, next) => {
    try {
        const updatedReservation = await Reservation.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedReservation)
    } catch (err) {
        next(err)
    }
}


//DELETE
export const deleteReservation = async (req, res, next) => {
    try {
        await Reservation.findByIdAndDelete(
            req.params.id,
        );
        res.status(200).json("Reservation has been deleted.")
    } catch (err) {
        next(err)
    }
}


//GET
export const getReservation = async (req, res, next) => {
    try {
        const reservation = await Reservation.findById(
            req.params.id
        );
        res.status(200).json(reservation)
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