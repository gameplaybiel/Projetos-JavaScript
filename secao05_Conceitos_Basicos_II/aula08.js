const idade = 19;
const nome = "Geek";

function soma_3(idade){
    return idade + 3;
}

console.log(nome + ' tem ' + idade + ' anos');

//Template Strings
console.log(`${nome} tem ${soma_3(idade)} anos`);

/* 
Em templte strings, usa-se a crase, e não aspas simples ou acento agudo

Não é '
Não é á
É `

*/