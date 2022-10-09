import Software from "../models/software.js";
import Resource from "../models/resource.js"
import labModel from "../models/laboratory.js";


//CREATE
export const createSoftware = async (req, res, next) => {
    //const newLab = new labModel(req.body)
    let seqId
    let savedSoftware = new Software(req.body)

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
                savedSoftware = new Software({
                    resID: seqId,
                    name: req.body.name,
                    description: req.body.description,
                    version: req.body.version,
                    expireDate: req.body.expireDate,
                    images: req.body.images
                })
                savedSoftware.save()
            }
        )


        res.status(200).json(savedSoftware)
    } catch (err) {
        next(err)
    }
}


//UPDATE
export const updateSoftware = async (req, res, next) => {
    try {
        const updatedSoftware = await Software.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedSoftware)
    } catch (err) {
        next(err)
    }
}


//DELETE
export const deleteSoftware = async (req, res, next) => {
    try {
        await Software.findByIdAndDelete(
            req.params.id,
        );
        res.status(200).json("Software has been deleted.")
    } catch (err) {
        next(err)
    }
}


//GET
export const getSoftware = async (req, res, next) => {
    try {
        const software = await Software.findById(
            req.params.id
        );
        res.status(200).json(software)
    } catch (err) {
        next(err)
    }
}


//GET ALL
export const getAllSoftware = async (req, res, next) => {
    try {
        const softwares = await Software.find();
        res.status(200).json(softwares)
    } catch (err) {
        next(err)
    }
}


export const countByName = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(type=>{
            return labModel.countDocuments({name:type})
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}