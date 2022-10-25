
let file = ["./css/root.css", "./css/root-dark.css"];
const style = document.querySelector('[href="./css/root.css"]')
console.log(style.href);

function loadCss(file, now) {
    // link = document.createElement('link');
    // link.href = file[disable];
    // link.type = "text/css";
    // link.rel = "stylesheet";
    // document.head.appendChild(link);

    style.href = file[now];
    // console.log(style)
}
icon.addEventListener("click", ()=>{
    loadCss(file,now);
})