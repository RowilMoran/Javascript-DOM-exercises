export default function filterImg(card, searchId) {
    let $images = document.querySelectorAll(card);
    let $userType = document.getElementById(searchId)

    document.addEventListener("keyup", (e) => {
        if (e.target === $userType) {
            $images.forEach(el => (el.textContent.toLowerCase().includes(e.target.value)) 
            ? el.classList.remove("hide")
            : el.classList.add("hide") 
            )
        }
    })
}