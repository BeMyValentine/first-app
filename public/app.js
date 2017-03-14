angular.module("firstApp", ["ngRoute", "firstApp.auth"])
    .config(function ($routeProvider) {

        $routeProvider
            .when("/home", {
                templateUrl: "content/home/home.html",
                controller: "mainController"
            })
            .otherwise({
                redirectTo: "/home"
            })



    });