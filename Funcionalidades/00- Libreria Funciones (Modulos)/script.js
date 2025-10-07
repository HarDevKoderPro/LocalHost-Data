"use strict";
// Importo libreria de Funciones(métodos)
import { Funcionalidades } from "./miLibreria.js";

// Esperar a que se cargue e DOM
document.addEventListener(
  "DOMContentLoaded",
  () => {
    // Referencio elementos del DOM
    const getEL = (id) => document.getElementById(id);
    const inputNombre = getEL("inputNombre");
    const inputEmail = getEL("inputEmail");
    const btnEnviar = getEL("btnEnviar");

    // Programa principal
    btnEnviar.addEventListener("click", () => {
      // Valido inputs vacios
      if (Funcionalidades.hayInputsVacios()) {
        Funcionalidades.mensaje("faltan datos");
      } else {
        // Extraigo los datos de los inputs
        let datosUsuario = Funcionalidades.extraerDatos();
        // Coloco mayuscula inicial al nombre
        let nombre = Funcionalidades.mayusculaInicial(datosUsuario.nombre);
        // Muestro los resultados en un alert
        console.log(`Hola ${nombre}, tu email es ${datosUsuario.email}`);
        document.body.innerText = `Hola ${nombre}, tu email es ${datosUsuario.email}`;
      }
    });
  },
  50
);
