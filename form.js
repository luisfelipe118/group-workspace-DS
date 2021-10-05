/*Valida que el nombre solo tenga caracteres alfabéticos, mayúsculas, minúsculas con acentos y espacios. Longitud mínima de 4 caracteres y máxima de 30*/ 

function checkNombre(value){
    if(/^[a-zA-ZÁ-ÿ\s]{4,30}$/.test(value)){
        return true;
    }
    else{
        return false;
    }
}

// Validar  el campo  teléfono, este 
// campo  debe tener una longitud  de 
// 7 dígitos únicamente,  solo puede 
// contener caracteres numéricos  y 
// no puede  dejarse vacío.


function checkTelefono(valor) {
    const expresion = /^\d+$/g;
    const pattern = valor.match(expresion);
    if (pattern !== null && valor.length === 7) {
        return true;
    } else {
        return false;
    }
}


// Validación Dirección
// Este campo debe de contener caracteres alfanuméricos y 
// únicamente los caracteres especiales de # y -. Así mismo,
// el campo deberá de contar con una longitud no mayor a 50
// caracteres y al ser un campo requerido no puede
// quedar vacío

function checkDir(valor){
    const expresion = /^[0-9a-zA-Z #-]+$/; 
    const pattern = valor.match(expresion);
    if (pattern !== null && valor.length <= 50) {
        return true;
    } else {
        return false;
    }
}

function checkCorreo(valor){
    valor = document.getElementById("correo")
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valor))
    {
        return true;
    }
    
    return false;
}


// Validación  de la contraseña, en donde 
// el usuario deba  de ingresar por lo 
// menos  una letra mayúscula,  una 
// minúscula,  un número  y con una 
// longitud  mayor  o igual a 8 dígitos. Este 
// campo  es requerido,  por lo que, no se 
// puede  dejar vacío.

function checkContrasena(valor) {
    const expresion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,30}$/g;
    const pattern = valor.match(expresion);
    if (pattern === null) {
        return false;
    } else {
        return true;
    }
}

module.exports = { checkNombre, checkTelefono, checkDir, checkCorreo, checkContrasena };