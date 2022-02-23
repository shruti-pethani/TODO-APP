const dailyscheduleModel = require("../model/daily_schedule_model");
const ReminderModel = require("../model/reminder-model");

module.exports.addReminder = function(req, res) {
    let forkId = req.body.forkId;
    let reminderDate = req.body.reminderDate;
    let description = req.body.description;

    let reminders = new ReminderModel({

        forkId: forkId,
        reminderDate: reminderDate,
        description: description
    })

    reminders.save(function(err, success) {
        if (err) {
            console.log(err);

            res.json({ msg: "something went wrong!!!", status: -1, data: req.body });
        } else {
            res.json({ msg: "Date added", status: 200, data: success });
        }
    })
}

module.exports.getAllReminder = function(req, res) {
    ReminderModel.find().populate().exec(function(err, success) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err });
        } else {
            res.json({ msg: "Reminders...", status: 200, data: success });
        }
    });
};

module.exports.deleteReminders = function(req, res) {
    let remId = req.params.remId;

    ReminderModel.deleteOne({ _id: remId },
        function(err, data) {
            if (err) {
                res.json({ msg: "Something went wrong!!!", status: -1, data: err });
            } else {
                res.json({ msg: "removed...", status: 200, data: data });
            }
        }
    )
}

module.exports.updateReminders = function(req, res) {
    let remId = req.body.remId
    let forkId = req.body.forkId;
    let reminderDate = req.body.reminderDate;
    let description = req.body.description;
    ReminderModel.updateOne({ _id: remId }, { reminderDate: reminderDate },

        function(err, data) {
            if (err) {
                res.json({ msg: "Something went wrong!!!", status: -1, data: err })
            } else {
                res.json({ msg: "updated...", status: 200, data: data })
            }
        }
    )
}