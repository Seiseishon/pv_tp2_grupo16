const kilometros = parseFloat(prompt("Ingrese los kilómetros recorridos:"));
const litros = parseFloat(prompt("Ingrese los litros de combustible consumidos:"));
const consumo = litros / kilometros;
console.log(`El consumo de combustible es: ${consumo.toFixed(2)} litros/km`);