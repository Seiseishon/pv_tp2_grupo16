export let transcribir = () => {
    let txtEntrada = document.getElementById('txtInput').value;
    document.getElementById('txtOutput').innerText = `${txtEntrada}`;
}

document.getElementById('txtInput').addEventListener('input',transcribir);