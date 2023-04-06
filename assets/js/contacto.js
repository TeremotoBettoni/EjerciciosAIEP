
let inputName = document.getElementById('name');
let inputLastName = document.getElementById('lastname');
let inputRut = document.getElementById('rut');
let inputEmail = document.getElementById('email');
let inputMessage = document.getElementById('message');

inputName.addEventListener('input', () => {
    if (inputName.value.length > 3) { 
        inputName.style.border = '3px solid green'
    } else {
        inputName.style.border = '3px solid red'
        const dato = document.querySelector('form');
        const alerta = document.createElement('p');
        alerta.textContent = "Campo incompleto";
        dato.appendChild(alerta);
    }
})

inputLastName.addEventListener('input', () => {
    if (inputLastName.value.length > 3) { 
        inputLastName.style.border = '3px solid green'
    } else {
        inputLastName.style.border = '3px solid red'
    }
})

inputRut.addEventListener('input', () => {
    if (inputRut.value.length > 3) { 
        inputRut.style.border = '3px solid green'
    } else {
        inputRut.style.border = '3px solid red'
    }
})

inputEmail.addEventListener('input', () => {
    if (inputEmail.value.length > 3) { 
        inputEmail.style.border = '3px solid green'
    } else {
        inputEmail.style.border = '3px solid red'
    }
})

inputMessage.addEventListener('input', () => {
    if (inputMessage.value.length > 10) { 
        inputMessage.style.border = '3px solid green'
    } else {
        inputMessage.style.border = '3px solid red'
    }
})