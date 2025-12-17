window.addEventListener("load", () => {
  const circles = document.querySelectorAll(
    ".bg-circle-large, .bg-circle-small"
  );
  circles.forEach((circle, index) => {
    circle.style.opacity = "0";
    circle.style.transition = "all 1s ease-out";
    circle.style.transitionDelay = `${index * 0.2}s`;

    setTimeout(() => {
      circle.style.opacity = "0.9";
      circle.style.transform = "translateY(0)";
    }, 100);
  });
});
