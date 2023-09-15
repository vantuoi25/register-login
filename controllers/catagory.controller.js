const catagoryModel = require('../models/catagory.model');

module.exports = {
    createCatagory: async (req, res) =>{
        const body = req.body;
        const newCatagory = await catagoryModel.create(body);
        return res.status(201).json(newCatagory);
    },
    getCatagories: async (req, res) =>{
        const catagories = await catagoryModel.find();
        return res.status(200).json(catagories);
    },
    getCatagory: async (req, res) =>{
        const id = req.params.id;
        const getCatagory = await catagoryModel.find({
            _id: id
        });
        return res.status(200).json(getCatagory);
    },
    updateCatagory: async (req,res) =>{
        const id = req.params.id;
        const body = req.body;
        const updateCatagory = await catagoryModel.findOneAndUpdate({
            _id: id
        });
        return res.status(200). json(updateCatagory);
    },
    deleteCatagory: async (req, res) =>{
        const id = req.params.id;
        const deleteCatagory = await catagoryModel.findByIdAndDelete(id);
        return res.status(200).json(deleteCatagory);
    }
};
