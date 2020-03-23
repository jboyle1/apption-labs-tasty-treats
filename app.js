// Requirements
let express = require("express");
let bodyParser = require("body-parser");

let app = express();

// Body parser
let urlencodedParser = bodyParser.urlencoded({ extended: true });

// View engine
app.set("view engine", "ejs");

// Port
app.listen(3001);

// Static files
app.use("/assets", express.static("assets"));

// Routing
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Form post

app.post("/", urlencodedParser, (req, res) => {
    console.log(req.body);
    res.render("partials/form-success", {data: req.body});

});