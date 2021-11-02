  
export default function menuHambur(btn, panel, menuLink) {
    const d = document;
   

    d.addEventListener("click", (e) => {
        if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
            d.querySelector(panel).classList.toggle("is-activeX");
            d.querySelector(btn).classList.toggle("is-active");
          }
          if (e.target.matches(menuLink)) {
              d.querySelector(panel).classList.remove("is-activeX");
              d.querySelector(btn).classList.remove("is-active");
        }
    });
}