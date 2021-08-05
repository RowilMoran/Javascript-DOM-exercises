export default function darkAndLight(btn, darkClass) {
    const $button = document.querySelector(btn)
    const $icon = $button.querySelector('.fa-moon')
    const $dataDark = document.querySelectorAll("[data-dark]")
    
    const lightMode = () => {
        $icon.classList.replace("fa-sun", "fa-moon");
        $dataDark.forEach(element => element.classList.remove(darkClass));
        localStorage.setItem("theme", "light")
       
    }

    const darkMode = () => {
        $icon.classList.replace("fa-moon", "fa-sun")
        $dataDark.forEach(element => element.classList.add(darkClass)); 
        localStorage.setItem("theme", "dark")
    }



   document.addEventListener("click", (e) => {
       if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
            if ($icon.classList.contains("fa-moon")) {
               darkMode()
            } else {
               lightMode()
            }
        } 
    });

    document.addEventListener("DOMContentLoaded", (e) => {
        if (localStorage.getItem("theme") === null) localStorage.setItem("theme", "light")
        if (localStorage.getItem("theme") === "light") lightMode();
        if (localStorage.getItem("theme") === "dark") darkMode();

    })
}