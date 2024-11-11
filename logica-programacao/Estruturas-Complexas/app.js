/**
 * Desafio 01
    - Dado um array contendo 5 objetos(onde cada objeto possui duas propriedades 'nome' e 'email')

    - Mostrar em uma lista (tag <ul>) cada um desses nomes com seus respectivos emails.
 */



const people = [
    { name: 'José', email: 'jose@server' },
    { name: 'Maria', email: 'maria@server' },
    { name: 'Natalia', email: 'natalia@server' },
    { name: 'Jandira', email: 'jandira@server' },
    { name: 'Marilene', email: 'marilene@server' },
    { name: 'Gabriel', email: 'gabriel@server' }
]
const ul = document.querySelector('ul')
ul.innerHTML = `<li>Misael</li>`
console.log(ul)
people.forEach(({ name, email }) => {
    ul.innerHTML += `<li>${ name }, ${email}</li>`
})

/**
 * Desafio 02
   - Dado um array contendo 3 objetos, cada um representa um produto.

   - Mostrar em uma tabela (tag<table>) o nome, o preço e a quantidade de cada produto no estoque.
 */

const produtos = [
    { nome: 'caneta', preco: 2, estoque: 3 },
    { nome: 'sulfite', preco: 5, estoque: 10 },
    { nome: 'durex', preco: 1.5, estoque: 7 },
    { nome: 'lapis', preco: 1, estoque: 30 },
    { nome: 'caderno', preco: 10, estoque: 5 }
]

const tabelaProdutos = document.getElementById('tabelaProdutos')

// for (let i = 0; i < produtos.length; i++) {
//     tabelaProdutos.innerHTML += `
//     <tr>
//         <td>${produtos[i].nome}</td>
//         <td>R$ ${produtos[i].preco.toFixed(2)}</td>
//         <td>${produtos[i].estoque}</td>
//     </tr>
//     `
// }

produtos.forEach(produto => {
    tabelaProdutos.innerHTML += `
    <tr>
        <td>${produto.nome}</td>
        <td>R$ ${produto.preco}</td>
        <td>${produto.estoque}</td>
    </tr>
    `
})

/**
 * Desafio 03
   
    - Dado o seguinte objeto
    const aluno = {
        nome: 'nome 1',
        notas: [1, 3, 3, 8]
    }

    - Mostre na telas as seguintes informações?
        - Nome
        - Lista com as notas
        - Média
        - Aprovado/Reprovado
 */

const aluno = {
    nome: 'Daniel',
    notas: [7, 9, 4, 8]
}

const output = document.getElementById('output')

output.innerHTML = `
    <h2>Aluno: ${aluno.nome}</h2>
    `
output.innerHTML += `<ul>`
let soma = 0

for(let i = 0; i < aluno.notas.length; i++) {
    soma += aluno.notas[i]
    output.innerHTML += `<li>${aluno.notas[i]}<li/>`
}
output.innerHTML += `</ul>`

let media = Number(soma / aluno.notas.length)

output.innerHTML += `<p>Média: ${media}</p>`

// if (media >= 7) {
//     output.innerHTML += `<h3>O Aluno está APROVADO<h3/>`
// }else {
//     output.innerHTML += `<h3>O Aluno está REPROVADO<h3/>`
// }

let aprovado = (media >= 7) ? 'APROVADO' : `REPROVADO`
output.innerHTML += `<h3>Status: ${aprovado}<h3/>`

/**
 * Desafio 04
 
    - Dado um array de aluno semelhante à?
        const alunos = [
    {
        nome: 'nome 1',
        notas: [1, 3, 3, 8]
    },
    {
        nome: 'nome 2',
        notas: [10, 6, 3, 2]
    }
    ]

    - Mostre uma lista lista dentro da lista
 */

const alunos = [
{nome: 'João', notas: [1, 3, 3, 8]},
{nome: 'Maria', notas: [10, 7, 9, 8]},
{nome: 'José', notas: [10, 6, 3, 0]}
]

const listaAlunos = document.getElementById('listaAlunos')
let alunoHTML = ''

for(let i = 0; i < alunos.length; i++) {
    alunoHTML += `<li>${alunos[i].nome}`
    alunoHTML += `<ul>`
        for(let j = 0; j < alunos[i].notas.length; j++) {
            alunoHTML += `<li>${alunos[i].notas[j]}</li>`
        }
    alunoHTML += `</ul>`
    alunoHTML += `</li>`
}

listaAlunos.innerHTML = alunoHTML

/**
 * Desafio 05
    const alunosDesafio = [
        {nome: 'João', notas: [1, 3, 3, 8]},
        {nome: 'Maria', notas: [10, 7, 9, 8]},
        {nome: 'José', notas: [10, 6, 3, 0]}
    ]

    - Mostre em uma lista o nome e a média de cada aluno;
 */

const alunosDesafio = [
    {nome: 'João', notas: [1, 3, 3, 8]},
    {nome: 'Maria', notas: [10, 7, 9, 8]},
    {nome: 'José', notas: [10, 6, 3, 0]}
]

const ulAlunosdesafio = document.getElementById('ulAlunosdesafio')

for(let i = 0; i < alunosDesafio.length; i++) {
    
    let somaNotas = 0
    for(let j = 0; j < alunosDesafio[i].notas.length; j++) {
        somaNotas += alunosDesafio[i].notas[j]
    }
    let mediaAlunos = somaNotas / alunosDesafio[i].notas.length
    ulAlunosdesafio.innerHTML += `<li>Alunos: ${alunosDesafio[i].nome}, Média: ${mediaAlunos}</li> `
}
   