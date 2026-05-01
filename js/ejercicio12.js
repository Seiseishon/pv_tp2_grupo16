
const esPar = (numero) => {
  if (numero % 2 === 0) {
    return `El número ${numero} es PAR.`;
  } else {
    return `El número ${numero} es IMPAR.`;
  }
};

const ejercicio12 = () => {
  const numero = parseInt(prompt("Ingrese un número:"));
  alert(esPar(numero));
};
