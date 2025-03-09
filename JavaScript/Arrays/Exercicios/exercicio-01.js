let produtos = [
  { nome: "Camiseta", preco: 29.99 },
  { nome: "Calça", preco: 59.99 },
  { nome: "Tênis", preco: 99.99 },
];

let produtosFiltrados = produtos.filter((produto) => produto.preco > 30);
console.log("Produtos acima de 30 reais: ", produtosFiltrados);

let nomes = produtos.map((produto) => produto.nome);
console.log(nomes);

let caros = produtos.every((produto) => produto.preco > 50);
console.log(caros);

let algumBarato = produtos.some((produto) => produto.preco < 30);
console.log(algumBarato);

produtos.forEach((index, produto, arr) => {
  console.log(produto, index);
});

/**
  Dado o array numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use o método filter()para criar um novo array contendo apenas os números pares.
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNumbers = numeros.filter((numero) => numero % 2 === 0);
console.log(evenNumbers);

/**
  Exercício 2: Dobrando os Valores

    - Dado o array numeros = [1, 2, 3, 4, 5], use o método map()para criar um novo array onde cada valor seja o dobro do valor original.
*/

const numbersTwo = [1, 2, 3, 4, 5];
let dobleNumbers = numbersTwo.map((number) => number * 2);
console.log(dobleNumbers);

/**
  Exercício 3: Verificando se todos são positivos

    - Dado o array numeros = [1, 2, 3, 4, 5], use o método every()para verificar se todos os números são positivos.
*/

const numbersThree = [1, 2, -3, 4, 5];
let allNumbersPositive = numbersThree.every((number) => number > 0);
console.log(allNumbersPositive);

/**
  Exercício 4: Verificando se algum é negativo

    - Dado o array numeros = [1, 2, 3, -4, 5], use o método some()para verificar se algum número é negativo.
*/

const numbersFour = [1, 2, 3, -4, 5];
let someNegativeNumber = numbersFour.some((number) => number < 0);
console.log(someNegativeNumber);

/**
  Exercício 5: Imprimindo os Nomes

Dado o array pessoas = [{ nome: "João", idade: 30 }, { nome: "Maria", idade: 25 }, { nome: "Pedro", idade: 40 }], use o método forEach()para imprimir o nome de cada pessoa.
*/

const people = [
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 40 },
];
people.forEach(({ nome }) => console.log(nome));
