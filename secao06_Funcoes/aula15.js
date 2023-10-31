//Entendendo e usando as Arrow Functions

//Forma 1
function somar1(num1, num2){
    return num1 + num2;
}

console.log(somar1(4, 6));

//Forma 2
let somar2 = function(num1, num2){
    return num1 + num2;
}

console.log(somar2(5, 15));

//Forma 3

let somar3 = somar1;
console.log(somar3(6, 9));

//Arrow Functions
let somar4 = (num1, num2) => {
    return num1 + num2;
}

console.log(somar4(5, 5));

/*
Atenção:
-> Caso a sua função tenha apenas 1 parâametro de entrada e executa apenas uma linha,
   você pode simplificar ainda mais usando Arrow Functions
*/

let dobrar = valor => valor * 2;

console.log(dobrar(3));

function mensagem(){
    console.log('Evolua seu lado do Geek!');
}

mensagem();
const msg = () => console.log('Evolua seu lado do Geek!');
msg();