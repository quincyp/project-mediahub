const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const db = require("../models");

// Register Get
router.get("/register", function (req, res) {
    res.render("auth/register");
});

// Register Post
router.post("register", async function (req, res) {
    try {
        const foundUser = await db.User.findOne({
            email: req.body.email
        });
        if (foundUser) return res.redirect("/login");

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt)
        req.body.password = hash;
        const newUser = await db.User.create(req.body);

        return res.redirect("/login");

    } catch (err) {
        return res.send(err);
    }
});

// Login Get

router.get("/login", function (req, res) {
    res.render("auth/login", {
        message: ""
    });
});

// Verify Post

router.post("/login", async function (req, res) {
    try {
        const foundUser = await db.User.findOne({
            email: req.body.email
        });
        if (!foundUser) return res.render("auth/login", {
            message: "Account Not Found, Please Register"
        });
        const match = await bcrypt.compare(req.body.password, foundUser.password);
        if (!match) return res.render("auth/login", {
            message: "Invalid password or email"
        });
        //create our user on the session
        req.session.currentUser = {
            id: foundUser._id,
            username: foundUser.username
        }
        res.redirect("/");
    } catch (err) {
        return res.send(err);
    }
});