const cantidad = parseInt(prompt("¿Cuántos números desea ingresar?"));
const numeros = [];
for (let i = 1; i <= cantidad; i++) {
    const num = parseInt(prompt(`Ingrese el número ${i}:`));
    numeros.push(num);
}
const promedio = numeros.reduce((acum, num) => acum += num, 0) / numeros.length;
console.log(`Números ingresados: ${numeros}`);
console.log(`Promedio: ${promedio}`);