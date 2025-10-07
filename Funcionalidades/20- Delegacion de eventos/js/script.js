/* 
- Permite seleccionar elementos hijos con solo apuntar al contenedor padre
- cada elemento hijo puede manipularse individualmente
- Es coo mapear al padre y definir acciones para cada parte del mapa (hijos)
*/

// Activar modo estricto
"use strict";

// Referencias a elementos del DOM
const doQueSel = (selector) => document.querySelector(selector);
const container = doQueSel(".container");
const titulo = doQueSel(".titulo");
const inputText = doQueSel(".inputText");
const iconHome = doQueSel(".icon-home");
const botonIniciar = doQueSel(".botonIniciar");
const botonDetener = doQueSel(".botonDetener");

// Funcion que realiza la delegacion
function delegar(e) {
  // Verificar qué elemento fue clicado dentro del contenedor
  if (e.target === container) {
    alert("Hiciste clic en el contenedor");
  } else if (e.target === titulo) {
    alert("Hiciste clic en el titulo");
  } else if (e.target === inputText) {
    alert("Hiciste clic en el input de texto");
  } else if (e.target === iconHome) {
    alert("Hiciste clic en el ícono de inicio");
  } else if (e.target === botonIniciar) {
    alert("Hiciste clic en el botón de iniciar");
  } else if (e.target === botonDetener) {
    alert("Hiciste clic en el botón de detener");
  }
}

// Asignar el listener al contenedor
container.addEventListener("click", delegar);
