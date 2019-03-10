"use strict";

angular.module("guideApp")
    .factory("db", ($http) => {

        return {
            // admin/user login/registration attempt
            logReg: (action, credidentials) => {
                // object for data with no empty keys
                console.log(credidentials)
                return $http({
                    url: "/" + action,
                    method: "post",
                    data: {
                        "fullName": credidentials.fullName,
                        "password": credidentials.password,
                        "image": credidentials.image
                    }
                });
            }
        };
    });