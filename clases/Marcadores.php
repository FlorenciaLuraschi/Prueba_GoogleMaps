<?php
/**
 *
 */
 class Marcador {
   private $descripcion;
   private $direccion;
   private $telefono;
   private $coordenada;
   private $categoria;
   public function __construct($descripcion,$direccion,$telefono,$coordenada,$categoria)
   {
     $this->descripcion=$descripcion;
     $this->direccion=$direccion;
     $this->telefono=$telefono;
     $this->coordenada=$coordenada;
     $this->categoria=$categoria;
   }
   public function getDescripcion(){
     return $this->descripcion;
   }
   public function setDescripcion($descripcion){
     $this->descripcion=$descripcion;
   }
   public function getDireccion(){
     return $this->direccion;
   }
   public function setDireccion($direccion){
     $this->direccion=$direccion;
   }
   public function getTelefono(){
     return $this->telefono;
   }
   public function setTelefono($telefono){
     $this->telefono=$telefono;
   }
   public function getCoordenada(){
     return $this->coordenada;
   }
   public function setCoordenada($coordenada){
     $this->coordenada=$coordenada;
   }
   public function getCategoria(){
     return $this->categoria;
   }
   public function setCategoria($Categoria){
     $this->categoria=$Categoria;
   }
 }
