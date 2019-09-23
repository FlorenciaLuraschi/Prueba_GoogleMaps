"use strict";

// Al inicio el mapa se verá Buenos Aires con un zoom de 10
var mapa;

function initMap() {
  var buenosAires = {lat: -34.603722, lng: -58.381592};
  //Instanciando al mapa
  var mapa = new google.maps.Map(document.getElementById('googleMap'), {
    center: buenosAires,
    zoom: 10
  });

  //Busca los datos proporcionados por el formulario
  $("form").on("submit", function(event){
  event.preventDefault();
  var datos= $(this).serialize().split("&");

  //Colocar una marca, usando los datos del formulario
  var datoCoord = $( "input[name='coordenada']" ).val().split(" ");
  var marcador = new google.maps.Marker({
    position: {lat: Number(datoCoord[0]), lng: Number(datoCoord[1])},
    map: mapa
  });

  //Agrega contenido/información al marcador dada por el formulario
  var datoDescripcion = $( "input[name='descripcion']" ).val();
  var datoDireccion = $( "input[name='direccion']" ).val();
  var datoTelefono = $( "input[name='telefono']" ).val();
  var datoCoordenada = $( "input[name='coordenada']" ).val();

//Leyenda que debe aparecer sobre la marcha al tocarla
var contentString = '<div id = "content">' +
           '<h1 id = "firstHeading" class = "firstHeading"> Información </h1>' +
           '<div id = "bodyContent">' +
           '<b> Descripción: </b>'+ datoDescripcion +
           '<br><b> Dirección: </b>'+ datoDireccion +
           '<br><b> Telefóno: </b>'+ datoTelefono +
           '<br><b> Coordenada: </b>'+ datoCoordenada +
           '</div>' +
           '</div>' ;

  var contenido = new google.maps.InfoWindow({
    content:contentString
  });

//Al hacer click sobre la marca muestra la información
  marcador.addListener('click', function(){
    contenido.open(mapa, marcador);
  });
});
}
