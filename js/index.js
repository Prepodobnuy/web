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