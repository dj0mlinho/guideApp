"use strict";

angular.module("guideApp")
    .factory("db", ($http) => {

        return {
            // admin/user login/registration attempt
            logReg: (action, credidentials) => {
                // object for data with no empty keys
                return $http({
                    url: "/" + action,
                    method: "post",
                    data: {
                        "firstName": credidentials.firstName,
                        "lastName": credidentials.lastName,
                        "password": credidentials.password
                    }
                });
            }
        };
    });