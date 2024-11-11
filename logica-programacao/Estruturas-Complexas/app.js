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


