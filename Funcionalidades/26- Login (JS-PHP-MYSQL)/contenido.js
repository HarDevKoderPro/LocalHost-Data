"use strict";

//===============================================================
// Referencio elementos del DOM
//===============================================================
const spanNombres = document.getElementById("spanNombres");

//===============================================================
// Función que extrae datos del Local Storage
//===============================================================

const leerDeLS = (clave) => {
  try {
    const json = localStorage.getItem(clave);
    if (json === null) return null; // no existe la clave
    return JSON.parse(json); // devuelve objeto literal
  } catch (e) {
    console.error(`Error al leer/parcear "${clave}" desde localStorage:`, e);
    return null; // en caso de error, devolvemos null
  }
};

//===============================================================
// PROGRAMA PRINCIPAL
//===============================================================

//===============================================================
// Obtengo datos del usuario del LS
//===============================================================
const datosDeUsuario = leerDeLS("datosUsuarioLogueado");

//===============================================================
// Muestro Nombres del usuario en la pagina de contenido
//===============================================================
spanNombres.textContent = datosDeUsuario.nombresDelUsuario;
