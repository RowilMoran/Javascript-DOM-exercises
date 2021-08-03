export default function darkAndLight(btn, darkClass) {
    const $button = document.querySelector(btn)
    const $icon = $button.querySelector('.fa-moon')
    
  let $dataDark = document.querySelectorAll("[data-dark]")
  console.log($dataDark)


   document.addEventListener("click", (e) => {
       if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
           if ($icon.classList.contains("fa-moon")) {
               $icon.classList.replace("fa-moon", "fa-sun")
               $dataDark.forEach(element => 
                   element.classList.add(darkClass)
               );
           } else{
            $icon.classList.replace("fa-sun", "fa-moon");
            $dataDark.forEach(element => {
                element.classList.remove(darkClass)
            });
           }

       }
   }) 
  
} 