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

/**
  Exercício 6: Encontrando o Primeiro Número Par

Dado o array numeros = [1, 3, 5, 6, 7, 8, 9], use uma combinação de métodos para encontrar o primeiro número do array.
*/

const numbersSix = [1, 3, 5, 6, 7, 8, 9];
let firstNumberEven = numbersSix.find((number) => number % 2 === 0);
console.log(firstNumberEven);

/**
  Exercício 7: Verificando Idades Mínimas

  - Dado o array pessoas = [{ nome: "Ana", idade: 18 }, { nome: "Bruno", idade: 21 }, { nome: "Carla", idade: 16 }], use every()para verificar se todas as pessoas têm 18 anos ou mais.
*/

const pessoas = [
  { nome: "Ana", idade: 18 },
  { nome: "Bruno", idade: 21 },
  { nome: "Carla", idade: 16 },
];
const allMore18 = pessoas.every((pessoa) => pessoa.idade >= 18);
console.log(allMore18);

/**
  Exercício 8: Encontrando um Produto com Desconto

  - Dado o array produtos = [{ nome: "Camiseta", preco: 29.99, desconto: true }, { nome: "Calça", preco: 59.99, desconto: false }, { nome: "Tênis", preco: 99.99, desconto: true }], use some()para verificar se algum produto tem desconto.
*/

const products = [
  { nome: "Camiseta", preco: 29.99, desconto: true },
  { nome: "Calça", preco: 59.99, desconto: false },
  { nome: "Tênis", preco: 99.99, desconto: true },
];

products.some((product) => console.log(product.desconto === true));

/**
  Exercício 9: Imprimindo Informações de Filmes

  - Dado o array filmes = [{ titulo: "Vingadores", ano: 2019 }, { titulo: "Matrix", ano: 1999 }, { titulo: "Interestelar", ano: 2014 }], use forEach()para imprimir o título e o ano de cada filme no formato "Título (Ano)".
*/

const filmes = [
  { titulo: "Vingadores", ano: 2019 },
  { titulo: "Matrix", ano: 1999 },
  { titulo: "Interestelar", ano: 2014 },
];

filmes.forEach(({ titulo, ano }) =>
  console.log(`Filme: ${titulo} Ano de Lançamento: ${ano}`)
);

/**
  Exercício 10: Combinando filter() e map()

  - Dado o array produtos = [{ nome: "Camiseta", preco: 29.99 }, { nome: "Calça", preco: 59.99 }, { nome: "Tênis", preco: 99.99 }], use filter()para selecionar os produtos com preço acima de 50 e, em seguida, use map()para criar um novo array contendo apenas os nomes desses produtos.
*/

const productsExercise10 = [
  { nome: "Camiseta", preco: 29.99 },
  { nome: "Calça", preco: 59.99 },
  { nome: "Tênis", preco: 99.99 },
];

let newProducts = productsExercise10
  .filter(({ preco }) => preco > 50)
  .map(({ nome }) => nome);
console.log(newProducts);

/**
  Exercício 11: Verificação de Idade (every())

  - Dado o array pessoas = [{ nome: "Ana", idade: 25 }, { nome: "Bruno", idade: 30 }, { nome: "Carla", idade: 18 }], utilize every()para verificar se todas as pessoas no array têm idade igual ou superior a 18 anos.
*/

const peopleAge = [
  { nome: "Ana", idade: 25 },
  { nome: "Bruno", idade: 30 },
  { nome: "Carla", idade: 18 },
];
let isAnyMore18 = peopleAge.every(({ idade }) => idade >= 18);
console.log(isAnyMore18);

/**
  Exercício 12: Presença de Números Pares (some())

  - Dado o array numeros = [1, 3, 5, 8, 9], utilize some()para verificar se existe pelo menos um número por nenhum array.
*/

const numbersExercize12 = [1, 3, 5, 9];
let isAllNumbersEven = numbersExercize12.some((number) => number % 2 === 0);
console.log(isAllNumbersEven);

/**
  Exercício 13: Dobro dos Números (mapa())

  - Dado o array numeros = [2, 4, 6, 8, 10], utilize map()para criar um novo array contendo o dobro de cada número do array original.
*/

const numbersExercize13 = [2, 4, 6, 8, 10];
let numbersDouble = numbersExercize13.map((number) => number * 2);
console.log(numbersDouble);

/**
  Exercício 14: Filtragem de Palavras Longas (filter())

  - Dado o array palavras = ["casa", "carro", "bicicleta", "computador", "livro"], utilize filter()para criar um novo array contendo apenas as palavras com mais de 5 letras.
*/

const words = ["casa", "carro", "bicicleta", "computador", "livro"];
let wordSearch = words.filter((word) => word.length > 5);
console.log(wordSearch);

/**
  Exercício 15: Impressão de Nomes (forEach())

  - Dado o array alunos = ["Alice", "Bob", "Charlie", "David"], utilize forEach()para imprimir no console o nome de cada aluno, precedido da frase "Aluno:".
*/

const students = ["Alice", "Bob", "Charlie", "David"];
students.forEach((student, i) => console.log(`Aluno ${i + 1}: ${student}`));
