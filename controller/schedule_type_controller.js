const schedule_typeModel = require("../model/schelude_type_model")

module.exports.addschedule_type = function(req, res) {
    let schedule_type = new schedule_typeModel({
        schedule_typeName: req.body.schedule_typeName
    })
    schedule_type.save(function(err, success) {
        if (err) {
            console.log("err")
            res.json({
                msg: "something went wrong!!!",
                status: -1,
                data: req.body
            })
        } else {
            res.json({
                msg: "schedule_type added",
                status: 200,
                data: success
            })
        }

    })
}

module.exports.getAllschedule_type = function(req, res) {
    schedule_typeModel.find(function(err, success) {
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

module.exports.deleteschedule_type = function(req, res) {
    let schedule_typeId = req.params.schedule_typeId
    schedule_typeModel.deleteOne({ "_id": schedule_typeId }, function(err, data) {
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
module.exports.updateschedule_type = function(req, res) {
    let schedule_typeId = req.body.schedule_typeId
    let schedule_typeName = req.body.schedule_typeName

    schedule_typeModel.updateOne({ _id: schedule_typeId }, { schedule_typeName: schedule_typeName }, function(err, data) {
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