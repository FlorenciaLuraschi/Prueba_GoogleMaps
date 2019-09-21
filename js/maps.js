"use strict";

// Al inicio el mapa se verá centrado en Buenos Aires con un zoom de 8
function initMap() {
  //Instanciando al mapa
  var map = new google.maps.Map(document.getElementById('googleMap'), {
    center: {lat: -34.603722, lng: -58.381592},
    zoom: 8
  });
  //Colocar una marca
  var marker = new google.maps.Marker({
    position: {lat: -34.603722, lng: -58.381592},
    map: map
  });
}
