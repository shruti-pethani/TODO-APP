const mongoose = require("mongoose")

let CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    }
})

let CategoryModel = mongoose.model("catagory", CategorySchema)
module.exports = CategoryModel