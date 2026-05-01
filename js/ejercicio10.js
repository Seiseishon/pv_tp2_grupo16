
const pedir_Numeros = (cantidad) => {
  const numeros = [];
  for (let i = 1; i <= cantidad; i++) {
    const num = parseInt(prompt(`Ingrese el número ${i}:`));
    numeros.push(num);
  }
  return numeros;
};

const calcular_Promedio = (numeros) => {
  const suma = numeros.reduce((acumulador, num) => acumulador + num, 0);
  return suma / numeros.length;
};

const ejercicio10 = () => {
  const cantidad = parseInt(prompt("¿Cuántos números desea ingresar?"));
  const numeros = pedir_Numeros(cantidad);
  const promedio = calcular_Promedio(numeros);
  alert(`Números ingresados: ${numeros.join(", ")}\nPromedio: ${promedio}`);
};
