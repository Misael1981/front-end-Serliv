const saudacao = document.querySelector('.top-bar p')
const userName = prompt('Digite o seu nome')

if (userName === "") {
    const elementoParaRemover = saudacao.parentElement
    elementoParaRemover.parentElement.removeChild(elementoParaRemover)
}

saudacao.innerHTML += `<b>${userName}</b>`


