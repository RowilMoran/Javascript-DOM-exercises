export default function scrollButton(buttonSpot, hiddenClass) {
    const $body = document.documentElement;
    const $spot = document.getElementById(buttonSpot)
 
    const initial = 500;
    
    window.addEventListener("scroll", e => {
        if ($body.scrollTop > initial)
            $spot.classList.remove(hiddenClass);
        if ($body.scrollTop < initial)
        $spot.classList.add(hiddenClass);  
    });
}

