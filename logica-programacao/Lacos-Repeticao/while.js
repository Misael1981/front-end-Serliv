/**
 * 01- Criar a Tabuada com While
 */

let i = 0
let n = 9

document.write('<h2>Início do Loop</h2>')

while (i < 100) {
    document.write(`${n} x ${i} = ${n * i} <hr>`)
    i++
}

document.write('<h2>Fim do Loop</h2>')


/**
 * 02- Criar a Tabuada com For
 */

let x = 8

document.write('<h2>Início do Loop com For</h2>')

for (let j = 0; j <= 100; j++) {
    document.write(`${x} x ${j} = ${x * j} <hr>`)
}

document.write('<h2>Fim do Loop</h2>')

/**
 * 02- Vamos simular dois dados (0 - 6)
 * 
 * Quantas vezes seria necessário jogar os dois dados até que os dois números saiam repetidos;
 * 
 * Usando o laços de repetição
 */

let dado1 = parseInt(Math.random() * 6 + 1)
let dado2 = parseInt(Math.random() * 6 + 1)

let contador = 1

while (dado1 !== dado2) {
    console.log(dado1, dado2)
    contador++
    dado1 = parseInt(Math.random() * 6 + 1)
    dado2 = parseInt(Math.random() * 6 + 1)
}

console.log(`Os dados foram jogados ${contador} vezes. E o número repetido foi o: ${dado1}`)

console.log('-------------------------')

dado1 = parseInt(Math.random() * 6 + 1)
dado2 = parseInt(Math.random() * 6 + 1)

contador = 1

do {
    console.log(dado1, dado2)
    contador++
    dado1 = parseInt(Math.random() * 6 + 1)
    dado2 = parseInt(Math.random() * 6 + 1)
}while (dado1 !== dado2)

console.log(`Os dados foram jogados ${contador} vezes. E o número repetido foi o: ${dado1}`)

console.log('-------------------------')

/**
 * 03- Mostrar todos os números pares entre dois valores:
 */


let numberRandom = parseInt(Math.random() * 100 + 1)
console.log(numberRandom)

let evenNumber = []

for (let i = 0; i <= numberRandom; i++) {
    if (i % 2 === 0) {
        evenNumber.push(i)
    }
}
console.log(evenNumber)

console.log('------------- While ------------')

// let a = 0
// numberRandom = parseInt(Math.random() * 100 + 1)
// let evenNumberWhile = []

// while (a <= numberRandom) {
//     a++
//     if(a % 2 === 0) {
//     evenNumberWhile.push(a)
//     }
// }
// console.log(evenNumberWhile)


