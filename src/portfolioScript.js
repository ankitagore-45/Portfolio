

const menuBtn = document.getElementById("mobile-menu");

const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

