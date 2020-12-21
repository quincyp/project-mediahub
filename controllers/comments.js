const express = require("express");
const router = express.Router();

const db = require("../models");
const {
    populate
} = require("../models/Movie");

// base route is /comments

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
            movies: foundMovies,
        };
        res.render("comments/new", context);

    });
});

// Show
router.get("/:id", function (req, res) {
    db.Comment
        .findById(req.params.id)
        .populate("movie")
        .exec(function (err, foundComment) {
            if (err) return res.send(err);
            const context = {
                comment: foundComment
            };
            res.render("comments/show", context);
        });

});

// // Create REVIEW ?remove comments/new cooments allready in movie/show.ejs
// router.post("/comments", function (req, res) {

// 	db.Comment.create(req.body, function (err, createdComment) {
// 		if (err) return res.send(err);

//         req.body.movie = req.params.movieid;
// 		// adds a comment to movie
// 		db.Movie.findById(createdComment.movie).exec(function(err, foundMovie){
// 			if (err) return res.send(err);
//         console.log(createdComment);
//         console.log(foundMovie);
// 			foundMovie.comments.push(createdComment);
// 			foundMovie.save(); 

// 			return res.redirect("/comments");
// 		});

		
// 	}); 
// });

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










// Edit
router.get("/:id/edit", function (req, res) {
    db.Comment.findById(req.params.id, function (err, foundComment) {
        if (err) return res.send(err);

        const context = {
            comment: foundComment
        };
        return res.render("comments/edit", context);
    });
});

// Update
router.put("/:id", function(req,res){
    db.Comment.findByIdAndUpdate(
        req.params.id, {
            ...req.body
        }, { new: true },
        function (err, updatedComment) {
            if (err) return res.send(err);
            return res.redirect(`/movies/${updatedComment.movie}`);
        }
    );
});

//   // Delete
//   router.delete("/:id", function(req,res){
//     // echo for testing
//     res.send({id: req.params.id, msg: "Delete"});
//   });







module.exports = router;