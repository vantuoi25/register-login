const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    content: {
        type: String
    },
    start: {
        type: Number
    },
    createAt: {
        type: String
    },
    updateAt: {
        type: String
    },
    account: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "account"
    },
    product: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "product"
    }
}, {
    versionKey: false,
});

module.exports = mongoose.model("comment", commentSchema);