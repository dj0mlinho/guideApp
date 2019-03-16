"use strict";

angular.module("guideApp")
  .controller("userRegisterCtrl", function ($scope, db, validator) {

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
  .directive("registerForm", ["$document", "db", "validator", function ($document, db, validator) {
    return {

      link: ($scope, element) => {

        element.on("submit", (event) => {
          event.preventDefault();
          // let err = validator.registrationCheck($scope.userData);
          // if (err) {

          // } else {
          //   // db.logReg("userRegistration", $scope.userData).then((res) => {
          //   //     console.log(res.data);
          //   // })
          // }
          //design for errors
          $(document).ready(function () {
            $("#regBtn").click(function () {
              event.preventDefault();
              console.log("radi");
              $("#nameInput")
                .attr("placeholder", "* Obavezno popuniti")
                .addClass("placeholderColor");
              $("#lastNameInput")
                .attr("placeholder", "* Obavezno popuniti")
                .addClass("placeholderColor");
              $("#passInput")
                .attr("placeholder", "* Obavezno popuniti")
                .addClass("placeholderColor");
              $("#mailInput")
                .attr("placeholder", "* Obavezno popuniti")
                .addClass("placeholderColor");
              $("#telInput")
                .attr("placeholder", "* Obavezno popuniti")
                .addClass("placeholderColor");
              $("#licenceInput")
                .attr("placeholder", "* Obavezno popuniti")
                .addClass("placeholderColor");

              $("#nameInput").effect("shake");
              $("#lastNameInput").effect("shake");
              $("#passInput").effect("shake");
              $("#mailInput").effect("shake");
              $("#telInput").effect("shake");
              $("#licenceInput").effect("shake");
            });
          });
        })
      }
    };
  }])