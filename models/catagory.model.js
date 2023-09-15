const mongoose = require("mongoose");
const catagorySchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    img: {
        type: String
    }
}, {
    versionKey: false,
});

module.exports = mongoose.model("catagory", catagorySchema);