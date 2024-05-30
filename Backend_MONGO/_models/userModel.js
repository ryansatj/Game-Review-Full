const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, "username Required"],
        unique : true,
    },
    name : {
        type : String,
        required : [true, "name Required"],
    },
    email : {
        type : String,
        required : [true, "email Required"],
        unique : true,
    },
    password : {
        type : String,
        required : [true, "password Required"],
    },
}, {collection: 'users'});

const User = mongoose.model("user", UserSchema);
module.exports = User;