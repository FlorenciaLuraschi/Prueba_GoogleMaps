<?php
/**
 *
 */
class BaseJSON extends BaseDatos{
  private $nombreArchivo;
  public function __construct($nombreArchivo){
    $this->nombreArchivo=$nombreArchivo;
  }
  public function getNombrearchivo(){
    return $this->nombreArchivo;
  }
  public function setNombrearchivo($nombreArchivo){
    $this->nombreArchivo=$nombreArchivo;
  }
  public function guardar($registro){
    $jsusuario = json_encode($registro);
    file_put_contents($this->nombreArchivo,$jsusuario. PHP_EOL, FILE_APPEND);
  }
  public function abrirBaseDatos(){
    if(file_exists($this->nombreArchivo)){
    $baseDatosJson=file_get_contents($this->nombreArchivo);
    $baseDatosJson= explode(PHP_EOL,$baseDatosJson);
    array_pop($baseDatosJson);
    foreach ($baseDatosJson as $marcadores) {
      $arrayMarcadores[]=json_decode($marcadores,true);
    }
    return $arrayMarcadores;
  }else{
    return null;
  }
  }

  public function checkearMarcadores($coordenadas){
    $marcadores = $this->abrirBaseDatos();
    if($marcadores !==null){
      foreach($marcadores as $marcador){
       if ($coordenadas === $marcador["$coordenadas"]) {
           return $marcador;
        }
      }
     }
     return null;
  }

  public function actualizar(){

  }
  public function borrar(){
    unlink($this->nombreArchivo);
  }
}
