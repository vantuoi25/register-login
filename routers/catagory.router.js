const express = require("express");
const router = express.Router();

const {
    createCatagory,
    getCatagories,
    getCatagory,
    updateCatagory,
    deleteCatagory
} = require('../controllers/catagory.controller')

router 
    .route("/")
    .get(getCatagories)
    .post(createCatagory);

router
    .route("/:id")
    .patch(updateCatagory)
    .get(getCatagory)
    .delete(deleteCatagory)
module.exports = router;