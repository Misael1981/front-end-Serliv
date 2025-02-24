const btnMenu = document.getElementById('btn-menu')
const header = document.querySelector('header')

btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('active')
    header.classList.toggle('open')
})