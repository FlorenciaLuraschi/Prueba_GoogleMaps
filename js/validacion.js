"use strict";
window.onload = function() {
  //Me quedo con los elementos del Formulario
  var datosFormulario = document.forms[0];
  var formulario = document.querySelector('.formulario');
  formulario.elements.descripcion.focus();

  //Control que se ejecuta una vez que el usuario envia los datos
  formulario.onsubmit = function(evento) {
    if (!validacionDatosFormulario()) {
      evento.preventDefault()
    } else {
      datosFormulario.submit()
    }
  }

  //Funcion que valida todos los campos del Formulario
  function validacionDatosFormulario() {
    let {
      descripcion,
      direccion,
      telefono,
      coordenada,
      categoria
    } = formulario.elements;
    if (!validarDescripcion(descripcion)) return false;
    if (!validarDireccion(direccion)) return false;
    if (!validarTelefono(telefono)) return false;
    if (!validarCoordenadasLat(coordenada)) return false;
    if (!validarCoordenadasLong(coordenada)) return false;
    if (!validarCategoria(categoria)) return false;
  }

  //validaciones por input en particular
  function validarDescripcion(descripcion) {
    let valor = descripcion.value.trim();
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
      descripcion.classList.add('is-invalid');
      return false;
    } else {
      descripcion.classList.remove('is-invalid');
      descripcion.classList.add('is-valid');
      return true;
    }
  }

  function validarDireccion(direccion) {
    let valor = direccion.value.trim();
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
      direccion.classList.add('is-invalid');
      return false;
    } else {
      direccion.classList.remove('is-invalid');
      direccion.classList.add('is-valid');
      return true;
    }
  }

  function validarTelefono(telefono) {
    let valor = telefono.value.trim();
    if (!(/^\d{2}\s\d{1}\s\d{2}\s\d{4}\s\d{4}$/.test(valor))) {
      telefono.classList.add('is-invalid');
      return false;
    } else {
      telefono.classList.remove('is-invalid');
      telefono.classList.add('is-valid');
      return true;
    }
  }

  function validarCoordenadasLat(coordenada) {
    let errorCoordLat = document.getElementById('errorCoordLat');
    let valorString = coordenada.value;
    let valor = valorString.split(" ");
    if (-90 > Number(valor[0]) || 90 < Number(valor[0]) || isNaN(Number(valor[0]))) {
      errorCoordLat.innerHTML = "[Lat Long] Lat entre -90 y 90";
      errorCoordLat.classList.add('alert-danger');
      coordenada.classList.add('is-invalid');
      return false;
    } else {
      errorCoordLat.innerHTML = "";
      errorCoordLat.classList.remove('alert-danger');
      coordenada.classList.remove('is-invalid');
      coordenada.classList.add('is-valid');
      return true;
    }
  }

  function validarCoordenadasLong(coordenada) {
    let errorCoordLong = document.getElementById('errorCoordLon');
    let valorString = coordenada.value;
    let valor = valorString.split(" ");
    if (-180 > Number(valor[1]) || 180 < Number(valor[1]) || isNaN(Number(valor[1]))) {
      errorCoordLong.innerHTML = "[Lat Long] Long entre -180 y 180";
      errorCoordLong.classList.add('alert-danger');
      coordenada.classList.add('is-invalid');
      return false;
    } else {
      errorCoordLong.innerHTML = "";
      errorCoordLong.classList.remove('alert-danger');
      coordenada.classList.remove('is-invalid');
      coordenada.classList.add('is-valid');
      return true;
    }
  }

  function validarCategoria(categoria) {
    let valor = document.getElementById("inputCategoria").selectedIndex;
    if (valor == null || valor == 0) {
      categoria.classList.add('is-invalid');
      return false;
    } else {
      categoria.classList.remove('is-invalid');
      categoria.classList.add('is-valid');
      return true;
    }
  }
}
