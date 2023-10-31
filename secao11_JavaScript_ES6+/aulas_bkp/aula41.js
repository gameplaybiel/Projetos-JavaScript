//Operadores rest e spread (Juntar/Espalhar)

//function total(...precos){
//    let total = 0;
//    precos.forEach(p => total += p);
//    return total;
//}

//console.log(total(23.44, 22, 3.45, 5.67).toFixed(2));
//console.log(total(23, 67));
//console.log(total(3, 6, 77));

//frutas = ['Manga', 'Uva', 'Melância'];
//frutas2 = ['Abacate', 'Morango', 'Jaca'];

//let compras = [...frutas, ...frutas2];
//console.log(compras);

alunos = ['Paula', 'Felipe', 'Fernanda'];
novo = 'Joana';

//alunos.push(novo);
let todos = [...alunos, novo];
console.log(todos);