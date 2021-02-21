const path = require("path");
const express = require("express");
const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));

app.get('/test', (req, res) => {
    res.status(200);
    res.json({ working: true });
    res.end();
})

// start express server on port 5000
var server = app.listen(5000, () => {
    console.log("server started on port 5000");
});

module.exports = server