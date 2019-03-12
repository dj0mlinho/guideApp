"use strict";

angular.module("guideApp")
    .factory("db", ($http) => {

        return {
            // admin/user login
            login: (action, credidentials) => {

                return $http({
                    url: "/" + action,
                    method: "post",
                    data: {
                        "email": credidentials.email,
                        "password": credidentials.password
                    }
                });
            },
            // user registration
            registration: (credidentials) => {
                
                return {
                    url: "/userRegistration",
                    method: "post",
                    data: {
                        "firstName": credidentials.firstName,
                        "lastName": credidentials.lastName,
                        "password": credidentials.password,
                        "email": credidentials.email,
                        "telephone": credidentials.telephone,
                        "licenceNum": credidentials.licenceNum,
                        "destinations": credidentials.destinations
                    }
                };
            }
        };
    });