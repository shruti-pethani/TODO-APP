const mongoose = require("mongoose")


//schema
let ReminderSchema = new mongoose.Schema({
    forkId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "dailySchedule"
    },
    reminderDate: {
        type: Date,
        required: true
    },
    description: {
        type: String
    }

})

//model
let ReminderModel = mongoose.model("reminder", ReminderSchema)
module.exports = ReminderModel