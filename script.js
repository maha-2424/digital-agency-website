// Select the button inside hero section
const heroButton = document.querySelector(".hero button");

// Add click event
heroButton.addEventListener("click", function() {
    // Scroll smoothly to contact section
    document.querySelector(".contact").scrollIntoView({
        behavior: "smooth"
    });
});