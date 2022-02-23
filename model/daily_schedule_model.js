const mongoose = require("mongoose")

let dailyScheduleSchema = new mongoose.Schema({


    scheduleMasterId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "scheduleMaster"
    },

    forkDate: {
        type: String
    },
    forkTime: {
        type: Date
    },
    isComplate: {
        type: Boolean
    },
    priorityId: {
        type: Number
    }
})

const dailyscheduleModel = mongoose.model("dailySchedule", dailyScheduleSchema)
module.exports = dailyscheduleModel