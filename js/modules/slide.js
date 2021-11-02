export default function slides() {
    let $next = document.querySelector(".slide-btn .next");
    let $prev = document.querySelector(".slide-btn .prev");
    let $slide = document.querySelectorAll(".slider");

    let i = 0

    document.addEventListener("click", e => {
        if (e.target === $prev) {
            e.preventDefault();
            $slide[i].classList.remove("active");
            i--;

            if (i<0) {
               i = $slide.length - 1;
            }

            $slide[i].classList.add("active");
        }

        if (e.target === $next) {
            e.preventDefault();
            $slide[i].classList.remove("active");
            i++;

            if (i >= $slide.length) {
                i = 0;
            }
            $slide[i].classList.add("active");
        }
    });
}