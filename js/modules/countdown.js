export default function countdown(selector, date, message) {

    const $selector = document.querySelector(selector);
    const limitDate = new Date(date).getTime()
    let interval = setInterval(() => {
        let timeInMs =   limitDate - new Date().getTime() ;
        
        let days = Math.floor(timeInMs / (1000 * 60 * 60 * 24 ));
        let hours =  Math.floor((timeInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeInMs % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((timeInMs  % (1000 * 60)) / (1000))
        
        $selector.innerHTML = `days ${days} hours ${hours} min ${minutes} sec ${seconds}`;

        if (timeInMs < 0) {
            clearInterval(interval);
            $selector.innerHTML = `<h3>${message}</h3>`
        }
    }, 1000);
}

