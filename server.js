/* ==== External Modules  ==== */
const express = require("express");

/* ==== Internal Modules  ==== */

/* ==== Instanced Modules  ==== */
const app = express();

/* ==== Configuration  ==== */
const PORT = 3501;

app.set("view engine", "ejs");

/* ==== Middleware ==== */
app.use(express.static(__dirname + '/public'));


/* ==== Routes/Controllers  ==== */
//Home Routes
app.get("/", function(req, res) {
    res.render("home");
});


/* ==== Server Listener  ==== */
app.listen(PORT, function() {
    console.log(`MovieHub is live at http://localhost:${PORT}/`);
});