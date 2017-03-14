var express = require ("express");
var app = express();
var mongoose = require ("mongoose");
var bodyParser = require ("body-parser");
var morgan = require ("morgan");
var port = process.env.PORT || 8000;
var path = require("path");
var expressJwt = require("express-jwt");

app.use(express.static(path.join(__dirname, "public")));




app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/recipe", require("./routes/recipe-routes"));
app.use("/user", require("./routes/user-routes"));
app.use("/auth", require("./routes/auth-routes"));



mongoose.connect("mongodb://localhost/food", function (err){
    if (err) throw err;

    console.log("Connected to MongoDB");
});


app.listen(port, function () {
   console.log("Spinning up server " + port)
});