document.addEventListener("DOMContentLoaded", (event) => {
  // ... (Existing Nav Bar JS code for Register/Sign In, and Learn More) ...

  const checkOutBtn = document.querySelector(".cta-btn");

  checkOutBtn.addEventListener("click", () => {
    console.log("Check it out button clicked!");
    // Placeholder: typically scrolls down to features or redirects to the registration page
    alert("Starting your journey to better money habits!");
  });
});
