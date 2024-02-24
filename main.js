const ficha = document.getElementById("Numero_de_Ficha");
const Nombre = document.getElementById("Nombre");

function validarficha(valor) {
  let paraficha = /^[A-Za-z]{3}_[0-9]{5}$/;
  if (!paraficha.test(valor)) {
    alert(
      "Ingrese un valor válido para el número de ficha (solo letras, máximo 10 caracteres)."
    );
  } else {
    alert("¡Correcto!");
  }
}

const bordeVerde = function (campo) {
  if (campo.classList.contains("borde-rojo")) {
    campo.classList.remove("borde-rojo");
  }
  campo.classList.add("borde-verde");
}

const bordeRojo = function (campo) {
  if (campo.classList.contains("borde-verde")) {
    campo.classList.remove("borde-verde");
  }
  campo.classList.add("borde-rojo");
}

const validarCampo = function (campo) {
  (letra.test(campo.value)) ? bordeVerde(campo) : bordeRojo(campo)
  // const expresionRegular = /(?=$|[\s.,;])+$/; // La expresión regular

  // function
  // if (expresionRegular.test(texto)) {
  //   alert("La dirección de correo electrónico es válida.");
  // } else {
  //   alert("La dirección de correo electrónico no es válida.");
  // }

  ficha.addEventListener("blur", () => {
    validarficha(ficha.value); // Pasa el valor del campo en lugar del elemento DOM completo
  });
// ficha.addEventListener("blur", () => {
//   expresionRegular(ficha.value); // Pasa el valor del campo en lugar del elemento DOM completo
// });

// // Función para validar número de ficha (solo números)
// function validarNumFicha() {
//   const regex = /^[0-9]+$/;
//   return regex.test(numFicha.value);
//   alert("hola")
// }

// // Función para validar nombre y apellidos (solo letras)
// function validarTexto(input) {
//   const regex = /^[A-Za-z]+$/;
//   return regex.test(input.value);
// }

// // Función para validar email
// function validarEmail() {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return regex.test(email.value);
// }

// // Función para validar teléfono (solo números)
// function validarTelefono() {
//   const regex = /^[0-9]{10}$/;
//   return regex.test(telefono.value);
// }

// // Mostrar error en el campo
// function mostrarError(input) {
//   input.classList.add('error-border');
//   input.nextElementSibling.textContent = 'Formato inválido';
// }

// // Quitar error del campo
// function quitarError(input) {
//   input.classList.remove('error-border');
//   input.nextElementSibling.textContent = '';
// }

// // Validar y aplicar estilos a cada campo
// if (!validarNumFicha()) {
//   mostrarError(numFicha);
// } else {
//   quitarError(numFicha);
// }

// if (!validarTexto(nombre)) {
//   mostrarError(nombre);
// } else {
//   quitarError(nombre);
// }

// if (!validarTexto(apellidos)) {
//   mostrarError(apellidos);
// } else {
//   quitarError(apellidos);
// }

// if (!validarEmail()) {
//   mostrarError(email);
// } else {
//   quitarError(email);
// }

// if (!validarTelefono()) {
//   mostrarError(telefono);
// } else {
//   quitarError(telefono);
// }

// if (!genero) {
//   mostrarError(document.querySelector('.control--row'));
// } else {
//   quitarError(document.querySelector('.control--row'));
// }

// if (!ciudad.value) {
//   mostrarError(ciudad);
// } else {
//   quitarError(ciudad);
// }

// if (habilidades.length < 3) {
//   mostrarError(document.querySelector('.control--checkbox'));
// } else {
//   quitarError(document.querySelector('.control--checkbox'));
// }