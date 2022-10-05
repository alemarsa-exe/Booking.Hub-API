import Device from "../models/device.js";
import Resource from "../models/resource.js"

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
export const createDevice = async (req, res, next) => {
    //const newLab = new labModel(req.body)
    let seqId
    let newDevice = new Device(req.body)


    try {

        Resource.findOneAndUpdate(
            { id: "autoval" },
            { "$inc": { "seq": 1 } },
            { new: true }, (err, cd) => {
                if (cd == null) {
                    const newResource = new Resource({ id: "autoval", seq: 1 })
                    newResource.save()
                    seqId = 1;
                } else {
                    seqId = cd.seq
                }
                newDevice = new Device({
                    resID: seqId,
                    name: req.body.name,
                    brand: req.body.brand,
                    model: req.body.model,
                    location: req.body.location,
                    portable: req.body.portable,
                    description: req.body.description,
                    images: req.body.images
                })
                newDevice.save()
            }
        )
        //res.status(200).json(updatedDevice)
        

        res.status(200).json(newDevice)
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
export const getAllDevices = async (req, res, next) => {
    try {
        const Devices = await Device.find();
        res.status(200).json(Devices)
    } catch (err) {
        next(err)
    }
}