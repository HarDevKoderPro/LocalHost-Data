"use strict";

// Clase que contiene los métodos (Funciones) del proyecto
export class Funcionalidades {
  // Método para extraer dato de inputs
  static extraerDatos() {
    let datosUsuario = {
      nombre: inputNombre.value,
      email: inputEmail.value,
    };

    return datosUsuario;
  }

  // Método para evaluar inputs vacíos
  static hayInputsVacios() {
    const inputsArr = document.querySelectorAll("input");
    return [...inputsArr].some((input) => input.value === "");
  }

  // Método para mostrar alertas
  static mensaje(texto) {
    alert(texto);
  }

  // Método para borrar inputs
  static borrarInputs() {
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  }

  // Método para colocar mayúscula inicial a un texto
  static mayusculaInicial(texto) {
    let textoCapitalizado = '';
    texto = texto.split(" ").forEach((palabra) => {
      textoCapitalizado += `${palabra.charAt(0).toUpperCase()}${palabra
        .substring(1)
        .toLowerCase()} `;
    });

    return textoCapitalizado;
  }
}
