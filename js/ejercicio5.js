const horas = 5;
const minutos = 10;

const convertirASeg = (h,m) => (h * 3600) + (m * 60);

console.log(`El total de segundos de ${horas} y ${minutos} es ${convertirASeg(horas,minutos)}`);
