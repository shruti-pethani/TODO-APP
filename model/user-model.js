const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "role"
    }
})


const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel