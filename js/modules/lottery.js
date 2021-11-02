export default function lottery(id, buttonClass) {
    let $arrayList = document.getElementById(id);
    let $button = document.getElementById(buttonClass);

    const countries = ["Holand", "Venezuela", "Argentina", "Usa", "Afganistan", "Pakistan", "Uruguay", "Portugal", "spain"];

    
    countries.forEach((el) => {
        let li = document.createElement("li");
        li.innerText = el;
        $arrayList.appendChild(li);
      });
      
    document.addEventListener("click", e => {
        if (e.target === $button) {
            const randomCountry = countries[Math.floor(Math.random() * countries.length)];
            console.log(randomCountry);
            alert(randomCountry);
        } 
    });
}
