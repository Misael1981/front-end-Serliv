/**
 * Dasafio 01
 * 
 * - Dado o seguinte objeto 'carro':
 * - Mostre a seguinte mensagem na tela: "O carro MODELO ANO faz em média XXX Km/l de gasolina"
*/

const carro = {
    modelo: 'Uno',
    ano: 2023,
    km: 10000,
    combustivel: 'gasolina',
    litrosConsumidos: 625
}
console.log(`"O carro ${carro.modelo} ${carro.ano} faz em média ${carro.litrosConsumidos / carro.km} Km/l de ${carro.combustivel}"`);

/**
 * Desafio 02
 * 
 * - Adicione a propriedade "marca" ao objeto carro e mostre no console a seguinte frase: "O carro MARCA MODELO ANO faz em média XXX Km/l de gasolina"
 */

carro.marca = "Fiat"
console.log(`"O carro ${carro.marca} ${carro.modelo} ${carro.ano} faz em média ${carro.litrosConsumidos / carro.km} Km/l de ${carro.combustivel}"`);

/**
 * Desafio 03 
 * 
 * - Dados os objetos "pessoa" e "endereco"
 * - Adicione uma propriedade chamada endereço em pessoa que "aponte" para o objeto 'endereco'; 
 */

const pessoa = {
    nome: 'João',
    sobrenome: 'Fagundes'
}
const endereco = {
    rua: 'Rua das Tulias',
    numero: 302
}

pessoa.endereco = endereco
console.log(pessoa)

/**
 * Desafio 04
 * 
 * - Mostre na tela onde João mora;
 */

console.log(`${pessoa.nome} mora na ${pessoa.endereco.rua} ${pessoa.endereco.numero}`)


/**
 * Desafio 05
 * 
 * - Mostre no console todas as propriedades do objeto "pessoa";
 */

for(let prop in pessoa) {
    console.log(prop)
}

/**
 * Desafio 06
 * 
 * - Mostre no console, todas as propriedades e seus respectivos valores do "pessoa";
 */

for (let prop in pessoa) {
    console.log(prop, pessoa[prop])
}

/**
 * Desafio 07 
 * 
 * - Pergunte em um prompt o nome e o email do usuário. Depois armazene esses valores num objeto e mostre esse objeto no console;
 */

const user = {

}

user.name = 'Adriana'
user.email = 'adrianasibineli@gmail.com'
console.log(user);
