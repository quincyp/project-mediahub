const express = require("express");
const router = express.Router();

const db = require("../models");

// // Index
// router.get("/", function (req, res) {
//     db.Comment.find({}, function (error, foundComments) {
//         if (error) return res.send(error);

//         const context = {
//             comments: foundComments,
//         };

//         res.render("comments/index", context);
//     });
// });

// // New
// router.get("/new", function (req, res) {
//     db.Movie.find({}, function (err, foundMovies) {
//         if (err) return res.send(err);

//         const context = {
//             movies: foundMovies,
//         };
//         res.render("comments/new", context);
//     });
// });

// // Show
// router.get("/:id", function (req, res) {
//     db.Comment
//         .findById(req.params.id)
//         .populate("comment")
//         .exec(function (err, foundComment) {
//             if (err) return res.send(err);
//             const context = {
//                 comment: foundComment
//             };
//             res.render("comments/show, context");
//         });
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
            console.log(createdComment);
            
            return res.redirect(`/movies/${foundMovie._id}`);
        });
    });
});

// // Edit 
// router.get("/:id/edit", function (req, res){
//     db.Comment.findById(req.params.id, function (err, foundComment){
//         if (err) return res.send(err);

//         const context = { comment: foundComment};
//         res.render("comments/edit", context);
//     });
// });






module.exports = router;