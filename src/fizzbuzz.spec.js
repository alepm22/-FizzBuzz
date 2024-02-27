import { generarFizzBuzzNumero, generarSecuenciaFizzBuzz } from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("Deberia retornar el mismo numero para uno que no tiene reglas por ejemplo el 1", () => {
    expect(generarFizzBuzzNumero(1)).toEqual("1");
  });
  it("Deberia retornar el mismo numero para uno que no tiene reglas por ejemplo el 2", () => {
    expect(generarFizzBuzzNumero(2)).toEqual("2");
  });
  it("Deberia mostrar la palabra fizz para el numero 3", () => {
    expect(generarFizzBuzzNumero(3)).toEqual("Fizz");
  });
  it("Deberia mostrar la palabra fizz para los multiplos del numero 3", () => {
    expect(generarFizzBuzzNumero(6)).toEqual("Fizz");
  });
  it("Deberia mostrar la palabra Buzz para los multiplos del numero 5", () => {
    expect(generarFizzBuzzNumero(5)).toEqual("Buzz");
  });
  it("Deberia mostrar la palabra Buzz para los multiplos del numero 10", () => {
    expect(generarFizzBuzzNumero(10)).toEqual("Buzz");
  });
  it("Deberia mostrar la palabra FizzBuzz para los multiplos del numero 3 y 5", () => {
    expect(generarFizzBuzzNumero(15)).toEqual("FizzBuzz");
  });  
});
