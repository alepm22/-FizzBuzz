function generarfizzbuzz(n) {
  let mensaje = "";
  
  if (n % 3 === 0) {
    mensaje += "Fizz";
  }

  if (n % 5 === 0) {
    mensaje += "Buzz";
  }

  return mensaje || n.toString();
}

export default generarfizzbuzz;
