const nombres = ["Franco", "Mauricio", "Noel", "Sergio", "Nelson", "Pepe", "Felipe", "Milagros"];

nombres.forEach(nom => console.log(nom));

const nombreMasLargo = nombres => {
    let nombreLargo = nombres[0];

    for (let i = 1; i < nombres.length; i++) {
        const nombre = nombres[i];
        if (nombre.length > nombreLargo.length) {
            nombreLargo = nombre;
        }
    }

    return nombreLargo;
};


console.log(nombreMasLargo(nombres));
