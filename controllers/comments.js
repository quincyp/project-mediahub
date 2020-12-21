const express = require("express");
const router = express.Router();

const db = require("../models");

// base route is /comments


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



// // Index
// router.get("/", function(req,res){
//     // echo for testing
//     res.send("Index");
//   });
  
//   // New
//   router.get("/new", function(req,res){
//     // echo for testing
//     res.send("New");
//   });
  
  // Show
  router.get("/:id", function(req,res){
    // echo for testing
    res.send({id: req.params.id});
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