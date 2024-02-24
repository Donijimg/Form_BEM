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
