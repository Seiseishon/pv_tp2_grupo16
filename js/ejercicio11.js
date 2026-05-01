
const calcularConsumoPorKm = (litros, kilometros) => litros / kilometros;

const ejercicio11 = () => {
  const kilometros = parseFloat(prompt("Ingrese los kilómetros recorridos:"));
  const litros = parseFloat(prompt("Ingrese los litros de combustible consumidos:"));
  const consumo = calcularConsumoPorKm(litros, kilometros);
  alert(`Consumo por kilómetro: ${consumo.toFixed(2)} litros/km`);
};
