import generarFizzBuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("Debería retornar el mismo número para un número que no tiene reglas, por ejemplo, el 1", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
  });

  it("Debería retornar el mismo número para un número que no tiene reglas, por ejemplo, el 2", () => {
    expect(generarFizzBuzz(2)).toEqual("2");
  });
});
