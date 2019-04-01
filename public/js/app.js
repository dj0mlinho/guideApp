"use strict";

angular.module("guideApp", [
        "ngRoute"
    ]).config(($locationProvider, $routeProvider) => {

        $locationProvider.hashPrefix("");
        $routeProvider.
        when("/", {
                templateUrl: "pages/login.html",
                controller: "userStartCtrl",
            })
            .when("/register", {
                templateUrl: "pages/register.html",
                controller: "userRegisterCtrl"
            })
            .when("/admin", {
                templateUrl: "pages/adminStart.html",
                controller: "adminStartCtrl"
            })
            .when("/jobs", {
                templateUrl: "pages/jobs.html",
                controller: "jobsPageCtrl"
            })
            .when("/user", {
                templateUrl: "pages/user.html",
                controller: "userPageCtrl"
            })
            .when("/ads", {
                templateUrl: "pages/ads.html",
                controller: "adsPageCtrl"
            })
            .when("/admin", {
                templateUrl: "pages/admin.html",
                controller: "adminPageCtrl"
            })
    })
    .run(function ($rootScope) {

        $rootScope.loggedUser = {};
        $rootScope.pageTitle;

        $rootScope.$on("$locationChangeStart", function (event, current, next) {

            let route = next.split("#")[1];

            switch (route) {

                case "/":
                    $rootScope.pageTitle = "Login";
                    break;
                case "/register":
                    $rootScope.pageTitle = "Registracija";
                    break;
                case "/jobs":
                    $rootScope.pageTitle = "Ture/Ponuda";
                    break;
                default:
                    break;
            }
        });
    });