<?php
require_once("helpers.php");
require_once("clases/Marcadores.php");
// require_once("clases/Validador.php");
require_once("clases/BaseDatos.php");
require_once("clases/BaseJson.php");
require_once("clases/ArmarBase.php");
// $validar=new Validador();
$json=new BaseJson("marcadores.json");
$registro=new armarBase();
