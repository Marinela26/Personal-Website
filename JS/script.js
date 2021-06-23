// smooth scrolling  ///////

window.scroll({
  top: 150,
  left: 0,
  behavior: "smooth",
});

// Show and hide Navigation bar //////

window.onload = function () {
  "use strict";

  $(window).scroll(function () {
    "use strict";

    if ($(window).scrollTop() < 80) {
      $(".navbar").css({
        "margin-top": "-100px",
        opacity: "0",
      });
    } else {
      $(".navbar").css({
        "margin-top": "0px",
        opacity: "1",
      });
    }
  });
};
