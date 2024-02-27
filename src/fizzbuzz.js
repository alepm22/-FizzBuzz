export function generarFizzBuzzNumero(numero) {
  const esMultiploDe3 = numero % 3 === 0;
  const esMultiploDe5 = numero % 5 === 0;

  if (esMultiploDe3 && esMultiploDe5) {
    return "FizzBuzz";
  } else if (esMultiploDe3) {
    return "Fizz";
  } else if (esMultiploDe5) {
    return "Buzz";
  } else {
    return numero.toString();
  }
}

export function generarSecuenciaFizzBuzz(limite) {
  let resultado = [];

  for (let i = 1; i <= limite; i++) {
    resultado.push(generarFizzBuzzNumero(i));
  }

  return resultado.join(', ');
}
