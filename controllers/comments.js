const express = require("express");
const router = express.Router();

const db = require("../models");

// base route /comments

// Create
router.post("/newcomment/:movieid", function (req, res) {
    
    req.body.movie = req.params.movieid;
    
    db.Comment.create(req.body, function (err, createdComment) {
        if (err) return res.send(err);

        db.Movie.findById(req.params.movieid, function (err, foundMovie) {
            if (err) return res.send(err);

            foundMovie.comment.push(createdComment);
            foundMovie.save();

            return res.redirect(`/movies/${foundMovie._id}`);
        });
    });
});



// Show
router.get("/:id", async function (req, res) {

    try {

        const foundComment = await db.Comment.findById(req.params.id).populate("comments");

        const context = {
            comment: foundComment
        };

        return res.render("comments/show", context);

    } catch (err) {
        return res.send(err);
    }
});







module.exports = router;