const mongoose = require("mongoose")

let scheduleMasterSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"

    },
    scheduleId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "schedule_type"
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "catagory"

    },
    startDate: {
        type: String
    },
    endDate: {
        type: Date
    }
})

const SchedulerMasterModel = mongoose.model("schedularMaster", scheduleMasterSchema)
module.exports = SchedulerMasterModel