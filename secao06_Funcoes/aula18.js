//Funções construtoras

function Pessoa(n, s, raca = 'Humano'){
    //Atributos privados só conseguem fazer o uso dentro da função construtora
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    //Atributo privado pode ser acessado fora da função construtor
    this.raca = raca;

    //Métodos privados só conseguem fazer o uso dentro da função construtora
    let imprimir_dados = function(){
        console.log(`Nome: ${nome}, Idade: ${idade}, Peso; ${peso}, Altura: ${altura}, Sexo: ${sexo}, Raça: ${raca}`);
    }

    //Métodos públicos conseguem acessar fora da função construtora
    this.fazer_aniversario = function(){
        idade += 1;
        imprimir_dados();
    }

    this.getIdade = function(){
        return idade;
    }
}

//Instanciando um objeto
const angelina = new Pessoa("Angelina", "Feminino");
console.log(angelina);

console.log(angelina.peso); //Privado
console.log(angelina.raca); //Público

angelina.fazer_aniversario(); //Público

//Instanciar um novo objeto
const felicity = new Pessoa("Felicity", "Feminino");
console.log(felicity);

felicity.fazer_aniversario();
console.log(felicity.getIdade());

console.log(typeof(Pessoa));//function
console.log(typeof(felicity));//object