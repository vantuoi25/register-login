const express = require("express");
const router = express.Router();

const {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/product.controller')

router 
    .route("/")
    .get(getProducts)
    .post(createProduct);

router
    .route("/:id")
    .patch(updateProduct)
    .get(getProduct)
    .delete(deleteProduct)
module.exports = router;