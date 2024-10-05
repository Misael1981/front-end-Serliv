/**
 * 01- Pedir para o usuário digitar dois números e mostrar a mensagem "APROVADO!" caso a média seja maior que 4 e nenhuma nota seja igual à 0;
 * 
 * Mostre a mensagem "REPROVADO" caso a média seja menor ou iguak à 4 ou exista pelo menos uma no 0;
 * 
 * Caso usuário digite um número diferente de 0 e 10, corrija-o para o programa só dar prosseguimento com os valores ok.
 * 
 * De um aviso caso o usuário não digite números
 */

// let number1 = Number(prompt('Digite um número entre 1 e 10'))
// let number2 = Number(prompt('Digite outro número entre 1 e 10'))

// let condition1 =  number1 > 0 && number1 < 10
// let condition2 = number2 > 0 && number2 < 10

// let media = (number1 + number2) / 2

// if (isNaN(number1) || isNaN(number2)) {
//     alert('Apenas números são válidos!')
// } else if (condition1 && condition2) {
//     if (media > 4 && number1 !== 0 && number2 !== 0) {
//         alert('APROVADO!')
//     } else {
//         alert ('REPROVADO!')
//     }
// }else {
//     alert('Digite um número válido!')
// }


/**
 * 02- Crie uma varável e atribua a ela qualquer valor (qualquer mesmo, número, string, boolean, null ou qualquer outro que você conheça)
 * 
 * Utilizando a consdicional switch, mostre no console ou alert o tipo da variável
 * 
 * Tenha uma carta na manga para mostrar uma mensagem padrão caso você desconheça o tipo da varável.
 */

let minhaVariavel = null

switch (typeof minhaVariavel) {
    case 'number':
        alert("Number")
        break;
    case 'string':
        alert('String')
        break
    case 'symbol':
        alert('Symbol')
        break
    default: 
        alert('Nenhum dos tipos escolhidos')
}




