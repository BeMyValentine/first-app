angular.module("firstApp")
    .controller("mainController", ["$scope", "mainService", function ($scope, mainService) {


        $scope.welcome = "What's for dinner??";



            $scope.randomRecipe = function () {

                mainService.showRecipe().then(function (response) {
                    $scope.dinner = response.data.title;
                    $scope.recipe = response.data.source_url;
                    $scope.image = response.data.image_url;
                });
            }


    }]);