import { generarSecuenciaFizzBuzz } from "./fizzbuzz.js";

document.getElementById("fizzbuzz-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const numeroInput = document.getElementById("numero");
  const secuenciaDiv = document.getElementById("secuencia-div");

  if (!numeroInput) {
    console.error("Elemento con id 'numero' no encontrado.");
    return;
  }

  if (!secuenciaDiv) {
    console.error("Elemento con id 'secuencia-div' no encontrado.");
    return;
  }

  const numeroIngresado = parseInt(numeroInput.value);

  if (isNaN(numeroIngresado)) {
    console.error("Ingrese un número válido.");
    return;
  }

  const secuenciaFizzBuzz = generarSecuenciaFizzBuzz(numeroIngresado);

  secuenciaDiv.innerHTML = secuenciaFizzBuzz;
});
