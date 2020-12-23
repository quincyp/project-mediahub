/* ==== External Modules  ==== */
const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

/* ==== Internal Modules  ==== */
const controllers = require("./controllers");
// const { Cookie } = require("express-session");

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

// session config
app.use( 
    session({ 
        store: new MongoStore ({url: "mongodb://localhost:27017/movie",}),
        secret: "mediahub passcode",
        resave: false,
        saveUninitialized:false,
        Cookie: { maxAge: 1000 * 60 * 60 * 24 * 7, },
        }));

// Logger
app.use(function(req, res, next){
req.session.test = "test property"
console.log(req.session);
next();
});

// user authentication middleware
app.use(function(req,res,next){
    app.locals.user =  req.session.currentUser;
    next();
  })
const authRequired = require("./middleware/authRequired");

/* ==== Routes/Controllers  ==== */
//Home Routes
app.get("/", function (req, res) {
    res.render("home");
});

// Auth controller
app.use("/", controllers.auth);

// Movie controller
app.use("/movies", authRequired, controllers.movies);

// Comment controller
app.use("/comments", authRequired, controllers.comments);




/* ==== Server Listener  ==== */
app.listen(PORT, function () {
    console.log(`MovieHub is live at http://localhost:${PORT}/`);
});