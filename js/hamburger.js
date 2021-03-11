const menu = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-menu li");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("open");
})