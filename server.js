/* ==== External Modules  ==== */
const express = require("express");
const methodOverride = require("method-override");

/* ==== Internal Modules  ==== */

/* ==== Instanced Modules  ==== */
const app = express();

/* ==== Configuration  ==== */
const PORT = 3501;

app.set("view engine", "ejs");

/* ==== Middleware ==== */
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ //middleware handling body data
    extended: true
}));
app.use(methodOverride("_method"));

/* ==== Routes/Controllers  ==== */
//Home Routes
app.get("/", function(req, res) {
    res.render("home");
});


/* ==== Server Listener  ==== */
app.listen(PORT, function() {
    console.log(`MovieHub is live at http://localhost:${PORT}/`);
});