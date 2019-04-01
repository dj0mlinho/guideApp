angular.module("guideApp")
  .controller("userPageCtrl", function ($scope) {

     // Show/Hide
    $('.port-item').click(function () {
      $('.collapse').collapse('hide');
    })

    // Lightbox
    $(document).on('click', '[data-toggle="lightbox"]', function (e) {
      e.preventDefault()
      $(this).ekkoLightbox();
    })

  });