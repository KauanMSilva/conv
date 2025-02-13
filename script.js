console.log('Hello World');

var idade = 22;
var idade = "vinte e dois";  // Não recomendavel
console.log(idade);

let nome = 'Ariel';  // let Pode ser alterado depois
nome = "Eduardo";
nome = "Carlos";
console.log('nome');

const cargo = "Professor"; // const Não pode ser alterado
console.log(cargo);

// Exercicio 3 

const nome_ = "Kauan MS";

let idade_ = 26;

let mensagem = `Meu Nome é ${nome_}, tenho ${idade_} anos.`;

console.log(mensagem);

// Tipos primitivos 

console.log(typeof nome_);
console.log(typeof idade_);

let maiorDeIdade = true;
let TemFilhos = false;

// variavel indefinida

let tamanho;
console.log(tamanho);

let vazio = null;
console.log(vazio);

// Exercicio 3 - tipos primitivos

let a = 10;
let b = "Kauan";
let c = "10";
let d = 20;

console.log("a + b", a + b);
console.log("a + c", a + c);
console.log("a + d", a + d);

let n1 = "42.5";
n1 = Number(n1);
console.log(n1);

console.log(parseInt(n1));
console.log(parseFloat(n1));

