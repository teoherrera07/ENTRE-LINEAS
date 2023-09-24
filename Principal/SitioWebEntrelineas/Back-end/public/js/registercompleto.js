window.addEventListener('load', function(){
let formulario = document.getElementById('main_form');
let inputs = document.querySelectorAll('form input')


const expresiones = {
	user: /^[a-zA-Z0-9\_\-]{5,10}$/, // Letras, numeros, guion y guion_bajo
	first_name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
	last_name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{6,12}$/, // 6 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const campos = {
    user: false,
    first_name: false,
    last_name: false,
    password: false,
    email: false
}

const validarFormulario = (e)=>{
    switch(e.target.name){
        case "first_name":
            validarCampo(expresiones.first_name, e.target, e.target.name)   
        break;
        case "last_name":
            validarCampo(expresiones.last_name, e.target, e.target.name)
        break;
        case "user":
            validarCampo(expresiones.user, e.target, e.target.name)
        break;
        case "email":
            validarCampo(expresiones.email, e.target, e.target.name)
        break;
        case "password":
            validarCampo(expresiones.password, e.target, e.target.name)
        break;
    }
};
const validarCampo = (expresion, input, campo)=>{
    if(expresion.test(input.value)){
        document.getElementById(`${campo}`).classList.remove('error');
        document.querySelector(`#span--${campo}`).classList.add('invisible');
        document.querySelector(`#span--${campo}`).classList.remove('visible');
        campos[campo] = true;
    }else{
        document.getElementById(`${campo}`).classList.add('error');
        document.querySelector(`#span--${campo}`).classList.remove('invisible');
        document.querySelector(`#span--${campo}`).classList.add('visible');
        campos[campo] = false;
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
});


formulario.addEventListener('submit', (e)=>{
    
    if (campos.user && campos.first_name && campos.last_name && campos.email && campos.password){
        // formulario.submit();
    }else{
        document.getElementById("span--submit").classList.remove('invisible');
        document.getElementById("span--submit").classList.add('visible');
        e.preventDefault();
    }
});
});