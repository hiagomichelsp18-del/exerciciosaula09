let valorCompra = 80;
let clienteVip = false;

let freteGratis = valorCompra >= 100 || clienteVip;

console.log("Frete grátis?", freteGratis);
console.log("Vai pagar frete?", !freteGratis);