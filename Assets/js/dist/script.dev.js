"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  // Select the Register and Sign in buttons
  var registerBtn = document.querySelector(".register-btn");
  var signinBtn = document.querySelector(".signin-btn"); // Add click event listeners

  registerBtn.addEventListener("click", function () {
    // Placeholder action for registration
    console.log("Register button clicked!");
    alert("Navigating to Registration Page...");
  });
  signinBtn.addEventListener("click", function () {
    // Placeholder action for sign in
    console.log("Sign in button clicked!");
    alert("Navigating to Sign In Page...");
  });
});
document.addEventListener("DOMContentLoaded", function (event) {
  // ... (Existing JS code for Nav Bar and Hero Section buttons) ...
  // Example for a social icon click (minimal JS)
  var socialLinks = document.querySelectorAll(".social-icon-link");
  socialLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      // e.preventDefault(); // Uncomment if you want to stop the link from actually navigating
      console.log("Navigating to social media: ".concat(link.querySelector("img").alt)); // In a real application, the 'href' attribute handles the navigation.
    });
  });
});
//# sourceMappingURL=script.dev.js.map
