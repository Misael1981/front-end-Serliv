/**
 * Desafio 01

    - Em uma tela contendo um input e um botão, permitir que o usuário digite o número e, ao clicar no botão, mostrar a tabuada desse número na tela (1 a 10)
*/
/**
 * Desafio 2
 * 
   - No exercício anterior, incluir um botão para limpar a tabuada previamente mostrada na tela e, sempre que mostrar a tabuada, limpar o conteúdo previamente inserido na tela.
 */

const input = document.getElementById('number')
const output = document.getElementById('output')

let tabuadaHTML = ''

function calcularTabuada () {
    
    limparTabuada()
    for(let i = 0; i <= 10; i++) {
        let valorTabuada = input.value * i
        tabuadaHTML += `${i} x ${input.value} = ${valorTabuada} <br>`
    }
    output.innerHTML = tabuadaHTML
}

function limparTabuada () {
    output.innerHTML = ''
    tabuadaHTML = ''
}
limparTabuada()

/**
 * Desafio 03
 * 
   - Escrever um programa para calcular a área de um triangulo base x altura / 2
*/

const base = document.getElementById('base')
const altura = document.getElementById('altura')

let outputArea = document.getElementById('outputArea')

function calcucarArea(){
    let baseValue = base.value
    let alturavalue = altura.value
    let area = (baseValue * alturavalue) / 2
    outputArea.innerHTML = `<p>${area}</p>`
}

/**
 * Desafio 04
 * 
   - Calcular a área de uma circunferência
 */

const raio = document.getElementById('raio')
const outputRaio = document.getElementById('outputRaio')

function calcucarAreaCirculo() {
    let raioValue = raio.value
    let area = Math.PI * raioValue * raioValue

    outputRaio.innerHTML = `A área da circunferência é: ${area}`
}









