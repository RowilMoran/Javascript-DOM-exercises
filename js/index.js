import menuHambur from "./modules/hamburger.js";
import darkAndLight from "./modules/light_night.js"; 
import scrollButton from "./modules/scroll-button.js";

document.addEventListener("DOMContentLoaded", (e) => {
    menuHambur(".btn", ".panel", ".menu a" );
    scrollButton("scroll-button", "button-hide");
})

darkAndLight(".button-x", "dark-mode"); 
