/**
 * Dasafio 01
 * 
 * - Dado um array contendo os dias da semana, mostre um console com o dia atual.
 */


const daysWeek = ['domingo','segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'] 

let day = new Date().getDay()

console.log(`Hoje é ${daysWeek[day]}`)

/**
 * Desafio 02
 * 
 * - Dado um array de números, faça a soma de todos eles;
 */

const numbers = [15, 38, 56, 45, 68, 57, 12, 5]
let sum = 0

for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}
console.log(sum)

/**
 * Desafio 03 
 * 
 * - Dado um array que pode conter valores de tipos diferentes, mostre a soma de todos os números
 */

const crazyArray = [10, "Olá, mundo!", 20, true, { nome: "João", idade: 30 }, [1, 2, 3], 50]
let sumCrazyArrays = 0

for (let i = 0; i < crazyArray.length; i++) {
    if(typeof crazyArray[i] === "number") {
        sumCrazyArrays += crazyArray[i]
    }
}
console.log(sumCrazyArrays)

/**
 * Desafio 04
 * 
 * - Dado um array que pode conter valores de tipos diferentes, mostre qual é o valor que está no meio.
 */

const halfCrazyArray = parseInt(crazyArray.length / 2) + 1
console.log(crazyArray[halfCrazyArray])

/**
 * Desafio 05
 * 
 * - Dado um array de números, mostre a soma dos números ímpares.
 */

const oddNumbers = [24, 5, 98, 65, 23, 15, 7, 87, 88, 90, 55]
let sumOddNumbers = 0

for (let i = 0; i < oddNumbers.length; i++) {
    if(oddNumbers[i] % 2 !== 0) {
        sumOddNumbers += oddNumbers[i] 
    }
}
console.log(sumOddNumbers)

/**
 * Desafio 06
 * 
 * - Dado um array qualquer, mostre  um boolean indicando se encontrou um dos seguintes valores nesse array: null, undefined ou NaN;
 */


const crazyArray2 = [24, null, 5, 98, 65, 23, 15, 7, 87, 88, 90, 55]
let find = false

for(let i = 0; i < crazyArray2.length; i++) {
    let isNull = crazyArray2[i] === null
    let isUndefined = crazyArray2[i] === undefined
    let notNan = isNaN(crazyArray2[i])
    if (isNull || isUndefined || notNan) {
        find = true
        console.log(`Foi encontrado o valor: ${find}`)
    }
}

/**
 * Desafio 07
 * 
 * - Dado um array de nomes, mostre na tela todos os nomes de trás pra frente (o último item do array é o primeiro na página)
 */

const namesRandom = ['Karla', 'Karina', 'Carlos Cesar', 'Ana Cristina']
let namesRandomReverse = []

for (let i = namesRandom.length -1; i >= 0; i--) {
    namesRandomReverse = namesRandom[i]
    console.log(namesRandomReverse)
}

