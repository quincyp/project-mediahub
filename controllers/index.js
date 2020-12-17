module.exports = {
    movies: require("./movies"),
}
//require Mongoose
const mongoose = require ("mongoose");

const dbUrl = "mongodb://localhost:27017/movie"

//connect
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(function(){
    console.log("mongodb connected");
})
.catch(function(err){
    console.log("Mongodb error");
    console.log(err);
          
});

mongoose.connection.on("disconnected", function(){
    console.log("mongodb disconnected");
});

module.exports = {
    Movie: require ("./Movie")
};

