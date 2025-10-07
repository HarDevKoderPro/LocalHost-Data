"use strict";
setTimeout(() => {
  // Variables Globales
  //---------------------------------------------------------------
  // Referencias de elementos del DOM
  //---------------------------------------------------------------
  const getEl = (id) => document.getElementById(id);
  const inputNombre = getEl("inputNombre");
  const inputApellido = getEl("inputApellido");
  const inputEdad = getEl("inputEdad");
  const btnEnviar = getEl("btnEnviar");

  //---------------------------------------------------------------
  // --- PROCESO (FUNCIONES) ---
  //---------------------------------------------------------------
  //PASO 1: Extraer valores de los inputs
  //---------------------------------------------------------------
  const extraerValorInputs = () => {
    let datosUsuario = {
      nombre: inputNombre.value,
      apellido: inputApellido.value,
      edad: inputEdad.value,
    };

    return datosUsuario;
  };

  //---------------------------------------------------------------
  //PASO 2: Mostrar valores JS en consola antes de pasarlos a PHP
  //---------------------------------------------------------------
  const mostrarDatosJSenConsola = (datosUsuario) => {
    console.log("Datos JS:", datosUsuario);
  };

  //---------------------------------------------------------------
  // 3- Guardar datos JS en variables PHP Y MOSTRARLOS EN CONSOLA
  //---------------------------------------------------------------
  const guardarDatosJsEnPhp = (datosUsuario) => {

    // Envio de datos Js a variables PHP con fetch
    fetch("php/procesar.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosUsuario),
    })

      // Se recibe la respuesta de PHP (contenido variables PHP)
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos PHP: ", data);
      })

      // Captura de errores
      .catch((error) => console.error("Error:", error));
  };

  // -----------------------------------------------------------------
  // PROGRAMA PRINCIPAL
  // -----------------------------------------------------------------

  btnEnviar.addEventListener("click", () => {
    let datosUsuario = extraerValorInputs();
    mostrarDatosJSenConsola(datosUsuario);
    guardarDatosJsEnPhp(datosUsuario);
  });
}, 100);
