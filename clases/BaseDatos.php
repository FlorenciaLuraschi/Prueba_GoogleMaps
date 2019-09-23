<?php
/**
 *
 */
abstract class BaseDatos{
  abstract public function guardar(array $registro);
  abstract public function abrirBaseDatos();
  abstract public function borrar();
  abstract public function actualizar();
}
