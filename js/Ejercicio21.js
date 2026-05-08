const capitales = {
  Argentina: "Buenos Aires",
  Brasil: "Brasilia",
  Chile: "Santiago",
  Colombia: "Bogotá",
  Peru: "Lima",
  Uruguay: "Montevideo",
  Bolivia: "Sucre",
  Paraguay: "Asunción",
};

const actualizarCapital = () => {
  const selectPais = document.getElementById("selectPais");
  const selectCapital = document.getElementById("selectCapital");
  const mensaje = document.getElementById("mensaje");

  const paisSeleccionado = selectPais.value;

  if (paisSeleccionado === "") {
    selectCapital.value = "";
    mensaje.innerText = "";
    return;
  }

  const capitalCorrespondiente = capitales[paisSeleccionado];
  selectCapital.value = capitalCorrespondiente;
  mensaje.innerText = `País seleccionado: ${paisSeleccionado} — Capital: ${capitalCorrespondiente}`;
  console.log(`País: ${paisSeleccionado} | Capital: ${capitalCorrespondiente}`);
};

document.getElementById("selectPais")
  .addEventListener("change", actualizarCapital);