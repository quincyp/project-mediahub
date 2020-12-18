const express = require("express");
const router = express.Router();

const db = require("../models");

// Index
router.get("/", function (req, res) {
	db.Comment.find({}, function (error, foundComments) {
		if (error) return res.send(error);

		const context = {
			comments: foundComments,
		};

		res.render("comments/index", context);
	});
});

// New
router.get("/new", function (req, res) {
	db.Movie.find({}, function (err, foundMovies) {
		if (err) return res.send(err);

		const context = {
			authors: foundMovies,
		};
		res.render("comments/new", context);
	});
});

// Show
router.get ("/:id", function(req, res){
    db.Comment
    .findById(req.params.id)
    .populate("comment")
    .exec( function (err, foundComment) {
        if (err) return res.send(err);
        const context = { comment: foundComment};
        res.render("comments/show, context");
    });
});


// Create
router.post("/", function (req, res) {

    db.Comment.create(req.body, function (err, createdComment) {
        if (err) return res.send(err);

        db.Movie.findById(createdComment.movie).exec(function (err, foundComment) {
            if (err) return res.send(err);
            foundComment.movies.push(createdComment);
            foundComment.save();
            return res.redirect("/comments");
        });
    });
});





module.exports = router;