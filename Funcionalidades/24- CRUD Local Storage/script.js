"use strict";
// Variable globales
let datos = [];

// Referencias elementos del DOM
const doQueSel = (selector) => document.querySelector(selector);
const contenedorGeneral = doQueSel(".contenedorGeneral");
const botonRegistrar = doQueSel(".botonRegistrar");
const botonMostrar = doQueSel(".botonMostrar");
const botonEliminar = doQueSel(".botonEliminar");
const spanResultados = doQueSel(".spanResultados");
const botonEditar = doQueSel(".botonEditar");

// Definicion de Funciones

function configurarLocalStorage() {
  // Verifico compatibilidad
  if (typeof localStorage === "undefined") {
    console.log("Local storage no disponible...");
  } else {
    console.log("Local storage disponible...");
    // Verifio existencia de variable que almacena datos
    if (localStorage.getItem("datosLs") !== null) {
      console.log("Variable datosLs existe...");
    } else {
      console.log("Variable datosLs no existe...");
      // creo la variable datosLs
      localStorage.setItem("datosLs", JSON.stringify([]));
    }
  }
}

// Delegacion de eventos para elementos del Contenedor
function operacionesLocalStorage(e) {
  // Registro de Usuarios
  if (e.target === botonRegistrar) {
    let usuario = {
      id: prompt("Ingresa Id: "),
      nombre: prompt("Ingresa Nombre: "),
      edad: prompt("Ingresa Edad: "),
    };

    datos.push(usuario);
    localStorage.setItem("datosLs", JSON.stringify(datos));
    alert("Usuario Registrado...");

    // Mostrar Usuarios en pantalla
  } else if (e.target === botonMostrar) {
    let resultados = "";
    datos = JSON.parse(localStorage.getItem("datosLs"));
    datos.forEach((usuario) => {
      resultados += `
      <p>
      Id: ${usuario.id}<br>
      Nombre: ${usuario.nombre}<br>
      Edad: ${usuario.edad}<br>
      </p>
      `;
    });

    spanResultados.innerHTML = resultados;

    // Eliminar Usuarios del Local storage
  } else if (e.target === botonEliminar) {
    const idAEliminar = prompt("Ingrese el ID del usuario a eliminar:");

    datos = JSON.parse(localStorage.getItem("datosLs"));
    const datosActualizados = datos.filter(
      (usuario) => usuario.id !== idAEliminar
    );

    if (datos.length === datosActualizados.length) {
      alert("No se encontró ningún usuario con ese ID");
    } else {
      localStorage.setItem("datosLs", JSON.stringify(datosActualizados));
      datos = datosActualizados;
      alert("Usuario eliminado exitosamente");
    }

    // Agregar nuevo caso para editar usuarios
  } else if (e.target === botonEditar) {
    const idAEditar = prompt("Ingrese el ID del usuario a editar:");

    datos = JSON.parse(localStorage.getItem("datosLs"));
    const usuarioIndex = datos.findIndex((usuario) => usuario.id === idAEditar);

    if (usuarioIndex === -1) {
      alert("No se encontró ningún usuario con ese ID");
    } else {
      // Solicitar nuevos datos
      const nuevosDatos = {
        id: idAEditar,
        nombre: prompt("Ingresa nuevo Nombre:", datos[usuarioIndex].nombre),
        edad: prompt("Ingresa nueva Edad:", datos[usuarioIndex].edad),
      };

      // Actualizar el usuario
      datos[usuarioIndex] = nuevosDatos;
      localStorage.setItem("datosLs", JSON.stringify(datos));
      alert("Usuario editado exitosamente");
    }
  }
}

// PROGRAMA PRINCIPAL

// Configuro Local Storage
configurarLocalStorage();

// Detecto clic en elementos del Contenedor General
contenedorGeneral.addEventListener("click", operacionesLocalStorage);
