const ficha = document.getElementById("Numero_de_Ficha");

ficha.addEventListener('blur', () => {
  // alert(ficha.value)
  if (ficha.value == "") {
    alert("llene al campo ficha")
  } else {
    if (ficha.value == isInteger) {

    }

  }
});


document.getElementById("submitBtn").addEventListener("click", function (event) {
  var errors = false;

  // Limpiar errores anteriores
  var errorElements = document.querySelectorAll(".error");
  errorElements.forEach(function (element) {
    element.textContent = "";
  });

  // Validar Numero de Ficha
  var numeroDeFicha = document.getElementById("Numero_de_Ficha").value;
  if (!numeroDeFicha.match(/^[A-Za-z]{1,32}$/)) {
    document.getElementById("Numero_de_Ficha_error").textContent = "Ingrese un valor válido.";
    errors = true;
  }

  // Validar Nombre
  var nombre = document.getElementById("Nombre").value;
  if (!nombre.match(/^[A-Za-z]+$/)) {
    document.getElementById("Nombre_error").textContent = "Ingrese un valor válido.";
    errors = true;
  }

  // Validar Apellidos
  var apellidos = document.getElementById("Apellidos").value;
  if (!apellidos.match(/^[A-Za-z]+$/)) {
    document.getElementById("Apellidos_error").textContent = "Ingrese un valor válido.";
    errors = true;
  }

  // Validar Correo
  var email = document.getElementById("email").value;
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    document.getElementById("email_error").textContent = "Ingrese un correo válido.";
    errors = true;
  }

  // Validar Telefono
  var telefono = document.getElementById("telefono").value;
  if (!telefono.match(/^[0-9]{10}$/)) {
    document.getElementById("telefono_error").textContent = "Ingrese un número de teléfono válido (10 dígitos).";
    errors = true;
  }

  // Evitar que el formulario se envíe si hay errores
  if (errors) {
    event.preventDefault();
  }
});