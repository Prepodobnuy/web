function switch_theme() {
    let css_link = document.querySelector(".color-theme")
    if (css_link.className.includes("dark")) {
        css_link.classList.remove("dark")
        css_link.classList.add("light")
        css_link.href = "../../css/light-color.css"
    } else {
        css_link.classList.remove("light")
        css_link.classList.add("dark")
        css_link.href = "../../css/dark-color.css"
    }
}

function login_attemp() {
    let login_form = document.querySelector(".fullscreen-placeholder")
    if (login_form.className.includes("hidden")){
        login_form.classList.remove("hidden")
    } else {
        login_form.classList.add("hidden")
    }
}