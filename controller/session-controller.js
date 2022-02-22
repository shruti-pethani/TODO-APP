const fs = require("fs")


function login(req, res) {
    let loginhtml = fs.readFileSync("./views/login.html")
    res.write(loginhtml)
    res.end()
}

function signup(req, res) {
    let signupHtml = fs.readFileSync("./views/signup.html")
    res.write(signupHtml)
    res.end()
}

function saveuser(req, res) {
    console.log(req.body)
    res.json({
            msg: "done......",
            data: req.body
        })
        // res.end()
}
//export

module.exports.signup = signup
module.exports.login = login
module.exports.saveuser = saveuser