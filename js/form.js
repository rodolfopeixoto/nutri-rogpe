var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form        = document.querySelector("#form-adiciona"); 
    var paciente    = obtemPacienteDoFormulario(form); 
    var erros       = validaPaciente(paciente);

    if(erros.length > 0){
      exibeMensagensDeErro(erros);
      return;
    }

    adicinaPacienteNaTabela(paciente);

    form.reset();

    var ul = document.querySelector('#mensagem-erro');
    ul.innerHTML = '';
    
});


function adicinaPacienteNaTabela(paciente){ 
    var pacienteTr  = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}


function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}


function validaPaciente(paciente){
 
  var errors = [];
  if(paciente.nome === '') errors.push('Nome vazio');
  if(paciente.gordura.length === 0) errors.push('Gordura vazia');
  if(paciente.peso.length === 0) errors.push('Peso vazia');
  if(paciente.altura.length === 0) errors.push('Altura vazia'); 
  if(!validaPeso(paciente.peso))   errors.push("Peso inválido");
  if(!validaAltura(paciente.altura))  errors.push("Altura inválida");

  return errors;
}


function exibeMensagensDeErro(erros){
    var ul          = document.querySelector('#mensagem-erro');
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li          = document.createElement('li');
        li.textContent  = erro;
        ul.appendChild(li);
    });
}