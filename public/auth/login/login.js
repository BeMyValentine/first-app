angular.module("firstApp.auth")
    .controller("loginController", ["$scope", "$location", "userService", function($scope, $location, userService) {

        $scope.login = function (user) {
            userService.login(user).then(function(response) {
                $location.path("/todo");
            }, function (response) {
                alert(response.data.message);

            });
        }

    }]);
