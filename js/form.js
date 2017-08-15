function addNewPacient(){
    var button = document.querySelector("#adicionar-paciente");
    button.addEventListener('click', (event) => {

        event.preventDefault();

        var form     = document.querySelector('#form-adiciona');
        var nome     = form.nome.value;
        var peso     = form.peso.value;
        var altura   = form.altura.value;
        var gordura  = form.gordura.value;

        createElementyPacient(nome,peso,altura,gordura);

        console.log(altura);
        console.log(peso); 
        console.log('Botão clicado');

     } );
}

function createElementyPacient(nome,peso,altura,gordura){
    var tabela           = document.querySelector('#tabela-pacientes'); 
    var pacientTr        = document.createElement('tr');
    var nomeTd           = document.createElement('td');
    var pesoTd           = document.createElement('td');
    var alturaTd         = document.createElement('td');
    var gorduraTd        = document.createElement('td');
    var imcTd            = document.createElement('td');

    nomeTd.textContent    = nome;
    pesoTd.textContent    = peso;
    alturaTd.textContent  = altura;
    gorduraTd.textContent = gordura;
    
    pacientTr.appendChild(nomeTd);
    pacientTr.appendChild(pesoTd);
    pacientTr.appendChild(alturaTd);
    pacientTr.appendChild(gorduraTd);
    pacientTr.appendChild(imcTd);
    
    tabela.appendChild(pacientTr);
  
    console.log(pacientTr);

}