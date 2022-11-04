
let file = ["./css/root.css", "./css/root-dark.css"];
const style = document.querySelector('[href="./css/root-dark.css"]');
const styleCss = document.getElementById("style");
console.log(styleCss);

// function loadCss(file, now) {
//     // link = document.createElement('link');
//     // link.href = file[disable];
//     // link.type = "text/css";
//     // link.rel = "stylesheet";
//     // document.head.appendChild(link);

//     styleCss.href = file[now];
// }
// icon.addEventListener("click", ()=>{
//     loadCss(file,now);
// })
function startStyle(){
    styleCss.href = file[now];
}
startStyle();
icon.addEventListener("click",startStyle)