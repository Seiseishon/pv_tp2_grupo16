const login = document.querySelector('.login');
const inputName = document.querySelector('.input-name');
const lastName = document.querySelector('.input-last-name');
const lu = document.querySelector('.input-lu');

login.addEventListener('submit', (e) => {
    e.preventDefault();

    if (inputName.value == "" || lastName.value == "" || lu.value == "") {
        alert('Algunos campos estan nulos');
    }else{
        alert(`Los datos ingresados son: 
            Nombre: ${inputName.value} 
            Apellido: ${lastName.value} 
            Libreta Universitaria: APU${lu.value}`)
    }
})