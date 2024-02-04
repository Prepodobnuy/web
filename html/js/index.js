function previewMouseEnter() {
    const wrapper = document.querySelector(".wrapper")
    const maindata = document.querySelector(".data .main")
    const adddata = document.querySelector(".data .additional")
    
    maindata.classList.add("hidden")
    adddata.classList.remove("hidden")
    wrapper.classList.add("fullscreen")
}

function previewMouseLeave() {
    const wrapper = document.querySelector(".wrapper")
    const maindata = document.querySelector(".data .main")
    const adddata = document.querySelector(".data .additional")

    maindata.classList.remove("hidden")
    adddata.classList.add("hidden")
    wrapper.classList.remove("fullscreen")
}

function previewMouseDown() {
    const main = document.querySelector("main")
    console.log('0')

    main.classList.add("active")
}

function previewMouseUp() {
    const main = document.querySelector("main")
    console.log('1')

    main.classList.remove("active")
}

function changeColorTheme() {
    const css = document.querySelector(".color")

    if (css.href.includes("dark")) {
        css.href = "css/light-main-page-v2.css"
    } else {
        css.href = "css/dark-main-page-v2.css"
    }
}