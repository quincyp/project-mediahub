const express = require("express");

const router = express.Router();

// base route /movies

// Rest Routes
/* 
  * Index - GET - /movies  - Presentational - respond with all movies
  * New - GET - /movies/new  - Presentational Form - a page with a form to create a new movie
  * Show - GET - /movies/:id  - Presentational - respond with specific movie by id
  * Create - Post - /movies  - Functional - recieve data from new route to create a movie
  * Edit - GET - /movies/:id/edit  - Presentational Form - respond with a form prefilled with movie data
  * Update - PUT - /movies/:id  - Functional - recieve data from edit to update a specific movie
  * Delete - DELETE - /movies/:id  - Functional - Deletes movie by id from request
*/

// Index
router.get("/", function(req, res) {
    res.send("Index");
});

// New
router.get("/new", function(req, res) {
    res.send("New");
});

// Show
router.get("/:id", function(req, res) {
    res.send({ id: req.params.id });
});

// Create
router.post("/", function(req, res) {
    res.send({ body: req.body, message: "Create" });
});

// Edit
router.get("/:id/edit", function(req, res) {
    res.send("Edit form");
});

// Update
router.put("/:id", function(req, res) {
    res.send( {id: req.params.id, body: req.body });
});

// Delete
router.delete("/:id", function(req, res) {
    res.send( {id: req.params.id, message: "Delete" });
});


module.exports = router;