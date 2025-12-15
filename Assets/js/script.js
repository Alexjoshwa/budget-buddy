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
