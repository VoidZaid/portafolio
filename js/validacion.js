const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


const input_name = document.getElementById("inputName");
const formContact = document.getElementById("formContact");
const arr_input_elements = [...document.getElementsByClassName('formcontato__input')];
const arr_instruction = ["*El nombre debe tener entre 10 y 50 digitos - solo letras", "formulario password", "formulario asunto", "formulario mensaje"];
console.log(arr_input_elements);

function isntEmpty(element){
    if(element.value != ""){
        // console.log(element.value + ":no es vacio");
        return true;
    }
    return false;
}
function valLength(minLen,maxLen,element){
    if(element.value.length >= minLen && element.value.length <= maxLen){
        // console.log(element.value.length + " :es valido");
        return true;
    }
    return false;
}
// funcion trabaja con matIcons, cambiando el nombre cambiamos el icono, asi tambien se puede agregar una clase aparte para dar estilos
function addIcon(iconName,addClass = ""){
    let icon = document.createElement('span');
    icon.className = "material-icons-outlined "+ addClass;
    // formcontato__input-icon
    icon.appendChild(document.createTextNode(iconName));
    return icon;
    // broElement.insertAdjacentElement(afterOrBefore, icon);
}

function messageInput(typeTag, text, addClass = ""){
    let elemento =document.createElement(typeTag);
    elemento.appendChild(document.createTextNode(text));
    elemento.className += addClass;
    return elemento;
}


function valInputName(elements, instructions, value){
    let icons = ["highlight_off", "check_circle_outline"];
    let colorBorder = "#C94E4D";

    let elemento = messageInput("p",instructions,"formcontato__input-message");
    // console.log(icon.className);
    let iconErr = addIcon(icons[0],"formcontato__input__icon-err");
    let iconScs = addIcon(icons[1],"formcontato__input__icon-scs");

    // console.log(elemento.className);
    if(elements.parentElement.children[0].className != elemento.className){
        if(elements.parentElement.children[0].className != iconScs.className){
            elements.insertAdjacentElement('beforebegin', elemento);
            elements.insertAdjacentElement('beforebegin', iconErr);
            elements.style.border = "1px solid "+colorBorder;
        }
    }
    elements.value += String.fromCharCode(value);

    let empty = isntEmpty(elements);
    let valLen = valLength(10,50,elements);
    if(empty && valLen){
        if(elements.parentElement.children[0].className != iconScs.className){
            elements.parentElement.removeChild(elements.previousElementSibling);
            elements.parentElement.removeChild(elements.previousElementSibling);
            elements.insertAdjacentElement("beforebegin",iconScs);
            elements.style.border = "";
        }
    }
}
// <span class="material-icons-outlined">
// highlight_off
// </span>
// <span class="material-icons-outlined">
// check_circle_outline
// </span>

function general(e){
    e.preventDefault();
    // console.log(parseInt(e.srcElement.dataset.num));
    let dataSet = parseInt(e.srcElement.dataset.num);
    if(dataSet == 0){
        valInputName(arr_input_elements[dataSet], arr_instruction[dataSet],e.keyCode);
    }
}

// input_name.addEventListener("focus",general);
arr_input_elements[0].addEventListener("keydown", general);
arr_input_elements[1].addEventListener("keydown", general);
arr_input_elements[2].addEventListener("keydown", general);
arr_input_elements[3].addEventListener("keydown", general);