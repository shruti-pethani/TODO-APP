const mongoose = require("mongoose")


//schema
let ReminderSchema = new mongoose.Schema({
    roleName: {
        type: String
    }
})

//model
let ReminderModel = mongoose.model("role", ReminderSchema)
module.exports = ReminderModel