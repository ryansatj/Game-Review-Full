const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

connectMongo = async function(){
    mongoose.connect(process.env.URL);
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "Connection error:"));
    db.once("open", function(){
        console.log("Connected to MongoDB");
    })
}

module.exports = {
    connectMongo
};