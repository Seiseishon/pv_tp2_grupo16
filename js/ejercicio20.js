const login = document.querySelector('.login');
const name = document.querySelector('.name');
const lastName = document.querySelector('.last-name');
const lu = document.querySelector('.lu');

login.addEventListener('submit', (e) => {
    e.preventDefault();

    if (name.value == "" || lastName == "" || lu == "") {
        alert('Algunos campos estan nulos');
    }else{
        alert(`Los datos ingresados son: 
            Nombre: ${name.value} 
            Apellido: ${lastName.value} 
            Libreta Universitaria: APU${lu.value}`)
    }
})