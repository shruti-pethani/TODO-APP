const mongoose = require("mongoose")

let Schedule_typeSchema = new mongoose.Schema({
    schedule_typeName: {
        type: String,
        required: true
    }
})

let Schedule_typeModel = mongoose.model("schedule_type", Schedule_typeSchema)
module.exports = Schedule_typeModel