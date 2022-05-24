function validarForm() {
  var arr = [
    "nombre",
    "apellido",
    "nacimiento",
    "documento",
    "numDocumento",
    "domicilio",
    "ciudad",
    "telefono",
    "mail",
    "formacion",
  ];

  for (let i = 0; i < arr.length; i++) {
    var elemento = document.getElementById(arr[i]);
    if (elemento.value == "") {
      alert("Por favor complete todos los campos");
      return false;
    }
  }

  let radios = document.getElementsByName("experiencia");
  let formCheck = false;

  for (let i = 0; !formCheck && i < radios.length; i++) {
    if (radios[i].checked) formCheck = true;
  }

  if (!formCheck) {
    alert("Por favor seleccione un valor en 'Experiencia'");
    return false;
  }
  alert("Formulario enviado correctamente!");
  return true;
}
