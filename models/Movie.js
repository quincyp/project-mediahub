const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        name: { type: String, required: [true, "Name is needed"]},
        details: { type: String}, 
        year: { type: Number},
        comment: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}],
        image: { type: String },
    },
    {
        timestamps: true
    }
)

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;