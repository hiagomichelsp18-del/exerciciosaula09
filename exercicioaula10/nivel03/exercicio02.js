let numero = 7;
let texto = "7";

console.log("numero === 7? " + (numero === 7));
console.log("numero === texto? " + (numero === texto));
console.log("numero === Number(texto)? " + (numero === Number(texto)));

// Deu false porque numero é um número e texto é uma string.