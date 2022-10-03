import Resource from "../models/resource.js";

//CREATE
export const createResource = async (req, res, next) => {
    const newResource = new Resource(req.body)

    try {
        const savedResource = await newResource.save()
        res.status(200).json(savedResource)
    } catch (err) {
        next(err)
    }
}