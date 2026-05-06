//Ejercicios
import { formatearMensajeSeleccion, loguearSeleccion } from './funciones24.js';

const form = document.querySelector('#form-lenguajes');
const display = document.querySelector('#valor-seleccionado');

form.addEventListener('change', (event) => {
    const seleccion = event.target.value;

    display.textContent = formatearMensajeSeleccion(seleccion);
    
    loguearSeleccion(seleccion);
});