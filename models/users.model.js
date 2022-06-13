const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    address: String,
    isAdmin: Boolean,
    }, {timestamp: true});


    module.exports = mongoose.model("users", UserSchema);