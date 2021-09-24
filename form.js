function checkCorreo(valor){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valor))
    {
        return (true)
    }
    
    return (false)
}

module.exports = checkCorreo;

// Validación  de la contraseña, en donde 
// el usuario deba  de ingresar por lo 
// menos  una letra mayúscula,  una 
// minúscula,  un número  y con una 
// longitud  mayor  o igual a 8 dígitos. Este 
// campo  es requerido,  por lo que, no se 
// puede  dejar vacío.

function checkContrasena(password) {
    const expresion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,30}$/g
    const pattern = password.match(expresion)
    if (pattern === null) {
        return false
    } else {
        return true
    }
}


module.exports = checkContrasena;


// Validar  el campo  teléfono, este 
// campo  debe tener una longitud  de 
// 7 dígitos únicamente,  solo puede 
// contener caracteres numéricos  y 
// no puede  dejarse vacío.


function checkContrasena(password) {
    const expresion = /^\d+$/g
    const pattern = password.match(expresion)
    if (pattern !== null && password.length === 7) {
        return true
    } else {
        return false
    }
}

module.exports = checkTelefono;
