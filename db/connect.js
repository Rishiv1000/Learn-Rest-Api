const mongoose = require("mongoose");

const connectDB = (url) =>{
    console.log("connected to Db")
mongoose.connect(url)

}

module.exports = connectDB;