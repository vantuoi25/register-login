const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/demo_crud");
        console.log("Connect db success");
    } catch(error){
        console.log("Connect db fail");
        console.log(error.message);
    }
}

module.exports = connectDB;