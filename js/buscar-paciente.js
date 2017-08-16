var botao      =    document.querySelector('#buscar-pacientes');

botao.addEventListener('click',function(){
  var xhr = new XMLHttpRequest();
  
   xhr.open("GET","http://api-pacientes.herokuapp.com/pacientes");
   xhr.send();
   xhr.addEventListener("load",function(){


      if(xhr.status == 200){

        var response   =  xhr.responseText;
        var pacientes  = JSON.parse(response);
        
        pacientes.forEach(function(paciente) {
          adicinaPacienteNaTabela(paciente)
        }, this);
  
      }else{
          console.log(xhr.status);
          console.log(xhr.responseText);
      }

   });
});