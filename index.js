const express = require("express")
const mongoose = require("mongoose");
const app = express()

const sessionController = require("./controller/session-controller")
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")



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


//server
app.listen(3000, function() {
    console.log("server started on 3000")
})