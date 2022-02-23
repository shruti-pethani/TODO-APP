const SchedulerMasterModel = require("../model/schedule_master_model");

module.exports.addScheduleMaster = function(req, res) {
    let userId = req.body.userId;
    let scheduleId = req.body.scheduleId;
    let categoryId = req.body.categoryId;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;

    let scheduleMaster = new SchedulerMasterModel({
        userId: userId,
        scheduleId: scheduleId,
        categoryId: categoryId,
        startDate: startDate,
        endDate: endDate,
    });

    scheduleMaster.save(function(err, success) {
        if (err) {
            console.log(err);

            res.json({ msg: "something went wrong!!!", status: -1, data: req.body });
        } else {
            res.json({ msg: "Date added", status: 200, data: success });
        }
    });
};

module.exports.getAllScheduleMaster = function(req, res) {
    SchedulerMasterModel.find().populate().exec(function(err, success) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err });
        } else {
            res.json({ msg: "Schedules...", status: 200, data: success });
        }
    });
};

module.exports.deleteScheduleMaster = function(req, res) {
    let scheduleMasterId = req.params.scheduleMasterId;

    SchedulerMasterModel.deleteOne({ _id: scheduleMasterId },
        function(err, data) {
            if (err) {
                res.json({ msg: "Something went wrong!!!", status: -1, data: err });
            } else {
                res.json({ msg: "removed...", status: 200, data: data });
            }
        }
    );
};

module.exports.updateScheduleMaster = function(req, res) {
    let scheduleMasterId = req.body.scheduleMasterId;
    let userId = req.body.userId;
    let scheduleId = req.body.scheduleId;
    let categoryId = req.body.categoryId;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;

    SchedulerMasterModel.updateOne({ _id: scheduleMasterId }, { userId: userId }, { categoryId: categoryId },

        function(err, data) {
            if (err) {
                res.json({ msg: "Something went wrong!!!", status: -1, data: err });
            } else {
                res.json({ msg: "updated...", status: 200, data: data });
            }
        }
    );
};