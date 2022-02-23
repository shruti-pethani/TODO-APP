const express = require("express")
const mongoose = require("mongoose");
const app = express()

const sessionController = require("./controller/session-controller")
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const categoryController = require("./controller/category_controller")
const scheduleTypeController = require("./controller/schedule_type_controller")
const schedularMasterController = require("./controller/schedule_master_controller")
const dailyscheduleController = require("./controller/daily_schedule_controller")
const reminderController = require("./controller/reminder-controller")



//middle ware
app.use(express.json()) // accept json data from request 
app.use(express.urlencoded({ extended: true })) // accept url encoded data from request and set data into body


//database
mongoose.connect('mongodb://localhost:27017/todoapp', function(err) {
    if (err) {
        console.log("db not connected")
        console.log(err)
    } else {
        console.log("db connected.....")
    }
})

//urls
app.get("/", function(req, res) {
    res.write("home page")
    res.end()
})
app.get("/login", sessionController.login)
app.get("/signup", sessionController.signup)
app.post("/saveuser", sessionController.saveuser)

//roles
app.post("/roles", roleController.addRole)
app.get("/roles", roleController.getAllRoles)
app.delete("/roles/:roleId", roleController.deleteRole)
app.put("/roles", roleController.updateRole)


//users
app.post("/users", userController.addUser)
app.get("/users", userController.getAllUsers)
app.delete("/users/:userId", userController.deleteUser)
app.put("/users", userController.updateUser)
app.post("/login", userController.login)


//category
app.post("/categorys", categoryController.addCatagory)
app.get("/categorys", categoryController.getAllCategory)
app.delete("/categorys/:categorId", categoryController.deletecategory)
app.put("/categorys", categoryController.updateCategory)

//schedule type

app.post("/schedule_types", scheduleTypeController.addschedule_type)
app.get("/schedule_types", scheduleTypeController.getAllschedule_type)
app.delete("/schedule_types/:schedule_typeId", scheduleTypeController.deleteschedule_type)
app.put("/schedule_types", scheduleTypeController.updateschedule_type)

//schedule master

app.post("/scheduleMasters", schedularMasterController.addScheduleMaster)
app.get("/scheduleMasters", schedularMasterController.getAllScheduleMaster)
app.delete("/scheduleMasters/:scheduleMasterId", schedularMasterController.deleteScheduleMaster)
app.put("/scheduleMasters", schedularMasterController.updateScheduleMaster)

//daily schedule
app.post("/dailySchedules", dailyscheduleController.addDailySchedule)
app.get("/dailySchedules", dailyscheduleController.getAlldailySchedule)
app.delete("/dailySchedules/:scheduleMasterId", dailyscheduleController.deleteDailySchedule)
app.put("/dailySchedules", dailyscheduleController.updateDailySchedule)

//reminders
app.post("/Reminders", reminderController.addReminder)
app.get("/Reminders", reminderController.getAllReminder)
app.delete("/Reminders/:remId", reminderController.deleteReminders)
app.put("/Reminders", reminderController.updateReminders)



//server
app.listen(3000, function() {
    console.log("server started on 3000")
})