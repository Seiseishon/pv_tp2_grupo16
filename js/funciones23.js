export const manejarInput = (evento) => {
    const texto = evento.target.value;
    const parrafo = document.querySelector("#resultado");

    parrafo.textContent = texto;

    if (texto.length > 20) {
        parrafo.style.backgroundColor = "#f0796e"; 
    } else {
        parrafo.style.backgroundColor = "#a1ffa9"; 
    }
};