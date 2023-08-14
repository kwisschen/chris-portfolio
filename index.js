$(document).ready(function() {
  var navbar = $(".navbar-collapse");
  var toggleButton = $(".navbar-toggler");

  toggleButton.on("click", function() {
    toggleButton.toggleClass("menu-open");
  });

  $(document).on("click", function(event) {
    if (!navbar.is(event.target) && !toggleButton.is(event.target) && navbar.hasClass("show")) {
      toggleButton.trigger("click");
      toggleButton.blur();
    } 
  });

  $(window).on("scroll", function() {
    if (navbar.hasClass("show")) {
      toggleButton.trigger("click");
      toggleButton.blur();
    }
  });

  navbar.on("hidden.bs.collapse", function() {
    toggleButton.removeClass("menu-open");
  });
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
  const targetElement1 = $("#projects-heading");
  const targetElement2 = $("#all-projects");
  const triggerPosition = targetElement1.offset().top - $(window).height() + 250;

  $(window).scroll(function() {
    if (!animationTriggered && $(this).scrollTop() >= triggerPosition) {
      setTimeout(function() {
        targetElement1.css({
        transform: 'translateX(0)',
        opacity: 1,
      });
      targetElement2.css({
        transform: 'translateX(0)',
        opacity: 1,
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
  const triggerPosition = targetElement.offset().top - $(window).height() + 600;
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
// Vanilla JavaScript version of navbar
// document.addEventListener("DOMContentLoaded", function() {
//     const navbar = document.querySelector(".navbar-collapse");
//     const toggleButton = document.querySelector(".navbar-toggler");
  
//     document.body.addEventListener("click", function(event) {
//       if (!navbar.contains(event.target) && navbar.classList.contains("show") && !toggleButton.contains(event.target)) {
//         toggleButton.click();
//       }
//     });
//   });