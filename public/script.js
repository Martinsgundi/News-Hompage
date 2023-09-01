const openMenu = document.getElementById("open-menu-icon");
const mobileMenu = document.getElementById("menu-container");
const closeMenu = document.getElementById("close-menu-icon");
const overlay = document.getElementById("overlay");

openMenu.addEventListener("click", () => {
    mobileMenu.classList.add("open-nav-menu");
    overlay.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("open-nav-menu");
    overlay.classList.add("hidden");
});