export function alarm(active, disabled) {
    document.addEventListener("click", e => {
        const $active = document.querySelector(active);
        const $disabled = document.querySelector(disabled);
        const $audio = document.getElementById("myAudio")

        if (e.target.matches(active)) {
            $audio.play()
            $active.disabled = true;
            $disabled.disabled = false;
        }

        if (e.target.matches(disabled)) {
            $audio.pause()
            $active.disabled = false;
            $disabled.disabled = true;
        }
    })
}