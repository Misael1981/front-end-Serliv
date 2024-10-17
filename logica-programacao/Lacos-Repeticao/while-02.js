let n = 5

for(let i = 1; i <= 10; i++) {
    document.write(`${n} x ${i} = ${n * i} <br>`)
    if(i % 10 === 0) {
        document.write(`<hr>`)
    }
} 

/**
   02- Mostre na tela todos os anos a partir de 1004 até o ano de 2024, pulando de 4 em 4 anos;
 */

for(let i = 1024; i <= 2024; i +=4 ) {
    document.write(i, `<br>`)
}

/**
 * 03- Jogue dois dados quantas vezes forem necessárias ate que a soma dos pontos dos dados seja par por 10 vezes. 
 * 
 * - Quantas vezes os dados foram jogados?
*/

let dadosJogados = 0
let dadosPar = 0

while (true) {
    let dado1 = parseInt(Math.random() * 6 + 1)
    let dado2 = parseInt(Math.random() * 6 + 1)

    console.log(dado1, dado2, dadosJogados, dadosPar)
    dadosJogados++

    if ((dado1 + dado2) % 2 === 0) {
        dadosPar++
    }
    if (dadosPar >= 10) {
        break
    }
}

console.log(`Quantas vezes os dados foram jogados: ${dadosJogados}`)



