$(document).ready(function () {
  // Filter functionality
  $(".filter-btn").on("click", function () {
      const filter = $(this).data("filter");

      if (filter === "all") {
          $(".gallery-item").fadeIn();
      } else {
          $(".gallery-item").fadeOut(200, function () {
              $(`.${filter}`).fadeIn();
          });
      }
  });

  // Smooth fade-in effect for images on page load
  $(".gallery-item").hide().fadeIn(1000);
});