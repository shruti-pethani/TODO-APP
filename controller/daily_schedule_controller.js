const dailyScheduleModel = require("../model/daily_schedule_model")


module.exports.addDailySchedule = function(req, res) {
    let scheduleMasterId = req.body.scheduleMasterId;
    let forkDate = req.body.forkDate;
    let forkTime = req.body.forkTime;
    let isComplate = req.body.isComplate;
    let priorityId = req.body.priorityId;

    let dailyschedule = new dailyScheduleModel({
        scheduleMasterId: scheduleMasterId,
        forkDate: forkDate,
        forkTime: forkTime,
        isComplate: isComplate,
        priorityId: priorityId
    })

    dailyschedule.save(function(err, success) {
        if (err) {
            console.log(err);

            res.json({ msg: "something went wrong!!!", status: -1, data: req.body });
        } else {
            res.json({ msg: "Date added", status: 200, data: success });
        }
    })
}

module.exports.getAlldailySchedule = function(req, res) {
    dailyScheduleModel.find().populate().exec(function(err, success) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err });
        } else {
            res.json({ msg: "Schedules...", status: 200, data: success });
        }
    });
};

module.exports.deleteDailySchedule = function(req, res) {
    let scheduleMasterId = req.params.scheduleMasterId;

    dailyScheduleModel.deleteOne({ _id: scheduleMasterId },
        function(err, data) {
            if (err) {
                res.json({ msg: "Something went wrong!!!", status: -1, data: err });
            } else {
                res.json({ msg: "removed...", status: 200, data: data });
            }
        }
    );
};

module.exports.updateDailySchedule = function(req, res) {
    let scheduleMasterId = req.body.scheduleMasterId;
    let forkDate = req.body.forkDate;
    let forkTime = req.body.forkTime;
    let isComplate = req.body.isComplate;
    let priorityId = req.body.priorityId;
    dailyScheduleModel.updateOne({ _id: scheduleMasterId }, { forkDate: forkDate },

        function(err, data) {
            if (err) {
                res.json({ msg: "Something went wrong!!!", status: -1, data: err });
            } else {
                res.json({ msg: "updated...", status: 200, data: data });
            }
        }
    );
};