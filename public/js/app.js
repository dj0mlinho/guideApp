"use strict";

angular.module("guideApp", [
    "ngRoute"
]).config(($locationProvider, $routeProvider) => {

    $locationProvider.hashPrefix("");
    $routeProvider.
    when("/", {
        templateUrl: "pages/login.html",
        controller: "userStartCtrl"
    })
    .when("/register", {
        templateUrl: "pages/register.html",
        controller: "userStartCtrl"
    })
    .when("/admin", {
        templateUrl: "pages/adminStart.html",
        controller: "adminStartCtrl"
    });
});