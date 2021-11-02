 export default function responsiveTester(formId) {
    const $form = document.getElementById(formId);
    let openedWindow;
    document.addEventListener("submit", e=> {
        if (e.target === $form) {
            e.preventDefault()
            openedWindow = window.open($form.url.value, "new window", `innerWidth = ${$form.width.value}, innerHeight = ${$form.height.value}`)
        }
    })

    document.addEventListener("click", e => {
        if (e.target === $form.button) openedWindow.close()
    })
}