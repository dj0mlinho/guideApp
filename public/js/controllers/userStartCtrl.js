"use strict";

angular.module("guideApp")
    .controller("userStartCtrl", function ($scope, db, validator) {
        // get destinatins from database


        // controlling login/register view show/hide
        $scope.userData = {
            "firstName": "",
            "lastName": "",
            "password": "",
            "email": "",
            "telephone": "",
            "licenceNum": "",
            "destinations": []
        };
    })
    .directive("registerForm", ["$document", "db", "validator", function($document, db, validator) {
        return {

            link : ($scope, element) => {

                element.on("submit", (event) => {
                    event.preventDefault();
                    let err = validator.registrationCheck($scope.userData);
                    if (err) {

                    } else {
                        // db.logReg("userRegistration", $scope.userData).then((res) => {
                        //     console.log(res.data);
                        // })
                    }
                })
            }
        };
    }])
    .directive("loginForm", ["$document", "db", "validator", function ($document, db, validator) {
        return {

            link: ($scope, element) => {

                element.on("submit", (event) => {
                    event.preventDefault();
                    let err = validator.loginCheck();
                    if (err) {

                    } else {
                        // db.logReg("userLogin", $scope.userData).then((res) => {
                        //     console.log(res.data);
                        // })
                    }
                })
            }
        };
    }]);