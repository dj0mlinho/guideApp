"use strict";

angular.module("guideApp")
    .factory("db", ($http) => {

        return {
            // admin/user login
            logReg: (action, credidentials) => {

                return $http({
                    url: "/" + action,
                    method: "post",
                    data: credidentials
                });
            }
        };
    });