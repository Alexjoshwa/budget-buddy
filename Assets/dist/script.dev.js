"use strict";

window.addEventListener("load", function () {
  var circles = document.querySelectorAll(".bg-circle-large, .bg-circle-small");
  circles.forEach(function (circle, index) {
    circle.style.opacity = "0";
    circle.style.transition = "all 1s ease-out";
    circle.style.transitionDelay = "".concat(index * 0.2, "s");
    setTimeout(function () {
      circle.style.opacity = "0.9";
      circle.style.transform = "translateY(0)";
    }, 100);
  });
});
//# sourceMappingURL=script.dev.js.map
