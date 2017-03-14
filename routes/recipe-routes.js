var express = require ("express");
var app = express();
var mongoose = require ("mongoose");
var Recipe = require("../models/recipe");
var recipeRoute = express.Router();
var request = require("request");



recipeRoute.get("/random", function (req, res) {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var randomPage = getRandomInt(1, 4500);
    var randomIndex = getRandomInt(0,29);

    request("http://food2fork.com/api/search?key=2220691e4a665b36da3c53b227b3dc40&page=" + randomPage, function (error, response, body){
        if (error) throw error;
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            console.log(data.recipes[randomIndex]);
            res.send(data.recipes[randomIndex])

    }});

});

recipeRoute.route("/")
    .get(function (req, res) {
        Recipe.find(function (err, recipe) {
            if (err) res.status(500).send(err);
            res.send(recipe);
        });
    })
    .post(function(req, res) {
        var recipe = new Recipe(req.body);
        recipe.save(function (err, newRecipe) {
            if (err) res.status(500).send(err);
            res.status(201).send(newRecipe);
        })
    });

recipeRoute.route("/:recipeId")
    .get(function (req, res) {
        Recipe.findById(req.params.recipeId, function (err, todo) {
            if (err) res. status (500).send(err);
            if (!todo) res.status(404).send("No recipe found.");
            else res.send(todo);
        });
    })
    .put(function (req, res) {
        Recipe.findByIdAndUpdate(req.params.recipeId, req.body, {new: true}, function (err, recipe) {
            if (err) res.status(500).send(err);
            res.send(recipe);
        })
    });



module.exports = recipeRoute;