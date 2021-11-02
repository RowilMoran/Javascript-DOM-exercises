import { alarm } from "./modules/alarm.js";
import { active } from "./modules/clock.js";
import countdown from "./modules/countdown.js";
import filterImg from "./modules/filter_Img.js";
import formValidation from "./modules/forms.js";
import getGeolocation from "./modules/geolocation.js";
import menuHambur from "./modules/hamburger.js";
import moveBall from "./modules/Key_Event.js";
import darkAndLight from "./modules/light_night.js"; 
import lottery from "./modules/lottery.js";
import responsiveMedia from "./modules/responsive copy.js";
import responsiveTester from "./modules/responsive.js";
import scrollButton from "./modules/scroll-button.js";
import shortCuts from "./modules/shortcuts.js";
import slides from "./modules/slide.js";

let mapLink =  `<a href="https://www.google.com.ar/maps/@-31.766271,-60.5240371,15z" target="_blank" rel="noopener"> Ver video </a>`;
let youtubeLink = `<a href="https://www.youtube.com/watch?v=0v6uJGl7mn4&t=2s" target="_blank" rel="noopener"> Ver mapa</a>`;
let mapIframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13568.618114035928!2d-60.52403710000001!3d-31.766270999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1628198855145!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
let youtubeIframe = `<iframe width="750" height="400" src="https://www.youtube.com/embed/0v6uJGl7mn4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`



document.addEventListener("DOMContentLoaded", (e) => {
    menuHambur(".btn", ".panel", ".menu a" );
    scrollButton("scroll-button", "button-hide");
    active(".show-clock", "disable", ".hide-clock");
    alarm(".active-alarm", ".disable-alarm");
    countdown(".countdown", "Jul 30, 2024 01:00:00", "Fin del countdown!!!!!");
    responsiveTester("tester-form");
    responsiveMedia(
        "youtube",
        "(min-width: 1000px)", 
        youtubeLink,
        youtubeIframe
        );
    responsiveMedia(
        "map", 
        "(min-width: 1000px)",
        mapLink,
        mapIframe
        );
    
    slides();
    formValidation();
    filterImg(".card", "my-input");
    lottery("countries", "button");
    getGeolocation("current-location");
})


/* darkMode */
darkAndLight(".button-x", "dark-mode"); 


/* key events and shortcuts */
document.addEventListener("keydown", e => {
    shortCuts(e);
    moveBall(e, ".circle", ".circle-container");
})