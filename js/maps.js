"use strict";

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
