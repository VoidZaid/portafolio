let icon = document.getElementById("icon__mode");
let arr = ["light_mode","dark_mode"];
let now;

function store(val){
    localStorage.setItem("darkmode", val)
}
function load(){
    let darkModeVar = localStorage.getItem("darkmode");
    // console.log(darkModeVar);
    
    if(!darkModeVar){
        now = 0;
        store(now);
    }else{
        now = parseInt(darkModeVar);
        console.log(now);
    }
}
function changeIcon(e){
    now >= 1? now=0:now++;
    e.srcElement.innerText = arr[now];
    store(now);
    console.log(now);
    console.log("hola mundo de nuevo");
}
function startChangeIcon(){
    let icon = document.getElementById("icon__mode");
    console.log(now)
    icon.innerText = arr[now];
}

load();//damos estado incial a variable now
startChangeIcon();//indicamos que cargue nuestro estilo definido por la variable
icon.addEventListener("click",changeIcon);
