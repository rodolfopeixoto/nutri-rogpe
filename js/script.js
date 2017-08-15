var title       = document.querySelector(".title");
title.textContent = 'ROGPEnutri';

function calcIMC(){
    var paciente         = document.querySelector("#primeiro-paciente");
    var tdPeso           = paciente.querySelector(".info-peso");
    var tdAltura         = paciente.querySelector(".info-altura");
    var tdIMC            = paciente.querySelector(".info-imc");
    var peso             = tdPeso.textContent;
    var altura           = tdAltura.textContent;
    if(this.validationPeso(peso, tdIMC) !== false && this.validationAltura(altura, tdIMC) !== false){
      var imc              = peso / (Math.pow(altura,2));
      tdIMC.textContent    = imc;
    }
    
}


function validationPeso(peso, tdIMC){
    if(peso <= 0 || peso >= 700){ 
      tdIMC.textContent = 'Peso inválido: ' + peso + " kg";
      return peso = false;
    }else{
        return peso;
    }
}

function validationAltura(altura, tdIMC){
    if(altura <= 0 || altura >= 6.20){ 
      tdIMC.textContent = 'Altura inválida: ' + altura + " centímetros";
      return altura = false;
    }else{
        return altura;
    }
} 

calcIMC();