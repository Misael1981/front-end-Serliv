const myArray = [1, 5, 10, "Olá", true];
const newArrayFiltered = myArray.filter((item) => typeof item === "number");
// console.log(newArrayFiltered); // [1, 5, 10]

const myArrayNumbers = [1, 5, 10, 20, 30, 40, 50];

// Diferança entre forEach e map
// forEach: não retorna nada, apenas executa uma função para cada item do array

let arrayForEach = myArrayNumbers.forEach((item) => item * 2);
let arrayMat = myArrayNumbers.map((item) => item * 2);

//console.log(arrayForEach, "Valor de retorno do forEach"); // undefined
//console.log(arrayMat, "valor de retorno do map"); // [2, 10, 20, 40, 60, 80, 100]

// indexOf: retorna o índice do primeiro elemento encontrado no array
// lastIndexOf: retorna o índice do último elemento encontrado no array
const myArrayIndexOf = [1, 5, 10, 20, 30, 40, 50, 5, 10];
const indexOf = myArrayIndexOf.indexOf(5); // 1
const lastIndexOf = myArrayIndexOf.lastIndexOf(5); // 7
//console.log(indexOf, lastIndexOf); // 1 7

// includes: retorna true se o elemento estiver no array, false caso contrário
const myArrayIncludes = [1, 5, 10, 20, 30, 40, 50];
const includes = myArrayIncludes.includes(5); // true
//console.log(includes); // true

// find e findIndex: retorna o primeiro elemento encontrado que satisfaça a condição, ou o índice do primeiro elemento encontrado que satisfaça a condição

const myArrayFind = [1, 5, 10, 20, 30, 40, 50];
const find = myArrayFind.find((item) => item > 10);
console.log(find); // 20

// Metodo Reduce

const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9];
const numerosUnicos = numeros.reduce((acumulador, valor) => {
  if (!acumulador.includes(valor)) {
    acumulador.push(valor);
  }
  return acumulador;
}, []);

console.log(numerosUnicos); // [1, 3, 4, 5, 8, 9]
