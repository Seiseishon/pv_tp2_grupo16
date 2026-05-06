import { generarColorAleatorio, notificarCambio } from './funciones25.js';

const boton = document.querySelector('#btn-cambiar-color');
const displayColor = document.querySelector('#valor-seleccionado');
const cuerpoPagina = document.body;


boton.addEventListener('click', () => {
    const nuevoColor = generarColorAleatorio();

    cuerpoPagina.style.backgroundColor = nuevoColor;
    displayColor.textContent = nuevoColor;

    notificarCambio(nuevoColor);
});