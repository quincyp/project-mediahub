const express = require("express");
const router = express.Router();

const db = require("../models");
const { populate } = require("../models/Movie");

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

//   // New
//   router.get("/new", function(req,res){
//     // echo for testing
//     res.send("New");
//   });

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
  router.get("/:id", function(req,res){
    db.Comment
    .findById(req.params.id)
    .populate("movie")
    .exec(function (err, foundComment){
        if (err) return res.send(err);
        const context = {comment: foundComment};
         res.render("comments/show", context);
    });
   
  });
  
//   // Create
//   router.post("/", function(req,res){
//     // echo for testing
//     res.send({body: req.body, msg:"Create"});
//   });
  
//   // Edit
//   router.get("/:id/edit", function(req,res){
//     // echo for testing
//     res.send("Edit Form");
//   });
  
//   // Update
//   router.put("/:id", function(req,res){
//     // echo for testing
//     res.send({id: req.params.id, body: req.body});
//   });
  
//   // Delete
//   router.delete("/:id", function(req,res){
//     // echo for testing
//     res.send({id: req.params.id, msg: "Delete"});
//   });







module.exports = router;