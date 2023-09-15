const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    img: {
        type: String
    },
    price: {
        type: String
    },
    description: {
        type: String
    },
    catagory: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "catagory"
    }
}, {
    versionKey: false,
});

module.exports = mongoose.model("product", productSchema)