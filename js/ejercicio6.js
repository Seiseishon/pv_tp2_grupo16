const edades = [10,11,33,18,25,20,27,40];

edades.forEach(num => console.log(num));

const promedio = edades.reduce((acum,num) => acum += num,0) / edades.length;

console.log(`El promedio de las edades es: ${promedio}`);

