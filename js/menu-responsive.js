let menu_icon = document.getElementById('menu__icon');
let menu_list = document.getElementById('menu__list');
let menu_bg = document.getElementById('menu__bg-responsive');

function showMenu(){
    menu_list.style.right = "0";
    menu_bg.style.display = "block";
}
function hideMenu(){
    menu_list.style.right = "calc(100vw + 450px)"
    menu_bg.style.display = "none";
}

menu_icon.addEventListener("click",showMenu);
menu_bg.addEventListener("click", hideMenu);

