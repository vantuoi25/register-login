const productModel = require('../models/product.model');

module.exports = {
    createProduct: async (req, res) =>{
        const body = req.body;
        const newProduct = await productModel.create(body);
        return res.status(201).json(newProduct);
    },
    getProducts: async (req, res) =>{
        const products = await productModel.find();
        return res.status(200).json(products);
    },
    getProduct: async (req, res) =>{
        const id = req.params.id;
        const getProduct = await productModel.find({
            _id: id
        });
        return res.status(200).json(getProduct);
    },
    updateProduct: async (req,res) =>{
        const id = req.params.id;
        const body = req.body;
        const updateProduct = await productModel.findOneAndUpdate({
            _id: id
        });
        return res.status(200). json(updateProduct);
    },
    deleteProduct: async (req, res) =>{
        const id = req.params.id;
        const deleteProduct = await productModel.findByIdAndDelete(id);
        return res.status(200).json(deleteProduct);
    }
};