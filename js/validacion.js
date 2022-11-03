// *************************ESTO ES UN OBJETO ***************************
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,50}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	asunto: /^[a-zA-ZÀ-ÿ0-9\s]{4,40}$/, 
    descripcion: /^[a-zA-ZÀ-ÿ0-9\_\-\.@\s]{10,300}$/
}
// CON ESTO REPRESENTAREMOS SI UN CAMPO ES VALIDO O NO
const validateSubmit = {
    nombre: false,
	correo: false,
	asunto: false,
    descripcion: false,
}
const input_name = document.getElementById("inputName");
const formContact = document.getElementById("formContact");
const arr_input_elements = [...document.getElementsByClassName('formcontato__input')];
const arr_instruction = ["*Entre 4 y 50 caracteres - solo letras", "*Correo: ejemplo@dominio.com", "Numeros y letras entre 4 y 50 caractéres", "Ingrese el mensaje, puede incluir (- , _ , @ )"];

// funcion trabaja con matIcons, cambiando el nombre cambiamos el icono, asi tambien se puede agregar una clase aparte para dar estilos
function addIcon(iconName,addClass = ""){
    let icon = document.createElement('span');
    icon.className = "material-icons-outlined "+ addClass;
    // formcontato__input-icon
    icon.appendChild(document.createTextNode(iconName));
    return icon;
}

function messageInput(typeTag, text, addClass = ""){
    let elemento =document.createElement(typeTag);
    elemento.appendChild(document.createTextNode(text));
    elemento.className += addClass;
    return elemento;
}

function submitForm(e){
    e.preventDefault();
    console.log(e); 
    let arrResults = [];
    arr_input_elements.forEach((input)=>{
        let textCamps = expresiones[input.name].test(input.value);
        arrResults.push(textCamps)
    });

    let container = document.getElementById("formcontato__message");
    if(arrResults.includes(false)){
        container.classList.remove("formcontato__scs-message");
        container.classList.add("formcontato__err-message");
        let mess = `
        <span class="material-icons-outlined">
        warning
        </span>
        <b>Error:</b> Por favor rellena el formulario correctamente
        `;
        container.innerHTML = mess;
        // console.log(document.getElementsByClassName("formcontato__err-message"));
    }else{
        container.classList.add("formcontato__scs-message");
        container.classList.remove("formcontato__err-message");
        let mess = `
        <span class="material-icons-outlined">
            check_circle_outline
        </span>
        El formulario ha sido enviado correctamente
        `;
        container.innerHTML = mess;
    }

    console.log(arrResults.includes(false));
}

function valInput(e){
    let dataNum =e.srcElement.dataset.num;
    let iconScs = addIcon('check_circle_outline', 'formcontato__input__icon-scs');
    let iconErr = addIcon('highlight_off','formcontato__input__icon-err');
    let message = messageInput("p",arr_instruction[dataNum],"formcontato__input-message");

    if(dataNum == 0){
        valCamp(expresiones.nombre,e,message,iconScs,iconErr);
        // console.log(dad.lastElementChild.className == message.className);
    }else if(dataNum == 1){
        valCamp(expresiones.correo,e,message,iconScs,iconErr);
    }else if(dataNum == 2){
        valCamp(expresiones.asunto,e,message,iconScs,iconErr);
    }else if(dataNum == 3){
        valCamp(expresiones.descripcion,e,message,iconScs,iconErr);
    }

    activeInputMessage(arr_input_elements,expresiones);
}

function valCamp(expresion,e,message,iconScs,iconErr){
    let dad = e.srcElement.parentElement;
    let color = "#C94E4D";
    if (expresion.test(e.target.value)) {
        if(dad.lastElementChild.className == message.className){
            dad.removeChild(dad.lastElementChild);
            dad.removeChild(dad.lastElementChild);
            e.srcElement.classList.remove("border__err");
            dad.append(iconScs);
        }
    }else{
        if(dad.lastElementChild.className != message.className){
            if(dad.lastElementChild.className == iconScs.className){
                dad.removeChild(dad.lastElementChild);
            }
            dad.append(iconErr,message);
            // e.srcElement.style.border = "1.5px solid "+color;
            // tiene que ser en el CSS mayor peso que el del Input:focus
            e.srcElement.classList.add("border__err");
        }
    }
}

function activeInputMessage(arr_input_elements,expresiones){
    let arr = [];
    arr_input_elements.forEach((input)=>{
        let textCamps = expresiones[input.name].test(input.value);
        arr.push(textCamps);
    })
    arr.pop();
    // console.log(arr)
    if(!arr.includes(false)){
        document.getElementById("inputMessage").disabled = false;
    }else{
        document.getElementById("inputMessage").disabled = true;
    }
}



arr_input_elements.forEach((input)=>{
    // si se trabaja con KEYDOWN no funciona como deberia la validacion de carcateres
    input.addEventListener('keyup',valInput);
    input.addEventListener('blur',valInput);
})
// LOS EVENTOS SE DEBEN EJECUTAR TANTO AL INGRESAR DATOS COMO AL GUARDAR LOS DATOS, AL INGRESO DE DATOS DEBEMOS INDICAR CON MESAJE SIS E CUMPLE O NO LO QUE PIDE LA ESPECIFICACION Y AL GUARDAR, SI NO CUMPLE SE CREAR EL MESAJE DE ALERTA
formContact.addEventListener('submit', submitForm);