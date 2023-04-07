
let menssajeError = ['Nombre muy corto', 'Apellido muy corto' ,'RUT invalido!', 'Email invalido', 'No ha ingresado mensaje'];

const iName = document.querySelector("input#name");
const mName = document.querySelector("input#name + span");

iName.addEventListener('blur', (e) => {
    if( iName.value.length < 3 ) {
        mName.textContent = menssajeError[0];
        mName.classList.add("error");
        iName.classList.add("error");
        iName.style.border = '3px solid red';
    } else {
        iName.style.border = '3px solid green';
        iName.classList.remove("error");
        mName.classList.remove("error");
        mName.textContent = "";
    }
});

const iLastName = document.querySelector("input#lastname");
const mLastName = document.querySelector("input#lastname + span");

iLastName.addEventListener('blur', (e) => {
    if( iLastName.value.length < 3 ) {
        mLastName.textContent = menssajeError[1];
        mLastName.classList.add("error");
        iLastName.classList.add("error");
        iLastName.style.border = '3px solid red';
    } else {
        iLastName.style.border = '3px solid green';
        iLastName.classList.remove("error");
        mLastName.classList.remove("error");
        mLastName.textContent = "";
    }
});

var Rut = {
	// Valida el rut con su cadena completa "XXXXXXXX-X"
	validaRut : function (rutCompleto) {
		rutCompleto = rutCompleto.replaceAll(".","");
		if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
			return false;
		var tmp 	= rutCompleto.split('-');
		var digv	= tmp[1]; 
		var rut 	= tmp[0];
		if ( digv == 'K' ) digv = 'k' ;
		
		return (Rut.dv(rut) == digv );
	},
	dv : function(T){
		var M=0,S=1;
		for(;T;T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11;
		return S?S-1:'k';
	}
};

const iRut = document.querySelector("input#rut");
const mRut = document.querySelector("input#rut + span");

iRut.addEventListener('blur', (e) => {
    const rut = iRut.value;
    if( !Rut.validaRut(rut) ) {
        mRut.textContent = menssajeError[2];
        mRut.classList.add("error");
        iRut.classList.add("error");
        iRut.style.border = '3px solid red';
    } else {
        iRut.style.border = '3px solid green';
        iRut.classList.remove("error");
        mRut.classList.remove("error");
        mRut.textContent = "";
    }
});

const iEmail = document.querySelector('input#email');
const mEmail = document.querySelector("input#email + span");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

iEmail.addEventListener('input', () => {
    const email = iEmail.value;
    const isEmailValid = emailRegex.test(email);
    
    if (isEmailValid) {
        iEmail.style.border = '3px solid green';
        mEmail.textContent = '';
    } else {
        iEmail.style.border = '3px solid red';
        mEmail.textContent = 'Correo no es válido';
    }
});

const iMessage = document.querySelector('textarea#message');
const mMessage = document.querySelector("textarea#message + span");

iMessage.addEventListener('blur', (e) => {
    if( iMessage.value.length < 1 ) {
        mMessage.textContent = menssajeError[4];
        mMessage.classList.add("error");
        iMessage.classList.add("error");
        iMessage.style.border = '3px solid red';
    } else {
        iMessage.style.border = '3px solid green';
        iMessage.classList.remove("error");
        mMessage.classList.remove("error");
        mMessage.textContent = "";
    }
})