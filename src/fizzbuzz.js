function generarfizzbuzz(n) {

  let mensaje = "";
  if(n % 3==0){
      mensaje = "fizz";
  
  }else {
      if(n % 5==0){
          mensaje = "Buzz";
      }else{
          mensaje = n +"";
      }
      }
      return mensaje;
  }
    export default generarfizzbuzz;