const topBar = document.querySelector(".top-bar p");
console.log(topBar);
const userName = prompt("Digite o seu nome");

if (!userName) {
  topBar.parentElement.style.display = "none";
}

topBar.textContent += userName;
