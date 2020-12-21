const express = require("express");

const router = express.Router();

//internal modules
const db = require("../models");

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
router.get("/", async function (req, res) {

    try {
        const allMovies = await db.Movie.find({});

        const context = {
            movies: allMovies
        }
        return res.render("movies/index", context);

    } catch (err) {
        return res.send(err);
    }
});

// New
router.get("/new", function (req, res) {
    res.render("movies/new");
});

// Show
router.get("/:id", async function (req, res) {
    try {
        const foundMovie = await db.Movie.findById(req.params.id).populate("comment");
        console.log(foundMovie);
        const context = {
            movie: foundMovie
        };
        return res.render("movies/show", context);
    } catch (err) {
        return res.send(err);
    }
});

// Create
router.post("/", async function (req, res) {
    try {
        await db.Movie.create(req.body);
        return res.redirect("/movies");
    } catch (err) {
        return res.send(err);
    }
});

// Edit 
router.get("/:id/edit", function (req, res) {
    db.Movie.findById(req.params.id, function (err, foundMovie) {
        if (err) return res.send(err);

        const context = {
            movie: foundMovie
        };
        return res.render("movies/edit", context);
    });
});

// Update
router.put("/:id", function (req, res) {
    db.Movie.findByIdAndUpdate(
        req.params.id, {
            ...req.body
        }, {
            new: true
        },
        function (err, updatedMovie) {
            if (err) return res.send(err);
            return res.redirect(`/movies/${updatedMovie._id}`);
        }
    );
});

// Delete
router.delete("/:id", async function (req, res) {

    try {
        const deletedMovie = await db.Movie.findByIdAndDelete(req.params.id);
        await db.Comment.remove({comment:deletedMovie._id});
        return res.redirect("/movies");
    } catch (err) {
        return res.send(err);
    }

});


module.exports = router;