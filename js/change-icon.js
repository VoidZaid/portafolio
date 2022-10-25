let icon = document.getElementById("icon__mode");
let arr = ["dark_mode", "light_mode"];
let now = 0

icon.addEventListener("click",changeIcon);
function changeIcon(e){
    console.log(e.srcElement.innerText = arr[now]);
    now >= 1? now=0:now++;
}