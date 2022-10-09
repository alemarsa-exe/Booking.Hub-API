import labModel from "../models/laboratory.js";
import Resource from "../models/resource.js"


//CREATE
export const createLab = async (req, res, next) => {
    //const newLab = new labModel(req.body)
    let seqId
    let savedLab = new labModel(req.body)
    

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
                savedLab = new labModel({
                    resID: seqId,
                    name: req.body.name,
                    capacity: req.body.capacity,
                    location: req.body.location,
                    availableTime: req.body.availableTime,
                    description: req.body.description,
                    type: req.body.type,
                    images: req.body.images
                })
                savedLab.save()
            }
        )

        
        res.status(200).json(savedLab)
    } catch (err) {
        next(err)
    }
}


//UPDATE
export const updateLab = async (req, res, next) => {
    try {
        const updatedLab = await labModel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedLab)
    } catch (err) {
       next(err)
    }
}


//DELETE
export const deleteLab = async (req, res, next) => {
    try {
        await labModel.findByIdAndDelete(
            req.params.id,
        );
        res.status(200).json("Laboratory has been deleted.")
    } catch (err) {
        next(err)
    }
}


//GET
export const getLab = async (req, res, next) => {
    try {
        const lab = await labModel.findById(
            req.params.id
        );
        res.status(200).json(lab)
    } catch (err) {
        next(err)
    }
}


//GET ALL
export const getAllLab = async (req, res, next) => {
    try {
        const labs = await labModel.find();
        res.status(200).json(labs)
    } catch (err) {
        next(err)
    }
}

//COUNT BY CITY ---NO SE USA, ES EJEMPLO
export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(type=>{
            return labModel.countDocuments({type:type})
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}

//Count by type
export const countByType = async (req, res, next) => {
    try {
        const salaCount = await labModel.countDocuments({type:"Sala"})
        const sala2Count = await labModel.countDocuments({type:"Sala2"})
        const labCount = await labModel.countDocuments({type:"Laboratorio"})
        const pitchCount = await labModel.countDocuments({type:"PitchRoom"})
        const iotCount = await labModel.countDocuments({type:"IOT"})
        
        res.status(200).json([
            {type:"Sala", count: salaCount},
            {type:"Sala2", count: sala2Count},
            {type:"Laboratorio", count: labCount},
            {type:"Pitch Room", count: pitchCount},
            {type:"IOT", count: iotCount},
        ])
    } catch (err) {
        next(err)
    }
}