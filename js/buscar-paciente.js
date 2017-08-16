var botao      =    document.querySelector('#buscar-pacientes');

botao.addEventListener('click',function(){
  var xhr = new XMLHttpRequest();
  
   xhr.open("GET","http://api-pacientes.herokuapp.com/pacientes");
   xhr.send();
   xhr.addEventListener("load",function(){
      var response   =  xhr.responseText;
      var pacientes  = JSON.parse(response);
      
      pacientes.forEach(function(paciente) {
        adicinaPacienteNaTabela(paciente)
      }, this);

   });
});