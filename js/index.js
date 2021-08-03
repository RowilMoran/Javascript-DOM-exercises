import menuHambur from "./hamburger.js";
import darkAndLight from "./light_night.js"; 
import scrollButton from "./scroll-button.js";

document.addEventListener("DOMContentLoaded", (e) => {
    menuHambur(".btn", ".panel", ".menu a" );
    scrollButton("scroll-button", "button-hide");
   darkAndLight(".button-x", "dark-mode"); 
})

