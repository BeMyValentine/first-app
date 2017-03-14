var express = require ("express");
var app = express();
var mongoose = require ("mongoose");
var User = require("../models/userModel");
var userRoute = express.Router();



userRoute.post("/", function (req, res) {
    var user = new User(req.body);

    user.save(function (err, user){
        if (err) return res.status(500).send;
        console.log(user);
        res.send(user);
    });

    userRoute.route("/")
        .get(function (req, res) {
            User.find(function (err, user) {
                if (err) res.status(500).send(err);
                res.send(user);
            });
        })


});

module.exports = userRoute;