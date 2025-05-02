const trs = document.querySelectorAll("tbody tr");
let aluno = {};
let td = [];
let alunos = [];

trs.forEach((tr) => {
  td = tr.querySelectorAll("td");
  aluno = {
    nome: td[0].textContent,
    nota1: Number(td[1].textContent),
    nota2: Number(td[2].textContent),
    nota3: Number(td[3].textContent),
    nota4: Number(td[4].textContent),
  };
});

console.log(td);
