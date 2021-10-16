let registros = [];

function agregarRegistro() {

  let registro = {
    Nombre: "Ana",
    Genero: "",
    Telefono: "",
    Direccion: "",
    Correo : "Ana@gmail.com",
    Contrasena: "",
  };
  
    if (registros.length < 3) {
      registros.push(registro);
    }   
  return registros;
}

function ordenarArreglo(arreglo) {
  let names = arreglo.map((x)=> {
    return x.Nombre
  }).sort()
  let response = []
  for (let i=0; i<names.length; i++) {
    let found = arreglo.find(element => element.Nombre == names[i])
    response.push(found)
  }
  return response;
}

function filtrarCorreo(arreglo) {
  let response = arreglo.filter(ele => ele.Correo.indexOf('@gmail') !== -1);
  return response
}
module.exports = {
  registros,
  agregarRegistro,
  filtrarCorreo,
  ordenarArreglo,
}
