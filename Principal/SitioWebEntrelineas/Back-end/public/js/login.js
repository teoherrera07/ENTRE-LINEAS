window.addEventListener('load', function(){
    let formulario = document.querySelector('form');
    let campoEmail = document.querySelector('#email');
    let spanEmail = document.querySelector('#spanEmail');
    let campoContrasenia = document.querySelector('#password');
    let spanPassword = document.querySelector('#spanPassword');
    
    
    const expresiones = {
        password: /^.{8,12}$/, // 8 a 12 digitos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        
    }

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