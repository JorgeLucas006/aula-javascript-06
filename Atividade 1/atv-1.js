/*
1)      Criar 3 variáveis:

a) A primeira variável deverá conter o seu nome. 
b) A segunda variável deverá conter a sua idade.
c) Converter a segunda variável para string.
d) A terceira variável deverá conter a concatenação das duas variáveis anteriores.
e) Exibir no console a terceira variável.
f) Exibir no console o tamanho da terceira variável.
*/

var nome = "Jorge";
var idade = 19;

var txtIdade = idade.toString();

var texto = nome + txtIdade;

console.log(texto)
console.log(texto.length)