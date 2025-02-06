# Navegando pela Árvore DOM com parents e childrens

## O que é Nós do DOM?
Quando um navegador carrega uma página HTML, ele constrói uma representação interna dessa página chamada **Document Object Model (DOM)**. O DOM é uma árvore hierárquica onde cada elemento HTML é um nó. Essa estrutura permite que o JavaScript interaja com os elementos da página e os manipule.

## Parents no DOM

- **O que é**: O nó pai é o elemento que contém outro elemento. É como uma posição familiar, onde cada elemento tem um único pai.
- **Propriedade**: `parentElement`
    - Retorna uma referência ao elemento pai do nó atual.
    - **Exemplo**: `element.parentElement`

## Childrens no DOM

- **O que é**: Os nós filhos são os elementos que estão diretamente dentro de outro elemento. São os descendentes diretos de um nó pai.
- **Propriedade**: `children`
    - Retorna uma coleção HTMLCollection de todos os elementos filhos de um nó.
    - **Exemplo**: `element.children`

## Outras Propriedades Importantes

- `childNodes`: Retorna uma NodeList de todos os nossos filhos de um elemento, incluindo nós de texto e comentários.
- `firstChild`: Retorna o primeiro nó filho de um elemento.
- `lastChild`: Retorna o último nó filho de um elemento.
- `nextSibling`: Retorna o próximo nó-irmão do elemento atual.
- `previousElementSibling`: Retorna o nó-irmão anterior do elemento atual.

### Exemplo Prático

```
<div id="container">
  <p>Este é o primeiro parágrafo.</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>
```

```
// Selecionando o elemento com o ID "container"
const container = document.getElementById('container');

// Acessando o primeiro parágrafo (primeiro filho)
const primeiroParagrafo = container.firstChild;
console.log(primeiroParagrafo.textContent); // Imprime: "Este é o primeiro parágrafo."

// Acessando a lista não ordenada (segundo filho)
const lista = container.children[1];

// Acessando o primeiro item da lista (primeiro filho da lista)
const primeiroItem = lista.firstChild;
console.log(primeiroItem.textContent); // Imprime: "Item 1"

// Acessando o pai do primeiro item
console.log(primeiroItem.parentElement); // Retorna a lista não ordenada
```

### Usos Comuns

- **Navegação**: Percorra a árvore DOM para encontrar elementos específicos.
- **Manipulação**: Adicionar, remover ou modificar elementos.
- **Eventos**: Delegar eventos para elementos pais e capturar eventos em elementos filhos.
- **Clonar**: Criar cópia de elementos e suas estruturas.

### Considerações Importantes

- **HTMLCollection e NodeList**: Ambos são coleções de nós, mas não são arrays. Para iterar sobre eles, você pode usar um loop fortradicional ou métodos como forEach(se disponíveis).
- **textNodes**: Nós de texto são considerados filhos de elementos, mesmo que não sejam elementos HTML.
- **Modificações**: Alterar a estrutura do DOM pode afetar a forma como a interação JavaScript com os elementos.

### Resumir

As propriedades `parentElement` e `children` são ferramentas poderosas para navegar pela árvore DOM e manipular elementos HTML. Ao entender como elas funcionam, você pode criar aplicações web mais dinâmicas e interativas.

### [Voltar ao Menu DOM](./menu.md)