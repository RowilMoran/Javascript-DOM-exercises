import menuHambur from "./hamburger.js";
import scrollButton from "./scroll-button.js";
document.addEventListener("DOMContentLoaded", (e) => {
    menuHambur(".btn", ".panel", ".menu a" );
    scrollButton("scroll-button", "button-hide")
})