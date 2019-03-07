"use strict";

angular.module("guideApp")
    .controller("userStartCtrl", function ($scope, db, validator) {
        
        // DOM
        let usernameInput = document.querySelector("input[type='text']");
        let passwordInput = document.querySelector("input[type='password']");
        let imageInput = document.querySelector("input[type='file']");
        // user login / registration objects
        let userRegistrationData = new FormData();      

        $scope.userLogReg = (action) => {
            // validation
            userRegistrationData.username = usernameInput.value;
            userRegistrationData.password = passwordInput.value;
            userRegistrationData.image = imageInput.files[0];
            // userRegistrationData.append("username", usernameInput.value);
            // userRegistrationData.append("password", passwordInput.value);
            // userRegistrationData.append("image", imageInput.files[0]);
            db.logReg(action, userRegistrationData).then((res) => {
                console.log(typeof res.data)
                console.log(res.data)
                if (typeof res.data === "string") {
                    // css
                    console.log("error handle")
                } else {
                    // COOKIES
                    // animation
                    // location.assign()
                    console.log(res.data);
                }
            });
        }
    });