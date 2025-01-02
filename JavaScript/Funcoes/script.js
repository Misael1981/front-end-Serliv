/**
 * Desadios 01
 * 
    - Contruir uma função para calcular a média
        - Pode receber um ou mais valores numéricos
        - Deve retornar um único valor
        - Deve gerar um erro se receber um parâmetro não numérico
        - Deve retornar zero caso não receba nenhum valor
*/

// function calcularMedia(...valores) {
//     let somarValores = 0
//     valores.forEach(valor => {
//         somarValores += valor
//     })
//     let media = somarValores / valores.length
//     return console.log(media)
// }

// calcularMedia(5, 6, 10, 8)

function calcularMedia(...valores) {
    if (valores.length === 0) {
      return 0; // Retorna 0 se não houver valores
    }
  
    if (valores.some(valor => typeof valor !== 'number')) {
      throw new Error('Todos os argumentos devem ser números');
    }
  
    const soma = valores.reduce((total, valor) => total + valor, 0);
    const media = soma / valores.length;
    return media;
  }
  
  try {
    const resultado = calcularMedia(6.8, 6, 10, 8);
    console.log('A média é:', resultado);
  } catch (error) {
    console.error(error.message);
  }




/**
 * Desafio 02

    - Construir uma função para calcular IMC
    Requisitos:
        - IMC = peso / altura²
        - Deve retornar um único número
        - Deve gerar um erro se receber um parâmetro não número
        - Deve retornar erro caso não receba nenhum parâmetro

    Classificação IMC
IMC



Muito abaixo do peso 16 a 16,9 kg/m2

Abaixo do peso 17 a 18,4 kg/m2

Peso normal 18,5 a 24,9 kg/m2

Acima do peso 25 a 29,9 kg/m2

Obesidade Grau I 30 a 34,9 kg/m2

Obesidade Grau II 35 a 40 kg/m2

Obesidade Grau III maior que 40 kg/m2
*/

function calcularIMC(peso = 0, altura = 0, callback) {
    if(typeof peso !== 'number' || typeof altura !== 'number') {
        throw new Error('Os valores devem ser números')
    }
    let imc = peso / (altura ** 2)
    console.log(callback(imc.toFixed(2)))
    return imc
}

try {
    const resultadoIMC = calcularIMC(60, 1.65, classificarIMC)
    console.log(`O IMC so usuário é: ${resultadoIMC.toFixed(2)}`)
} catch(error) {
    console.error(error.message)
}

function classificarIMC(imc) {
    if (imc < 16) {
        return "Muito abaixo do peso";
      } else if (imc < 18.5) {
        return "Abaixo do peso";
      } else if (imc < 25) {
        return "Peso normal";
      } else if (imc < 30) {
        return "Sobrepeso";
      } else if (imc < 35) {
        return "Obesidade Grau I";
      } else if (imc < 40) {
        return "Obesidade Grau II";
      } else {
        return "Obesidade Grau III";
      }
}





















// function teste(callback) {
//     console.log('Executar ação de callback')
//     let value = `Este tipo é um: ${typeof callback}`
//     callback(value)
// }

// function testarCallback(value) {
//     console.log(value)
//     console.log('Esta daqui é a função de Callback')
// }

// teste(testarCallback)

