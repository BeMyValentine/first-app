angular.module("firstApp.auth", [])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/signup", {
                templateUrl: "auth/signup/signup.html",
                controller: "signupController"
            })
            .when("/login", {
                templateUrl: "auth/login/login.html",
                controller: "loginController"
            })
            .when("/logout", {
                templateUrl: "auth/logout/logout.html",
                controller: "logoutController"
            })
    }]);

angular.module("firstApp.auth")
    .service("tokenService", [function () {

    var userToken = "token";

    this.setToken = function (token) {
        localStorage[userToken] = token;
    };

    this.getToken = function () {
        return localStorage[userToken];
    };

    this.removeToken = function () {
        localStorage.removeItem(userToken);
    };

}]);

angular.module("firstApp.auth")
    .service("userService", ["$http", "$location", "tokenService", function ($http, $location, tokenService) {

        this.signup = function(user) {
            return $http.post("/auth/login", user).then(function (response) {
                tokenService.setToken(response.data.token);
                return response;
            });
        };

        this.logout = function () {
            tokenService.removeToken();
            $location.path("/");
        };

        this.isAuthenticated = function () {
            return !!tokenService.getToken();
        };
    }]);
