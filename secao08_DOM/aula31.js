//O que é a DOM?

let a = document.querySelector('.link');
//console.log(a.innerText);

//console.log(a.parentNode);

//console.log(a.parentNode.parentNode);//HTML

//console.log(a.parentNode.parentNode.parentNode);//#document

//console.log(a.parentNode.parentNode.parentNode.parentNode);//Null

//console.log(a.parentNode.parentNode.childNodes); //NodeList

//console.log(a.parentNode.parentNode.firstChild);//head

//console.log(a.firstChild);//#text

//console.log(a.parentNode.parentNode.lastChild);//body.corpo

//console.log(a.parentNode.parentNode.firstChild.nextSibling.firstChild);

console.log(a.parentNode.parentNode.firstChild.nextSibling.firstChild.previousSibling);