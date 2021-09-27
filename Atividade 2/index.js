/*
1)      Criar um arquivo javascript para:

a) Exibir no console a posição da letra h na string txt.
b) Exibir no console a palavra bananas, use o método slice.
c) Substituir a palavra "Olá" pela palavra "Bem vindo", e exibir no console.
d) Converter o texto em letras maiúsculas e exibir no console.
e) Converter o texto em letras minúsculas e exibir no console.
f) Exibir no console o tamanho da string.
g) Concatenar as strings e exibir no console.
h) Ordenar o array de frutas em ordem alfabética e exibir no console
i) Exibir no console o array de frutas, Remover Banana e Kiwi do array de frutas e exibir no console o novo array.
j) Exibir no console o array de frutas, adicionar Uva, Caju e Kiwi no array de frutas e exibir no console o novo array.
k) Exibir no console o array de frutas, adicionar Pera e Manga no início do array de frutas, remover  o último item do array e exibir no console o novo array.
*/

let txt = "abcdefghiklm";
let posicao = txt.search("h")

console.log("A) "+posicao)

let banana = "Posso comer bananas o dia todo";
let buscar = banana.slice(12,19)

console.log("B) "+buscar)

let ola = "Olá, Mundo";
let recolocar = ola.replace("Olá", "Bem vindo")

console.log("C) "+recolocar)

let maiusculas = ola.toUpperCase()
let minúsculas = ola.toLowerCase()

console.log("D) "+maiusculas)
console.log("E) "+minúsculas)

let tamanho = banana.length;

console.log("F) "+tamanho)

let str1 = "Hello ";
let str2 = "World!";

let conca = str1.concat(str2);

console.log("G) "+conca)

const fruits = ["Banana", "Orange", "Apple", "Kiwi"];

console.log("H) "+fruits.sort())

let newFruits = ["Banana", "Orange", "Apple", "Kiwi"];
newFruits.shift();
newFruits.pop();

console.log("I) "+newFruits);

let novasFrutas = ["Banana", "Orange", "Apple"];
novasFrutas.push("Uva","Caju","Kiwi");

console.log("J) "+novasFrutas);

novasFrutas.unshift("Pera","Manga");
novasFrutas.pop();

console.log("K) "+novasFrutas);