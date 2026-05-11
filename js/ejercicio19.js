const cambiarTexto = document.querySelector('.cambiar-texto');
const parrafoEj19 = document.querySelector('.parrafo-ej19');

cambiarTexto.addEventListener('click', () => {

    switch (cambiarTexto.innerHTML) {
        case 'Cambiar el texto':
            parrafoEj19.innerHTML = 'Estamos haciendo el trabajo practico número 2 en el grupo 16 con JAVASCRIPT, CSS, HTML.';
            cambiarTexto.innerHTML = 'Texto original';
            break;

        case 'Texto original':
            parrafoEj19.innerHTML = 'Estamos haciendo el trabajo practico numero 1 en el grupo 999 con python, css, xtml.';
            cambiarTexto.innerHTML = 'Cambiar el texto';
            break;
    };

});