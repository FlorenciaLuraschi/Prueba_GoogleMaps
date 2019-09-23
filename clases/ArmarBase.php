<?php
/**
 *
 */
 class armarBase{
   public function armarMarcador($registro){
    $array = explode(" ", $registro->getCoordenada());
    $array = [(real)$array[0],(real)$array[1]];
    $marcador = [
         "descripcion"=>$registro->getDescripcion(),
         "direccion"=>$registro->getDireccion(),
         "telefono"=>$registro->getTelefono(),
         "coordenada"=> $array,
         "categoria"=>$registro->getCategoria(),
     ];
     return $marcador;
   }
 }
