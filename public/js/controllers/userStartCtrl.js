"use strict";

angular.module("guideApp")
    .controller("userStartCtrl", function ($scope, db, validator) {
        // controlling login/register view show/hide
        $scope.userData = {
            firstName: "",
            lastName: "",
            password: ""
        };
    })
    .directive("registerForm", ["$document", "db", function($document, db) {
        return {

            link : ($scope, element) => {

                element.on("submit", (event) => {
                    event.preventDefault();
                    // validation
                    // let err = validation.isThereerr();
                    // if (err) {
                    //     // display error
                    // } else {
                    //     db.logReg();
                    // }
                    let action = event.explicitOriginalTarget.getAttribute("data-action");
                    db.logReg(action, $scope.userData).then((res) => {
                        console.log(res.data);
                    })
                })
            }
        };
    }]);