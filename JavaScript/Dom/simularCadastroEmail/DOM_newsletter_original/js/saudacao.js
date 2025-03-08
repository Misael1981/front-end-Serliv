const btn = document.getElementById("btn");
const input = document.getElementById("txtEmail");
const newsletterFeedback = document.getElementById("newsletterFeedback");
const paragraph = document.createElement("p");

btn.addEventListener("click", (event) => {
  inputValue = input.value;
  paragraph.innerText = `O email: "${inputValue}" foi cadastrado com sucesso.`;
  newsletterFeedback.appendChild(paragraph);
});
