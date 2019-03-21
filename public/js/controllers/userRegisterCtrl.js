"use strict";

angular.module("guideApp")
  .controller("userRegisterCtrl", function ($scope, db, validator) {

    //**  get destinations from database

    // CHANGE BACKGROUNDS
    let images = ['bg (1)', 'bg (2)', 'bg (3)', 'bg (4)', 'bg (5)', 'bg (6)', 'bg (7)', 'bg (8)', 'bg (9)', 'bg (10)', 'bg (11)', 'bg (12)', 'bg (13)', 'bg (14)', 'bg (15)', 'bg (16)', 'bg (17)', 'bg (18)', 'bg (19)', 'bg (20)', 'bg (21)', 'bg (22)', 'bg (23)', 'bg (24)', 'bg (25)', 'bg (26)']
    document.querySelector('body').style.backgroundImage = "url('css/img/" + images[getRandomInt()] + ".jpg')"

    function getRandomInt() {
      return Math.floor(Math.random() * images.length);
    }

    function nextBackground() {
      document.querySelector('body').style.backgroundImage = "url('css/img/" + images[getRandomInt()] + ".jpg')";
    }

    setInterval(nextBackground, 10000);

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
  .directive("registerForm", ["$document", "$rootScope", "db", "validator", function ($document, $rootScope, db, validator) {
    return {

      link: ($scope, element) => {

        element.on("submit", (event) => {
          event.preventDefault();
          let err = validator.logRegCheck($scope.userData);
          if (err.length) {
                // display error to user
                for (let i = 0; i < err.length; i++) {
                  let prop;
                  for (prop in err[i]) {
                    $(prop)
                    .val("")
                    .attr({
                      placeholder: err[i][prop]
                    })
                    //***  not working
                    .addClass("placeholderColor")
                    .effect("shake");
                    //***  select destinations
                    //***  zapamti me cookie
                  }
                }
          } else {
            db.logReg("userRegistration", $scope.userData)
            .then((res) => {

                if (typeof res.data === "string") {
                  // error display
                  $(".log-reg-error")
                  .html(res.data)
                  .css("display", "inline")
                  .effect("shake");
                } else {
                  // remember logged user credidentials
                  $rootScope.loggedUser = res.data;
                  location.assign("#/jobs");
                }
            });
          }
        });
      }
    };
  }])
  // directive for fb/google/twitter btns