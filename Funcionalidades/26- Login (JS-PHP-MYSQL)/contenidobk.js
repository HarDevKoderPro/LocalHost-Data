"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const spanNombresUsuario = document.getElementById("spanNombresUsuario");
  if (!spanNombresUsuario) {
    console.warn("No se encontró #spanNombresUsuario");
    return;
  }

  // MISMA clave que en login.js
  const SECRET_KEY = "cambia-esta-clave-por-una-mas-larga-y-aleatoria";

  try {
    const cipherText = localStorage.getItem("app_user_info");
    if (!cipherText) {
      console.warn("No hay app_user_info en localStorage");
      spanNombresUsuario.textContent = "";
      return;
    }

    // Descifrar
    const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
    const json = bytes.toString(CryptoJS.enc.Utf8);

    if (!json) {
      console.error("No fue posible descifrar. ¿SECRET_KEY coincide?");
      spanNombresUsuario.textContent = "";
      return;
    }

    const payload = JSON.parse(json);
    spanNombresUsuario.textContent = payload?.nombresDelUsuario || "";
  } catch (err) {
    console.error("Error al descifrar/mostrar datos:", err);
    spanNombresUsuario.textContent = "";
  }
});
