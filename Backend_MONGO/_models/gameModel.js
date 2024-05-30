const mongoose = require("mongoose");
const GameSchema = new mongoose.Schema({
    userid : {
        type : mongoose.Schema.Types.ObjectId,
        required : [true, "userid Required"],
    },
    name : {
        type : String,
        required : [true, "name Required"],
    },
    description : {
        type : String,
        required : [true, "description Required"],
    },
    resources : {
        type : String,
        required : [true, "resources Required"],
    },
    review : {
        type : String,
        required : [true, "review Required"],
    },
    rating : {
        type : Number,
        required : [true, "rating Required"],
    },
}, {collection: 'games'});

const Game = mongoose.model("game", GameSchema);
module.exports = Game;