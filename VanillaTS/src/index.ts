import "./style.scss"

window.addEventListener("load", () => {
    const header = document.createElement("h1");
    header.innerText = "Hello, World!"

    const body = document.querySelector("body");
    body.appendChild(header);
})