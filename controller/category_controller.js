const CatagoryModel = require("../model/category_model")

module.exports.addCatagory = function(req, res) {
    let category = new CatagoryModel({
        categoryName: req.body.categoryName
    })
    category.save(function(err, success) {
        if (err) {
            console.log("err")
            res.json({
                msg: "something went wrong!!!",
                status: -1,
                data: req.body
            })
        } else {
            res.json({
                msg: "category added",
                status: 200,
                data: success
            })
        }

    })
}

module.exports.getAllCategory = function(req, res) {
    CatagoryModel.find(function(err, success) {
        if (err) {
            console.log("err")
            res.json({
                msg: "something went wrong!!!",
                status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "data retrive successfully",
                status: 200,
                data: success
            })
        }

    })
}

module.exports.deletecategory = function(req, res) {
    let categoryId = req.params.categoryId
    CategoryModel.deleteOne({ "_id": categoryId }, function(err, data) {
        if (err) {
            console.log("err")
            res.json({
                msg: "something went wrong!!!",
                status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "removed.....",
                status: 200,
                data: data
            })
        }

    })
}
module.exports.updateCategory = function(req, res) {
    let categoryId = req.body.categoryId
    let categoryName = req.body.categoryName

    CategoryModel.updateOne({ _id: categoryId }, { categoryName: categoryName }, function(err, data) {
        if (err) {
            console.log("err")
            res.json({
                msg: "something went wrong!!!",
                status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "updated....",
                status: 200,
                data: data
            })
        }

    })
}