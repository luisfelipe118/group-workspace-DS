const createForm = document.querySelector('#form-registro');
const nombre = createForm['Nombre'].value;
const telefono = createForm['Telefono'].value;
const direccion = createForm['Direccion'].value;
const correo = createForm['Correo'].value;
const password = createForm['Contrasena'].value;
const msjForm = document.querySelector('#msjRegistro');

const iptName = document.querySelector('#Nombre');
const iptTel = document.querySelector('#Telefono');
const iptDir = document.querySelector('#Direccion');
const iptMail = document.querySelector('#Correo');
const iptPass = document.querySelector('#Contrasena');
let flagIptN = false, flagIptT = false, flagIptD = false, flagIptM = false, flagIptP = false;

iptName.addEventListener('keypress', (e) => {

  if (checkNombre(e.target.value) == false) {
    iptName.classList.add('w3-border');
    iptName.classList.add('w3-border-red');
  } else {
    changeIptClass(iptName)
    flagIptN = true;
  }
  
});

iptTel.addEventListener('keypress', (e) => {

  if (checkTelefono(e.target.value) == false) {
    iptTel.classList.add('w3-border');
    iptTel.classList.add('w3-border-red');
  } else {
    changeIptClass(iptTel)
    flagIptT = true;
  }
  
});

iptDir.addEventListener('keypress', (e) => {

  if (checkDir(e.target.value) == false) {
    iptDir.classList.add('w3-border');
    iptDir.classList.add('w3-border-red');
  } else {
    changeIptClass(iptDir)
    flagIptD = true;
  }
  
});

iptMail.addEventListener('keypress', (e) => {

  if (checkCorreo(e.target.value) == false) {
    iptMail.classList.add('w3-border');
    iptMail.classList.add('w3-border-red');
  } else {
    changeIptClass(iptMail)
    flagIptM = true;
  }
  
});

iptPass.addEventListener('keypress', (e) => {

  if (checkContrasena(e.target.value) == false) {
    iptPass.classList.add('w3-border');
    iptPass.classList.add('w3-border-red');
  } else {
    changeIptClass(iptPass)
    flagIptP = true;
  }
  
});

createForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (flagIptN && flagIptT && flagIptD && flagIptM && flagIptP)
  {
    console.log("entro");
    db.collection('tiendas').add({
      nombre: createForm.Nombre.value,
      telefono: createForm.Telefono.value,
      direccion: createForm.Direccion.value,
      correo: createForm.Correo.value,
      password: createForm.Contrasena.value
    }).then(() => {
      msjForm.style.display = "block";
      createForm.reset();
    }).catch(err => {
      console.log(err.message);
    });
  }
});

// invoca esta funcion cuando en los eventlistener de los input
function changeIptClass(ipt){
  ipt.classList.remove('w3-border');
  ipt.classList.remove('w3-border-red');
}

function checkNombre(value){
  if(/^[a-zA-Z??-??\s]{4,30}$/.test(value)){
      return true;
  }
  else{
      return false;
  }
}

// Validar  el campo  tel??fono, este 
// campo  debe tener una longitud  de 
// 7 d??gitos ??nicamente,  solo puede 
// contener caracteres num??ricos  y 
// no puede  dejarse vac??o.


function checkTelefono(valor) {
  const expresion = /^\d+$/g;
  const pattern = valor.match(expresion);
  if (pattern !== null && valor.length === 7) {
      return true;
  } else {
      return false;
  }
}


// Validaci??n Direcci??n
// Este campo debe de contener caracteres alfanum??ricos y 
// ??nicamente los caracteres especiales de # y -. As?? mismo,
// el campo deber?? de contar con una longitud no mayor a 50
// caracteres y al ser un campo requerido no puede
// quedar vac??o

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
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valor))
  {
      return true;
  }
  
  return false;
}


// Validaci??n  de la contrase??a, en donde 
// el usuario deba  de ingresar por lo 
// menos  una letra may??scula,  una 
// min??scula,  un n??mero  y con una 
// longitud  mayor  o igual a 8 d??gitos. Este 
// campo  es requerido,  por lo que, no se 
// puede  dejar vac??o.

function checkContrasena(valor) {
  const expresion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,30}$/g;
  const pattern = valor.match(expresion);
  if (pattern === null) {
      return false;
  } else {
      return true;
  }
}


  
