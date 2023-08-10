$(document).ready(function() {
    var navbar = $(".navbar-collapse");
    var toggleButton = $(".navbar-toggler");
    $(document).on("click", function(event) {
      // Check if the clicked element is not within the navbar and the navbar is open
      if (!navbar.is(event.target) && navbar.hasClass("show") && !toggleButton.is(event.target)) {
        toggleButton.trigger("click"); // Close the navbar
      }
    });
    $(window).on("scroll", function() {
        if (navbar.hasClass("show")) {
            toggleButton.trigger("click");
            toggleButton.blur();
        }
    });
  });
// Vanilla JavaScript version
// document.addEventListener("DOMContentLoaded", function() {
//     const navbar = document.querySelector(".navbar-collapse");
//     const toggleButton = document.querySelector(".navbar-toggler");
  
//     document.body.addEventListener("click", function(event) {
//       if (!navbar.contains(event.target) && navbar.classList.contains("show") && !toggleButton.contains(event.target)) {
//         toggleButton.click();
//       }
//     });
//   });

$(document).ready(function() {
  const navbar = $(".navbar");

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      navbar.addClass("scrolled");
    } else {
      navbar.removeClass("scrolled");
    }
  });
});

$(document).ready(function() {
  $("#intro").css({
    transform: 'translateX(0)',
    opacity: 1
  });
});

$(document).ready(function() {
  $("#contact-heading").css({
    transform: 'translateY(0)',
    opacity: 1
  });
  $("#background-pic").hide().fadeIn("slow");
});


$(document).ready(function() {
  let animationTriggered = false;
  const targetElement = $("#hero-text .explore-me");
  const triggerPosition = targetElement.offset().top - $(window).height();

  $(window).scroll(function() {
    if (!animationTriggered && $(this).scrollTop() >= triggerPosition) {
      setTimeout(function() {
        targetElement.css({
        transform: 'translateX(0)',
        opacity: 1
      });
      }, 500)
      animationTriggered = true;
    }
  });
});

$(document).ready(function() {
  let animationTriggered = false;
  const targetElement = $("#projects-heading");
  const triggerPosition = targetElement.offset().top - $(window).height() + 200;


  $(window).scroll(function() {
    if (!animationTriggered && $(this).scrollTop() >= triggerPosition) {
      setTimeout(function() {
        targetElement.css({
        transform: 'translateY(0)',
        opacity: 1
      });
      }, 500)
      animationTriggered = true;
    }
  });
});

$(document).ready(function() {
  let animationTriggered = false;
  const targetElement = $("#skillset");
  const animateElement = $(".skill-bar div");
  const triggerPosition = targetElement.offset().top - $(window).height() + 500;

  $(window).scroll(function() {
    if (!animationTriggered && $(this).scrollTop() >= triggerPosition) {
      animateElement.addClass("skill-percentage");
      animationTriggered = true;
    }
  });
});

$(document).ready(function() {
  let animationTriggered = false;
  const targetElement = $("#footer-head");

  $(window).scroll(function() {
    const triggerPosition = targetElement.offset().top - $(window).height() + 100;
    if ($(this).scrollTop() >= triggerPosition && !animationTriggered) {
      setTimeout(function() {
        targetElement.css({
          transform: 'translateY(0)',
          opacity: 1
        });
      }, 500)
      animationTriggered = true;
    }
  });
});