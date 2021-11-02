
export function clock() {

    const d = new Date();

    //get hours
    let h = d.getHours();
    //get minutes
    let m = d.getMinutes(); 
    //get seconds
    let s = d.getSeconds();

    let AmOrPm = "AM"

    //this prevent show 00 as time
    if (h === 0) {
        h = 12
    }

    //this will show a 12 to  1 time format
    if  (h > 12) {
        h = h - 12;
        AmOrPm = "PM" 
    }

    //this keep two digit per hour/minutes/second
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    //order the time
    let time = h +":" + m + ":" + s + " " + AmOrPm;

    document.getElementById("MyClockDisplay").textContent = time;
    
 
}

export function active(btn, disabled, btnDisable) {
    let interval = setInterval(clock, 100)
    const $showClock = document.querySelector(btn)
    const $clock = document.getElementById("MyClockDisplay")
    const $hideClock = document.querySelector(btnDisable)
    document.addEventListener("click", e => {
        
        if(e.target.matches(btn)) {
            $clock.classList.remove(disabled);
            $showClock.disabled = true;
            $hideClock.disabled = false;
            setInterval(clock, 1000);
        }

        if(e.target.matches(btnDisable)) { 
            clearInterval(interval);
            $clock.classList.add(disabled);
            $showClock.disabled = false;
            $hideClock.disabled = true;
        }
    });
}
