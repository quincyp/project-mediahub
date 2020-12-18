const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017/movie"

mongoose.connect(dbUrl, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:false
})
.then(function(){
    console.log("mongodb connected");
})
.catch(function(err){
    console.log("Mongodb error");
    console.log(err);
});

mongoose.connection.on("disconnected", function(){
    console.log("Mongodb disconencted");
});

module.exports = {
    Movie: require("./Movie"),
    Comment: require("./Comment")
};

