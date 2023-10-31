//Funções Closures

//let variavel = 'global'; //Pode ser acessada globalmente no nosso projeto

//function imprimir(){
//    console.log(variavel);
//}

//function outra(){
//    let variavel = 'local'; //Pode ser acessada localmente no bloco/contexto
//    imprimir();
//    console.log(variavel); //local
//}

//outra(); //global

//Novo exemplo
let variavel = 'global';

function externa(){
    let variavel = 'local';

    function interna(){
        return variavel; //local
    }

    return interna;
}

let executa = externa();
console.log(executa()); //local

/*
Estamos estudando Closures (contexto léxico de uma função)

Linguagem de programação chamada Clajure
*/