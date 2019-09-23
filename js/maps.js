"use strict";

// Al inicio el mapa se verá Buenos Aires con un zoom de 10
var mapa;
var marcadores = [];

function initMap() {
  var buenosAires = {
    lat: -34.603722,
    lng: -58.381592
  };
  //Instanciando al mapa
  var mapa = new google.maps.Map(document.getElementById('googleMap'), {
    center: buenosAires,
    zoom: 10
  });

  //Busca los datos proporcionados por el formulario
  $("form").on("submit", function(event) {
    event.preventDefault();
    var datos = $(this).serialize().split("&");

    //Colocar una marca, usando los datos del formulario
    var datoCoord = $("input[name='coordenada']").val().split(" ");
    var datoLatLong = {
      lat: Number(datoCoord[0]),
      lng: Number(datoCoord[1])
    };

    var marcador = new google.maps.Marker({
      position: {
        lat: Number(datoCoord[0]),
        lng: Number(datoCoord[1])
      },
      map: mapa
    });
    marcadores.push(marcador);
    //Agrega contenido/información al marcador dada por el formulario
    var datoDescripcion = $("input[name='descripcion']").val();
    var datoDireccion = $("input[name='direccion']").val();
    var datoTelefono = $("input[name='telefono']").val();
    var datoCoordenada = $("input[name='coordenada']").val();

    //Leyenda que debe aparecer sobre la marcha al tocarla
    var contentString = '<div id = "content">' +
      '<h1 id = "firstHeading" class = "firstHeading"> Información </h1>' +
      '<div id = "bodyContent">' +
      '<b> Descripción: </b>' + datoDescripcion +
      '<br><b> Dirección: </b>' + datoDireccion +
      '<br><b> Telefóno: </b>' + datoTelefono +
      '<br><b> Coordenada: </b>' + datoCoordenada +
      '</div>' +
      '</div>';

    var contenido = new google.maps.InfoWindow({
      content: contentString
    });

    //Al hacer click sobre la marca muestra la información
    marcador.addListener('click', function() {
      contenido.open(mapa, marcador);
    });
  });


  //EXTRAS
  // Que se pueda seleccionar del mapa
  // Cuando se genera el evento click sobre el mapa se genera la marca con la función addMarker.
  mapa.addListener('click', function(event) {
    addMarker(event.latLng);
  });

  // Suma las marcas al mapa y además agrega el punto al array de marcadores.
  function addMarker(pocicion) {
    var marker = new google.maps.Marker({
      position: pocicion,
      map: mapa
    });
   marcadores.push(marker);
  }
}

function setMapOnAll(mapa) {
  for (var i = 0; i < marcadores.length; i++) {
    marcadores[i].setMap(mapa);
  }
}

// Oculta los marcadores del mapa, pero los mantiene dentro del array.
function clearMarkers() {
  setMapOnAll(null);
}

// // Muestra y genera la marca sobre el mapa el contenido del array.
// function showMarkers() {
//   setMapOnAll(mapa);
// }

// Borra los marcadores del mapa y vacia el array.
function deleteMarkers() {
  clearMarkers();
  marcadores = [];
}


// $('.formulario').on('submit', function(){
//   $getJSON("marcadores.json", function(datos){
//     console.log(datos);
//   });
// });
