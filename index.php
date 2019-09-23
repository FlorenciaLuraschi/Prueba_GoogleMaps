<?php
require_once("Autoload.php");

  if ($_POST) {
    $marcador= new Marcador($_POST["descripcion"],$_POST["direccion"],$_POST["telefono"],$_POST["coordenada"],$_POST["categoria"]);
    $registroMarcador = $registro->armarMarcador($marcador);
    $json->guardar($registroMarcador);
    redirect("index.php");
      }
?>

<!DOCTYPE html>
<html lang="es" dir="ltr">
<!-- Pagina para realizar busquedas dentro de un mapa, llamando a la API de GoogleMaps. -->

<head>
  <!-- Metadatos -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- titulo pincipal de la pagina -->
  <title>Buscador en Mapa</title>
  <!-- Estilos -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="css/master.css">
</head>

<body>
  <!-- Formulario para ingresar los marcadores -->
  <form class="formulario" action="index.php" method="post">
    <div class="form-group row">
      <label for="inputDescripcion" class="col-sm-4 col-form-label">Descripción</label>
      <div class="col-sm-7">
        <input type="text" class="form-control" name="descripcion" id="inputDescripcion" required>
      </div>
    </div>
    <div class="form-group row">
      <label for="inputDireccion" class="col-sm-4 col-form-label">Dirección</label>
      <div class="col-sm-7">
        <input class="form-control" name="direccion" id="inputDireccion" required>
      </div>
    </div>
    <div class="form-group row">
      <label for="inputTelefono" class="col-sm-4 col-form-label">Telefóno</label>
      <div class="col-sm-7">
        <input type="tel" class="form-control" name="telefono" id="inputTelefono" pattern="[0-9]{2}\s[0-9]{1}\s[0-9]{2}\s[0-9]{4}\s[0-9]{4}"  placeholder="ej: 54 9 11 1234 5678" required>
      </div>
    </div>
    <div class="form-group row">
      <label for="inputCoordenadas" class="col-sm-4 col-form-label">Coordenadas</label>
      <div class="col-sm-7">
        <input type="text" class="form-control" name="coordenada" id="inputCoordenadas" placeholder="ej: -34.603 -58.381" required>
      </div>
    </div>
    <div id="errorCoordLat"></div>
    <div id="errorCoordLon"></div>
    <div class="form-group row">
      <label for="inputCategoria" class="col-sm-4 col-form-label">Categoría</label>
      <div class="col-sm-7">
        <select class="form-control" name="categoria" id="inputCategoria" required>
          <option value="">Elige una opción</option>
          <option>Comercial</option>
          <option>Residencial</option>
          <option>Mixta</option>
        </select>
      </div>
    </div>
    <div class="form-group row">
      <div class="d-flex flex-row col-6">
        <input onclick="deleteMarkers();" class="btn btn-warning" type=button value="Borrar Marcador">
      </div>
      <div class="col-6">
        <button type="submit" class="btn btn-primary">Agregar</button>
        </div>
    </div>
  </form>

  <!-- Contenedor princial del mapa -->
  <div id="googleMap"></div>


  <!-- Cargamos la API de JavaScript de Maps y distintas funcionalidades del mapa -->
  <script type="text/javascript" src="js/validacion.js"></script>
  <script type="text/javascript" src="js/maps.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=&callback=initMap" async defer></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>

</html>
