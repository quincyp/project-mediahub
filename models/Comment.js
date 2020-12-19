const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
    {
        title: { type: String, required: true},
        body: { type:String, required: true},
        movie: { type: mongoose.Schema.Types.ObjectId, ref: "Movie"},
        
    },
    {
        timestamp: true,
    }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;