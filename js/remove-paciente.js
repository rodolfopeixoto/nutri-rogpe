var pacientes = document.querySelectorAll(".paciente");
var table = document.querySelector("table");

table.addEventListener('dblclick',function(event) {
    console.log(event);
    event.target.parentNode.remove();
  }); 