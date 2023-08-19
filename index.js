$(document).ready(function() {
  var navbar = $(".navbar");
  var navbarCollapsed = $(".navbar-collapse");
  var toggleButton = $(".navbar-toggler");
  var toggleIcon = $(".navbar-toggler-icon");

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      navbar.addClass("scrolled");
    } else {
      navbar.removeClass("scrolled");
    }
  });

  toggleButton.on("click", function() {
    toggleIcon.toggleClass("menu-open");
  });

  $(document).on("click", function(event) {
    if (!navbarCollapsed.is(event.target) && !toggleButton.is(event.target) && navbarCollapsed.hasClass("show")) {
      toggleButton.trigger("click");
      toggleButton.blur();
    } 
  });

  $(window).on("scroll", function() {
    if (navbarCollapsed.hasClass("show")) {
      toggleButton.trigger("click");
      toggleButton.blur();
    }
  });

  navbarCollapsed.on("hidden.bs.collapse", function() {
    toggleIcon.removeClass("menu-open");
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
        opacity: 1,
      });
      }, 300)
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
      }, 300)
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
          opacity: 1,
        });
      }, 500);
      animationTriggered = true;
    }
  });
});

$(document).ready(function() {
  $("#intro").css({
    transform: 'translateX(0)',
    opacity: 1,
  });
});

$(document).ready(function() {
  $("#contact-heading").css({
    transform: 'translateY(0)',
    opacity: 1,
  });
  $("#background-pic").css({
    opacity: 0,
  });
  setTimeout(function() {
    $("#background-pic").css({
      opacity: 1,
    });
    $("#background-pic").hide().fadeIn("slow");
  }, 500);
});