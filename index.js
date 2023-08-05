$(document).ready(function() {
    $(document).on('click', function(event) {
      var navbar = $('.navbar-collapse');
      var toggleButton = $('.navbar-toggler');
  
      // Check if the clicked element is not within the navbar and the navbar is open
      if (!navbar.is(event.target) && navbar.hasClass('show') && !toggleButton.is(event.target)) {
        toggleButton.trigger('click'); // Close the navbar
      }
    });
  });
// vanilla JavaScript version
// document.addEventListener('DOMContentLoaded', function() {
//     const navbar = document.querySelector('.navbar-collapse');
//     const toggleButton = document.querySelector('.navbar-toggler');
  
//     document.body.addEventListener('click', function(event) {
//       if (!navbar.contains(event.target) && navbar.classList.contains('show') && !toggleButton.contains(event.target)) {
//         toggleButton.click();
//       }
//     });
//   });