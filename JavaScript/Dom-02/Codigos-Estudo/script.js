// NodeList

const listaNodeList = document.querySelectorAll(".list li");
const listaHTMLColletion = document
  .getElementsByClassName("list")[0]
  .getElementsByTagName("li");

console.log(listaNodeList); // NodeList(4) [li, li, li, li]
console.log(listaHTMLColletion); // HTMLCollection(4) [li, li, li, li]

// A diferença entre NodeList e HTMLCollection é que o NodeList é uma coleção de nós do DOM, enquanto o HTMLCollection é uma coleção de elementos HTML. O NodeList pode conter nós de diferentes tipos, enquanto o HTMLCollection contém apenas elementos HTML. Além disso, o NodeList pode ser estático ou dinâmico, enquanto o HTMLCollection é sempre dinâmico. Isso significa que, se você adicionar ou remover elementos do DOM, a HTMLCollection será atualizada automaticamente, enquanto o NodeList não será atualizado.

document.querySelector(".list").innerHTML += "<li>Item 5</li>";

console.log(listaNodeList);
console.log(listaHTMLColletion);

// O NodeList não é atualizado automaticamente, enquanto o HTMLCollection é atualizado automaticamente. Isso significa que, se você adicionar ou remover elementos do DOM, a HTMLCollection será atualizada automaticamente, enquanto o NodeList não será atualizado. Portanto, se você quiser trabalhar com uma coleção de elementos que seja atualizada automaticamente, use o HTMLCollection. Se você quiser trabalhar com uma coleção de nós do DOM que não seja atualizada automaticamente, use o NodeList.
// No entanto, o NodeList é mais flexível, pois pode conter nós de diferentes tipos, enquanto o HTMLCollection só pode conter elementos HTML. Portanto, se você precisar trabalhar com uma coleção de nós do DOM que contenha diferentes tipos de nós, use o NodeList. Se você precisar trabalhar com uma coleção de elementos HTML que seja atualizada automaticamente, use o HTMLCollection.

// Se estiver trabalhando com uma lista dinâmica, que vem por meio de uma API, por exemplo, eu terei de usar o getElemets?
// Não, você pode usar o querySelectorAll, pois ele retorna um NodeList que é atualizado automaticamente. O getElementsByClassName e o getElementsByTagName retornam uma HTMLCollection que é atualizada automaticamente. Portanto, se você estiver trabalhando com uma lista dinâmica, pode usar o querySelectorAll para obter um NodeList que será atualizado automaticamente.
// Não entendi, na lista de cima, os elementos NodeList não atualizaram automaticamenete, mas o HTMLCollection sim. Por que?
// O NodeList não é atualizado automaticamente quando você adiciona ou remove elementos do DOM. No entanto, o querySelectorAll retorna um NodeList que é atualizado automaticamente. Portanto, se você usar o querySelectorAll para obter um NodeList e adicionar ou remover elementos do DOM, o NodeList será atualizado automaticamente. Isso significa que você pode usar o querySelectorAll para obter uma lista dinâmica de elementos que será atualizada automaticamente quando você adicionar ou remover elementos do DOM. Portanto, se você estiver trabalhando com uma lista dinâmica, pode usar o querySelectorAll para obter um NodeList que será atualizado automaticamente.
