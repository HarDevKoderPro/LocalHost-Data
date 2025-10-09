"use strict";

// Referencio elementos del DOM a utilizar
const btnIngresar = document.getElementById("btnIngresar");
const cajaEmail = document.getElementById("cajaEmail");
const cajaPassword = document.getElementById("cajaPassword");

// Función que Guarda datos en variables PHP
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
    })

    // Captura de errores
    .catch((error) => console.error("Error:", error));
};

// Acciones al presionar el Botón de enviar
btnIngresar.addEventListener("click", () => {
  // Objeto JSON con los datos a enviar a PHP
  const datosUsuario = {
    email: cajaEmail.value,
    pass: cajaPassword.value,
  };

  // Envio los datos a PHP y los guardo en variables
  enviarDatosAPhp(datosUsuario);

  // Borro contenido de los inputs
  cajaEmail.value = "";
  cajaPassword.value = "";
});
