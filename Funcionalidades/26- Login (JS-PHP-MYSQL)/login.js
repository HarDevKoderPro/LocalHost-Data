"use strict";

//===============================================================
// Referencia de elementos del DOM
//===============================================================

const btnIngresar = document.getElementById("btnIngresar");
const cajaEmail = document.getElementById("cajaEmail");
const cajaPassword = document.getElementById("cajaPassword");

//===============================================================
// Función que envia datos a PHP para verifacrlos en MySql
//===============================================================

const enviarDatosAPhp = (datosUsuario) => {
  // Envio de datos Js a variables PHP con fetch
  fetch("./login.php", {
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
      const guardadoExitoso = guardarEnLS('datosUsuarioLogueado', data)
      // window.location.href = "./contenido.html";
    })

    // Captura de errores
    .catch((error) => console.error("Error:", error));
};

//===============================================================
// Función que Guarda datos recibidos en Local Storage
//===============================================================

const guardarEnLS = (clave, data) => {
  try {
    const json = JSON.stringify(data);
    localStorage.setItem(clave, json);
    return true;
  } catch (e) {
    console.error("Error:", e.message);
    return false;
  }
};

//===============================================================
// PROGRAMA PRINCIPAL
//===============================================================

// Acciones al presionar el Botón de enviar
btnIngresar.addEventListener("click", () => {
  // Objeto JSON con los datos a enviar a PHP
  const datosUsuario = {
    email: cajaEmail.value,
    pass: cajaPassword.value,
  };

  // Validación simple opcional
  if (!datosUsuario.email || !datosUsuario.pass) {
    alert("Ingresa email y contraseña.");
    return;
  }

  // Envio los datos a PHP y los guardo en variables
  enviarDatosAPhp(datosUsuario);

  //  de inputs
  cajaEmail.value = "";
  cajaPassword.value = "";
});
