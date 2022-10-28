
let file = ["./css/root.css", "./css/root-dark.css"];
const style = document.querySelector('[href="./css/root.css"]');

function loadCss(file, now) {
    // link = document.createElement('link');
    // link.href = file[disable];
    // link.type = "text/css";
    // link.rel = "stylesheet";
    // document.head.appendChild(link);

    style.href = file[now];
}
icon.addEventListener("click", ()=>{
    loadCss(file,now);
})