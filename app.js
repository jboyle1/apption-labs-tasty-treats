// Requirements
let express = require("express");
let app = express();

// Port
app.listen(3001);

// Static files
app.use("/assets", express.static("assets"));

// Routing
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});