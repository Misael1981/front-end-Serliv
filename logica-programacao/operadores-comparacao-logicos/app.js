/**
 * 01- Pedir para o usuário digitar dois números entre 0 e 10 e mostrar na tela um boolean indicando se a média é maior que 7.
 */

// let number1 = Number(prompt('Digite um número de 1 a 10'))
// let number2 = Number(prompt('Digite outro número de 0 à 10'))

// let media = ((number1 + number2) / 2)

// alert('A média dos números digitados é maior que 7? ' + (media > 7))

/**
 * 02- Pedir para o usuáro digitar 2 números entre 0 e 10 e mostrar na tela um booleano indicando se a média é menor ou igual a 4;
 * 
 * Porém, caso um único número seja 0, deve mostrar true;
 */

let number01 = Number(prompt('Digite um número de 1 a 10'))
let number02 = Number(prompt('Digite outro número de 0 à 10'))

let mediaNumber = (number01 + number02) / 2
alert('Amédia dos números digitados é: ' + mediaNumber)
alert('E essa média é menor ou igual 4, ou um dos números digitados foi 0: '+ (mediaNumber <= 4 || number01 === 0 || number02 === 0))
