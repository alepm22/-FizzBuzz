function generarfizzbuzz(n) {
  let mensaje = "";
  if(n % 3 == 0){
      mensaje = "fizz";
  }else{
      mensaje = n + "";
  }
  return mensaje;
}
export default generarfizzbuzz;