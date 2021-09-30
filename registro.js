let registros = [];

function ordenarArreglo(arreglo){
    let newArray = [];
    if (arreglo.length > 0) {
        newArray = arreglo.sort(function(a, b){
            let x = a.Nombre.toLowerCase(), 
                y = b.Nombre.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });

        for( let item in arreglo){
            console.log(arreglo[item].Nombre);
        }
    }
    return newArray;
}

function filtrarCorreo(arreglo){
    arreglo = registros;
    let newArray = arreglo.filter(function (el) {
        return el.Correo.includes("gmail.com") ;
    });

    for( let item in newArray){
        console.log(newArray[item]);
    }

    return newArray;
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

function agregarRegistro(){
    /*let Nombre = document.getElementById('Nombre').value;  
    let Genero = document.querySelector('input[name = "Genero"]:checked').value;
    let Telefono = document.getElementById('Telefono').value;
    let Direccion = document.getElementById('Direccion').value;  
    let Correo = document.getElementById('Correo').value;
    let Contrasena = document.getElementById('Contrasena').value;*/

    let Nombre = "Ana";  
    let Genero = "";
    let Telefono = "";
    let Direccion = "";
    let Correo = "asgmail.com";
    let Contrasena = "";

    let registro = {
        Nombre,
        Genero,
        Telefono,
        Direccion,
        Correo,
        Contrasena
    }

    console.log(registro);
    if (registros.length < 3) {
        registros.push(registro);
    } 
}

//cj.cardona@hotmail.com

module.exports = { registros, agregarRegistro, ordenarArreglo, filtrarCorreo };