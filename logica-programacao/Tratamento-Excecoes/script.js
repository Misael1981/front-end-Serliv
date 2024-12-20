/**
 * Desafio 01

    1. Criar um arquivo Js com duas funções:
        - calcularAreaRetangulo;
        - calcularAreaTriangulo;
    2. Lançar uma exceção caso os parâmetros estejam incorretos;
    3. Interceptar o erro na execução das funções;
*/

function calcularAreaRetangulo(alt, larg) {
    if(typeof alt !== "number" || typeof larg !== "number") {
        throw new Error('Obrigatório o uso de números')
    }
    return alt * larg
}

function calcularAreaTriangulo(alt, larg) {
    if(typeof alt !== "number" || typeof larg !== "number") {
        throw new Error('Obrigatório o uso de números')
    }
    return alt * larg / 2
}

try {
    console.log(calcularAreaRetangulo(5, 5))
    console.log(calcularAreaTriangulo(5, 2))
} catch(error) {
    console.error('Houve um erro', error.message)
} finally {
    console.log("Fim do Programa")
}
