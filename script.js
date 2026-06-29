// Mobile Menu
const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Contact Button
const submitBtn = document.querySelector("#submit-btn");

if (submitBtn) {
    submitBtn.addEventListener("click", () => {
        alert("Thank you for contacting me!");
    });
}