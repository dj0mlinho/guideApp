"use strict";

angular.module("guideApp")
    .controller("userStartCtrl", function ($scope, db, validator) {
        

        $scope.userData = {
            fullName: "",
            password: "",
            image: ""
        }
    })
    .directive("testForm", ["$document", "db", function($document, db) {
        return {

            link : (scope, element) => {

                element.on("submit", (event) => {
                    event.preventDefault();
                    let user = new FormData();
                    user.fullName = event.originalTarget["0"].value;
                    user.password = event.originalTarget["1"].value;
                    user.image = event.originalTarget["2"].value;
                    db.logReg("userRegistration", user).then((res) => {
                        console.log(res.data);
                    })
                })
            }
        };
    }]);