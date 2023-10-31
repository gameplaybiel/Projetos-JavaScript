//Evento inline

function mostrar_alerta(){
    alert('O botão foi clicado!');
}

function mudar_texto(elemento){
    elemento.innerHTML = 'Eu estou avisando...';
}

function mudar_cor(){
    //#0000 black
    let cores = ['green', 'red', 'magenta', 'purple', 'blue', 'yellow', 'black', 'orange'];

    const numero = Math.floor((Math.random() * cores.length) + 1);

    document.bgColor = cores[numero];

}

function escreveTexto(input){
    let span = document.getElementById('texto');

    span.innerHTML = input.value;
}