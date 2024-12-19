/**
 * Desafio 01

    - Em uma tela contendo um input e um botão, permitir que o usuário digite o número e, ao clicar no botão, mostrar a tabuada desse número na tela (1 a 10)
*/
/**
 * Desafio 2
 * 
   - No exercício anterior, incluir um botão para limpar a tabuada previamente mostrada na tela e, sempre que mostrar a tabuada, limpar o conteúdo previamente inserido na tela.
 */

const input = document.querySelector('#input')
const output = document.querySelector('#output')

let tabuadaHTML = ''

function calcucarTabuada()  {
  inputValue = input.value
  limparTabuada()
  for(let i = 1; i <= 10; i++) {
    tabuadaHTML += `${i} x ${inputValue} = ${i * inputValue} <br>`
  }
  
  output.innerHTML = tabuadaHTML
}

function limparTabuada() {
  tabuadaHTML = ''
  output.textContent = ''
  input.value = ''
}



/**
 * Desafio 03
 * 
   - Escrever um programa para calcular a área de um triangulo base x altura / 2
*/

const inputBase = document.querySelector('#base')
const inputAltura = document.querySelector('#altura')
const outputTriangulo = document.querySelector('.outputTrangulo')

function calcularArea() {
  const valueInputBase = inputBase.value
  const valueInputAltura = inputAltura.value

  let area = (valueInputAltura * valueInputBase) / 2

  outputTriangulo.innerHTML = `A área do tringulo de base: ${valueInputBase} e altura: ${valueInputAltura} é: ${area}`
}

/**
 * Desafio 04
 * 
   - Calcular a área de uma circunferência
 */

const inputArea = document.querySelector('#area')
const outputArea = document.querySelector('.outuptCirculo')

function calcularAreaCirculo() {
  valueInputArea = inputArea.value

  let area = Math.PI * (valueInputArea ** 2)
  outputArea.innerHTML = `A área do cículo é ${area}`
}

/**
 * Desafio 05
    - Em uma tela há um input (raio) e uma tag <output>. Há também 2 botôes, cada um com uma funcionalidade diferente, a saber:
      - Obter o raio via prompot e mostrar a área em output;
      - Obter o raio via input e mostrar a área em output;
*/

const inputAreaParams = document.querySelector('#areaParams'); // Verifique se o ID está correto
const outputParamns = document.querySelector('#outputParamns'); // Verifique se o ID está correto

function calcularAreaDoPrompt() {
  const raio = parseFloat(prompt('Digite um número'));
  mostrarRaio(raio);
}

function calcularAreaDoInput() {
  const raio = parseFloat(inputAreaParams.value);
  mostrarRaio(raio);
}

function mostrarRaio(raio) {
  let area = Math.PI * (raio ** 2);
  outputParamns.textContent = `A área é ${area}`; // Usando textContent para evitar problemas com HTML
}

/**
 * Desafio 06
  - Em uma tela há um input (raio) e uma tag <output>. Há tmabém 4 botões, cada um com uma funcionalidade diferente, a saber:
    - Obter o raio via prompt e mostrar num alert;
    - Obter o raio via prompt e mostrar num output;
    - Obter o raio via input e mostrar num alert;
    - Obter o raio via input e mostrar num output;
*/

const inputReturn = document.querySelector('#areaReturn')
const outputReturn = document.querySelector('#outputReturn')

function calcularAreaDoPromptAlert() {
  let raio = parseFloat(prompt('Digite o raio'))
  let message = mostrarAreaReturn(raio)
  alert(message)
}

function calcularAreaDoInputAlert() {
  let raio = inputReturn.value
  let message = mostrarAreaReturn(raio)
  alert(message)
}

function calcularAreaDoPromptOutput() {
  let raio = parseFloat(prompt('Digite o raio'))
  let message = mostrarAreaReturn(raio)
  outputReturn.innerHTML = message
}

function calcularAreaDoInputOutput() {
  let raio = inputReturn.value
  let message = mostrarAreaReturn(raio)
  outputReturn.innerHTML = message
}

function mostrarAreaReturn(raio) {
  const PI = Math.PI
  let area = PI * raio ** 2
  return `A área da circunferência do raio: ${raio} é: ${area}`
}

/**
 * Desafio 07
  - Crie uma função chamada somada "somar()" que receba dois números e retorne a soma:
 */


function somar(num1, num2) {
  return num1 + num2
}

console.log(somar(2, 7))

/**
 * Desafio 08
  - Crie uma função chamada "calcular()" que receba dois números e uma string com um dos seguintes valores: +, -, * ou /;
  - Retorne o valor da operação dependendo do símbolo passado por parâmetro.
 */

function calcular(num1, num2, op) {
  switch(op) {
    case "+":
      return num1 + num2
    case "-":
      return num1 - num2
    case "*":
      return num1 * num2
    case "/":
      return num1 / num2
    default:
      return 'Operador inválido'
  }
}
console.log(calcular(2, 2, '%'))

/**
 * Desafio 09
  - Crie uma função que retorne um booleano indicando se um número é par:
 */

function isOdd(num) {
  return num % 2 === 0 
}
console.log(isOdd(4))

/**
 * Desafio 10
  Crie uma função que retorne um booleano indicando se um ano é bissexto;
 */


function ehBissexto(ano) {
  return ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)
}

console.log(ehBissexto(2028))
 









