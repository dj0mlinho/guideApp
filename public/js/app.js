"use strict";

angular.module("guideApp", [
    "ngRoute"
]).config(($locationProvider, $routeProvider) => {

    $locationProvider.hashPrefix("");
    $routeProvider.
    when("/", {
        templateUrl: "pages/userStart.html",
        controller: "userStartCtrl"
    })
    .when("/admin", {
        templateUrl: "pages/adminStart.html",
        controller: "adminStartCtrl"
    });
});