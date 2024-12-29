/**
 * Desadios 01
 * 
    - Contruir uma função para calcular a média
 */

// Minha solução
// const calcularMedia = arr => {
//     let totalumbers = 0
//     arr.forEach(number => {
//         totalumbers += number
//     })
//     const media = totalumbers /  arr.length
//     return media
// }
// console.log(calcularMedia())

(function() {
    function calcularMediaNotas() {
        let total = 0
        let qtd = arguments.length
        for(let i = 0; i < qtd; i++) {
            if(typeof arguments[i] !== "number") {
                throw Error("Only Number")
            }
            total += arguments[i]
        }
        const media = total / qtd
        return media
    }
    console.log(calcularMediaNotas(10, 6, 8, 10))
})()

/**
 * Desafio 02

    - Construir uma função para calcular IMC
    Requisitos:
        - IMC = peso / altura²
        - Deve retornar um único número
        - Deve gerar um erro se receber um parâmetro não número
        - Deve retornar erro caso não receba nenhum parâmetro
*/

function calcularIMC(peso, altura) {
    if(peso === "" || altura === "") {
        throw Error("Faltou um parâmetro")
    }
    let imc = peso / (altura ** 2)
    return imc
}

console.log(calcularIMC(60))