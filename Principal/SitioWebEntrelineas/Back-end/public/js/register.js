window.addEventListener('load', function(){
let formulario = document.querySelector('form');
let campoNombre = document.querySelector('#first_name');
let spanName = document.querySelector('#span--first_name');
let campoApellido = document.querySelector('#last_name');
let spanApellido = document.querySelector('#span--last_name');
let campoUsuario = document.querySelector('#user');
let spanUser = document.querySelector('#span--user');
let campoEmail = document.querySelector('#email');
let spanEmail = document.querySelector('#span--email');
let campoContrasenia = document.querySelector('#password');
let spanPassword = document.querySelector('#span--password');


const expresiones = {
	user: /^[a-zA-Z0-9\_\-]{5,10}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{6,12}$/, // 6 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	
}

campoNombre.focus()
campoNombre.addEventListener('blur', (e)=>{
    if(!expresiones.name.test(e.target.value)){
        campoNombre.classList.add('error');
        spanName.classList.remove('invisible');
        spanName.classList.add('visible');
        
    }else{
        campoNombre.classList.remove('error');
        spanName.classList.add('invisible');
        spanName.classList.remove('visible');
        campoApellido.focus();
    }
});
campoApellido.addEventListener('blur', (e)=>{
    if(!expresiones.name.test(e.target.value)){
        campoApellido.classList.add('error')
        spanApellido.classList.remove('invisible');
        spanApellido.classList.add('visible');
    }else{
        campoApellido.classList.remove('error')
        spanApellido.classList.add('invisible');
        spanApellido.classList.remove('visible');
        campoUsuario.focus();
    }
});
campoUsuario.addEventListener('blur', (e)=>{
    if(!expresiones.user.test(e.target.value)){
        campoUsuario.classList.add('error')
        spanUser.classList.remove('invisible')
        spanUser.classList.add('visible')
    }else{
        campoUsuario.classList.remove('error')
        spanUser.classList.add('invisible')
        spanUser.classList.remove('visible')
        campoEmail.focus()
    }
});
campoEmail.addEventListener('blur',(e)=>{
    if(!expresiones.email.test(e.target.value)){
        campoEmail.classList.add('error')
        spanEmail.classList.remove('invisible')
        spanEmail.classList.add('visible')
    }else{
        campoEmail.classList.remove('error')
        spanEmail.classList.add('invisible')
        spanEmail.classList.remove('visible')
        campoContrasenia.focus();
    }
})
campoContrasenia.addEventListener('blur', (e)=>{
    if(!expresiones.password.test(e.target.value)){
        campoContrasenia.classList.add('error')
        spanPassword.classList.remove('invisible')
        spanPassword.classList.add('visible')
    }else{
        campoContrasenia.classList.remove('error')
        spanPassword.classList.add('invisible')
        spanPassword.classList.remove('visible')
    }
});


})