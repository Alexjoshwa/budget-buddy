document.addEventListener("DOMContentLoaded", (event) => {
  // Select the Register and Sign in buttons
  const registerBtn = document.querySelector(".register-btn");
  const signinBtn = document.querySelector(".signin-btn");

  // Add click event listeners
  registerBtn.addEventListener("click", () => {
    // Placeholder action for registration
    console.log("Register button clicked!");
    alert("Navigating to Registration Page...");
  });

  signinBtn.addEventListener("click", () => {
    // Placeholder action for sign in
    console.log("Sign in button clicked!");
    alert("Navigating to Sign In Page...");
  });
});
document.addEventListener("DOMContentLoaded", (event) => {
  // ... (Existing JS code for Nav Bar and Hero Section buttons) ...

  // Example for a social icon click (minimal JS)
  const socialLinks = document.querySelectorAll(".social-icon-link");
  socialLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // e.preventDefault(); // Uncomment if you want to stop the link from actually navigating
      console.log(
        `Navigating to social media: ${link.querySelector("img").alt}`
      );
      // In a real application, the 'href' attribute handles the navigation.
    });
  });
});
