angular.module("firstApp")
    .controller("userController", ["$scope", "userService", function ($scope, userService) {


        $scope.users = [];

        $scope.createUser = function (person) {
            userService.newUser(person).then(function (response) {
                $scope.users.push(response.data)

            })
        }


    }]);