"use strict";

//Me quedo con los elementos del Formulario
var datosFormulario = document.forms[0];
var formulario = document.querySelector('.formulario');
formulario.elements.descripcion.focus();

//Control que se ejecuta una vez que el usuario envia los datos
formulario.onsubmit = function(evento){
  if(!validacionDatosFormulario()){
    evento.preventDefault()
  }else {
    datosFormulario.submit()
  }
}

//Funcion que valida todos los campos del Formulario
function validacionDatosFormulario(){
  let {descripcion, direccion, telefono, coordenadas, categoria} = formulario.elements;
  if (!validarDescripcion(descripcion)) return false;
  if (!validarDireccion(direccion)) return false;
  if (!validarTelefono(telefono)) return false;
  if (!validarCoordenadas(coordenadas)) return false;
  if (!validarCategoria(categoria)) return false;
}

//validaciones por input en particular
function validarDescripcion(descripcion) {
  let valor = descripcion.value.trim();
if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
  descripcion.classList.add('is-invalid');
  return false;
}else{
  descripcion.classList.remove('is-invalid');
  descripcion.classList.add('is-valid');
  formulario.elements.direccion.focus()
  return true;
}
}

function validarDireccion(direccion) {
  let valor = direccion.value.trim();
if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
  direccion.classList.add('is-invalid');
  return false;
}else{
  direccion.classList.remove('is-invalid');
  direccion.classList.add('is-valid');
  formulario.elements.telefono.focus()
  return true;
}
}

function validarTelefono(telefono) {
  let valor = telefono.value.trim();
if( !(/^\d{2}\s\d{1}\s\d{2}\s\d{4}\s\d{4}$/.test(valor))  ) {
  telefono.classList.add('is-invalid');
  return false;
}else{
  telefono.classList.remove('is-invalid');
  telefono.classList.add('is-valid');
  formulario.elements.coordenadas.focus()
  return true;
}
}

function validarCoordenadas(coordenadas) {
  let errorCoordLat = document.getElementById('errorCoordLat');
  let errorCoordLong = document.getElementById('errorCoordLong');
  let valorString = coordenadas.value.trim();
  let valor = valorString.split(" ");
if(-90>Number(valor[0]) || 90<Number(valor[0]) || isNan (Number(valor[0]))) {
  errorCoordLat.innerHTML = "[Lat, Long] Lat entre -90 y 90";
  errorCoordLat.classList.add('alert-danger');
  coordenadas.classList.add('is-invalid');
  return false;
}else if (-180>Number(valor[1]) || 180<Number(valor[1]) || isNan (Number(valor[1]))) {
  errorCoordLong.innerHTML = "[Lat, Long] Long entre -180 y 180";
  errorCoordLong.classList.add('alert-danger');
  coordenadas.classList.add('is-invalid');
  return false;
}else{
  errorCoordLat.innerHTML = "";
  errorCoordLat.classList.remove('alert-danger');
  errorCoordLong.innerHTML = "";
  errorCoordLong.classList.remove('alert-danger');
  coordenadas.classList.remove('is-invalid');
  coordenadas.classList.add('is-valid');
  formulario.elements.categoría.focus()
  return true;
}
}

function validarCategoria(categoria) {
  let valor = document.getElementById("inputCategoria").selectedIndex;
if( valor == null || valor ==0 ) {
  categoia.classList.add('is-invalid');
  return false;
}else{
  categoia.classList.remove('is-invalid');
  categoia.classList.add('is-valid');
  return true;
}
}


// Al inicio el mapa se verá centrado en Buenos Aires con un zoom de 8
function initMap() {
  //Instanciando al mapa
  var mapa = new google.maps.Map(document.getElementById('googleMap'), {
    center: {lat: -34.603722, lng: -58.381592},
    zoom: 8
  });
  //Colocar una marca
  var marcador = new google.maps.Marker({
    position: {lat: -34.603722, lng: -58.381592},
    map: mapa
  });
  //Agrega contenido/información al marcador
  var contenido = new google.maps.InfoWindow({
    content:'Prueba de texto'
  });

  marcador.addListener('click', function(){
    contenido.open(mapa, marcador);
  });
}
