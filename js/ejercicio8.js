const notas = [4, 2, 5, 6, 7, 9, 10, 8, 1, 3];

//a) Usamos forEach para solo recorrer el array
notas.forEach(n => console.log(n));

//b) Usamos filter para retornar un nuevo array con las notas aprobadas
const aprobadas = notas.filter(n => n >= 6);
console.log(aprobadas);

//c) Nuevamente filter pero esta vez para la desaprobadas
const desaprobadas = notas.filter(n => n < 6);
console.log(desaprobadas);

//d) En este usamos el reduce para sumar todas las notas y despues hacer el promedio
const promedio = notas.reduce((acum, n) => acum += n,0) / notas.length;
console.log(promedio);

//e) En este caso reutilizamos el array generado en el punto b y utilizamos el metodo length
console.log(aprobadas.length);
