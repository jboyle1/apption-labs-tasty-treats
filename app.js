// Requirements
let express = require("express");
let bodyParser = require("body-parser");
let fs = require("fs");

let app = express();

// Body parser
let urlencodedParser = bodyParser.urlencoded({ extended: true });

// View engine
app.set("view engine", "ejs");

// Port
app.listen(8080, '0.0.0.0');

// Static files
app.use("/assets", express.static("assets"));

// Routing
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// User data display page
app.get("/user-data", (req, res) => {
    res.sendFile(__dirname + "/form-data.txt");
});

// Form post
app.post("/", urlencodedParser, (req, res) => {
    console.log(req.body);
    res.render("partials/form-success", {data: req.body});

    let fName = req.body.firstName
    let lName = req.body.lastName
    let email = req.body.email
    let message = req.body.message
    let newsLetter = req.body.newsLetter
    
    fs.appendFileSync('./form-data.txt', "First Name: " + fName + "\n");
    fs.appendFileSync('./form-data.txt', "Last Name: " + lName + "\n");
    fs.appendFileSync('./form-data.txt', "Email: " + email + "\n");
    fs.appendFileSync('./form-data.txt', "Message: " + message + "\n");
    fs.appendFileSync('./form-data.txt', "Newsletters: " + newsLetter + "\n" + "\n");
});