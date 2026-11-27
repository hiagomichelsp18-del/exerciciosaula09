let minutos = 135;

let horas = (minutos - (minutos % 60)) / 60;
let minutosRestantes = minutos % 60;

console.log(horas + " h e " + minutosRestantes + " min");