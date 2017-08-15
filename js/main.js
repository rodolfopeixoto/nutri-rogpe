
main();

function main(){ 
    setTitle();
    addNewPacient();
    calcIMC();
}

function setTitle(){
    var title       = document.querySelector(".title");
    title.textContent = 'ROGPEnutri';   
}

function calcIMC(){
    var pacientes         = document.querySelectorAll(".paciente");
    for( var i = 0; i < pacientes.length; i++){
        var tdPeso            = pacientes[i].querySelector(".info-peso");
        var tdAltura          = pacientes[i].querySelector(".info-altura");
        var tdIMC             = pacientes[i].querySelector(".info-imc");
        var peso              = tdPeso.textContent;
        var altura            = tdAltura.textContent;
        if(this.validationPeso(peso, tdIMC, pacientes[i]) !== false && this.validationAltura(altura, tdIMC, pacientes[i]) !== false){
          var imc              = peso / (Math.pow(altura,2));
          tdIMC.textContent    = imc.toFixed(2);
        }
        
    }
}


function validationPeso(peso, tdIMC,paciente){
    if(peso <= 0 || peso >= 700){ 
      tdIMC.textContent = 'Peso inválido: ' + peso + " kg";
      paciente.classList.add('paciente-invalido');      
    }else{
        return peso;
    }
}

function validationAltura(altura, tdIMC,paciente){
    if(altura <= 0 || altura >= 6.20){ 
      tdIMC.textContent = 'Altura inválida: ' + altura + " centímetros";
      paciente.classList.add('paciente-invalido');
      return altura = false;
    }else{
        return altura;
    }
}

