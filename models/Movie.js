const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        name: { type: String, required: [true, "Name is needed"]},
        details: { type: String} //REVIEW required: true, "Detail is needed"]
    },
    {
        timestamps: true
    }
)

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;