$(document).ready(function() {
  // Navigation Scroll
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
  // Animation on Scroll

  // ABOUT ANIMATIONS
  $(".js--wp-about1").waypoint(
    function(direction) {
      $(".js--wp-about1").addClass("about-animation");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-about1").waypoint(
    function(direction) {
      $(".js--wp-about2").addClass("about-animation-pic");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-about1").waypoint(
    function(direction) {
      $(".js--wp-about3").addClass("about-animation-pic about-animation-pic--two");
    },
    {
      offset: "50%"
    }
  );

  // SERVICE ANIMATIONS

  $(".js--wp-services").waypoint(
    function(direction) {
      $(".js--wp-service-box1").addClass("services-animation");
    },
    {
      offset: "10%"
    }
  );

  $(".js--wp-services").waypoint(
    function(direction) {
      
      $(".js--wp-service-box2").addClass("services-animation services-animation--two");
    },
    {
      offset: "10%"
    }
  );

  $(".js--wp-services").waypoint(
    function(direction) {
      $(".js--wp-service-box3").addClass("services-animation services-animation--three");
    },
    {
      offset: "10%"
    }
  );

  $(".js--wp-services").waypoint(
    function(direction) {
      
      $(".js--wp-service-box4").addClass("services-animation services-animation--four");
    },
    {
      offset: "10%"
    }
  );

  $(".js--wp-services").waypoint(
    function(direction) {
      $(".js--wp-service-box5").addClass("services-animation services-animation--five");
    },
    {
      offset: "10%"
    }
  );

  $(".js--wp-services").waypoint(
    function(direction) {
      $(".js--wp-service-box6").addClass("services-animation services-animation--six");
    },
    {
      offset: "10%"
    }
  );

  // MID ANIMATIONS
  $(".mid").waypoint(
    function(direction) {
      $(".js--wp-pic1").addClass("mid-animation");
    },
    {
      offset: "40%"
    }
  );

  $(".mid").waypoint(
    function(direction) {
      $(".js--wp-pic2").addClass("mid-animation mid-animation--two");
    },
    {
      offset: "40%"
    }
  );

  $(".mid").waypoint(
    function(direction) {
      $(".js--wp-pic3").addClass("mid-animation");
    },
    {
      offset: "40%"
    }
  );

  $(".mid").waypoint(
    function(direction) {
      $(".js--wp-pic4").addClass(
        "mid-animation mid-animation--two"
      );
    },
    {
      offset: "40%"
    }
  );

  $(".mid").waypoint(
    function(direction) {
      $(".js--wp-pic5").addClass(
        "mid-animation mid-animation--two"
      );
    },
    {
      offset: "40%"
    }
  );

  $(".mid").waypoint(
    function(direction) {
      $(".js--wp-pic6").addClass(
        "mid-animation"
      );
    },
    {
      offset: "40%"
    }
  );

  $(".mid").waypoint(
    function(direction) {
      $(".js--wp-pic7").addClass("mid-animation mid-animation--two");
    },
    {
      offset: "40%"
    }
  );

  $(".mid").waypoint(
    function(direction) {
      $(".js--wp-pic8").addClass(
        "mid-animation"
      );
    },
    {
      offset: "40%"
    }
  );

  // EVENTS ANIMATIONS

  $(".js--wp-updates").waypoint(
    function(direction) {
      $(".js--wp-event1").addClass("event-animation");
    },
    {
      offset: "40%"
    }
  );

  $(".js--wp-updates").waypoint(
    function(direction) {
      $(".js--wp-event2").addClass("event-animation event-animation--two");
    },
    {
      offset: "40%"
    }
  );

  $(".js--wp-updates").waypoint(
    function(direction) {
      $(".js--wp-event3").addClass("event-animation event-animation--three");
    },
    {
      offset: "40%"
    }
  );

  $(".js--wp-updates").waypoint(
    function(direction) {
      $(".js--wp-event4").addClass("event-animation event-animation--four");
    },
    {
      offset: "40%"
    }
  );

  $(".js--wp-updates").waypoint(
    function(direction) {
      $(".js--wp-news1").addClass("news-animation");
    },
    {
      offset: "40%"
    }
  );

  $(".js--wp-updates").waypoint(
    function(direction) {
      $(".js--wp-news2").addClass("news-animation news-animation--two");
    },
    {
      offset: "40%"
    }
  );

  $(".js--wp-updates").waypoint(
    function(direction) {
      $(".js--wp-news3").addClass("news-animation news-animation--three");
    },
    {
      offset: "40%"
    }
  );

  $(".js--wp-updates").waypoint(
    function(direction) {
      $(".js--wp-news4").addClass("news-animation news-animation--four");
    },
    {
      offset: "40%"
    }
  );
});
