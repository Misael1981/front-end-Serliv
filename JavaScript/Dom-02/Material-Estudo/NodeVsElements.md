# Node Vs Elements

<img src="../img/NodeVsElement-01.PNG">

O HTML da sua página é como uma grande árvore, onde cada parte do seu código é um "nó" dessa árvore. Acontece que existem diferentes tipos de "nós".

## Node (Nó): O Termo Genérico

Um `Node` é o tipo mais básico de objeto na DOM. Ele representa qualquer entidade na estrutura da sua página HTML. Isso inclui:

- **Elementos HTML**: As tags que você usa para estruturar seu conteúdo (como `<div>`, `<p>`, `<span>`, `<h1>`, `<img>`, etc.).
- **Atributos**: As características dos elementos HTML (como `class`, `id`, `src`, `href`, `alt`, etc.).
- **Texto**: O conteúdo de texto dentro dos elementos.
- **Comentários**: As partes do seu código HTML que são ignoradas pelo navegador (``).
- **O próprio documento HTML**: A raiz de toda a árvore DOM.
- E outros tipos mais específicos.

**Em resumo, um Node é qualquer ponto de conexão na árvore DOM**.

## Element (Elemento): Um Tipo Específico de Nó

Um `Element` é um **tipo específico de `Node`**. Ele representa um elemento HTML. Ou seja, as tags que você usa para construir a estrutura da sua página.

- Um `<div>` é um `Element` e também um `Node`.
- Um `<p>` é um `Element` e também um `Node`.
- Uma `<img>` é um `Element` e também um `Node`.

**A diferença chave é que nem todo `Node` é um `Element`, mas todo `Element` é um `Node`**.

Pense assim:

- "Node" é como se fosse a categoria "coisa na árvore".
- "Element" é como se fosse a categoria "tag HTML" dentro da categoria maior de "coisa na árvore".

### Analogia:

Imagine uma árvore genealógica:

- Um "Node" seria qualquer pessoa na árvore genealógica (pais, filhos, avós, etc.).
- Um "Element" seria especificamente as pessoas que representam uma "família" (têm uma tag de família). Outras coisas na árvore (como datas de nascimento anotadas) seriam outros tipos de "Nodes" mas não "Elements".

### Por que essa distinção é importante?

Quando você está manipulando o DOM com JavaScript, você pode interagir com diferentes tipos de nós. Por exemplo:

- `element.childNodes` retorna uma `NodeList` que pode conter tanto `Elements` (os elementos HTML filhos) quanto outros tipos de nós, como nós de texto (o espaço em branco entre as tags, por exemplo).
- `element.children` retorna uma `HTMLCollection que contém apenas os Element`s filhos.
- Métodos como `document.getElementById()` ou `document.querySelector()` geralmente retornam `Element`s.

Entender essa diferença te ajuda a usar os métodos corretos do DOM e a manipular a estrutura da sua página da maneira desejada.

## Para Navegar entre os NÓS

<img src="../img/NodeVsElement-02.PNG">

### Para Navegar entre os NÓS (Relações Familiares):

- `parentNode`: Retorna o **nó pai** do nó atual. Se o nó não tiver pai (como o nó raiz `document`), retorna `null`. Ele pode retornar qualquer tipo de nó (Element, Text, Comment, etc.).

- `parentElement`: Retorna o **elemento pai** do nó atual. Se o nó não tiver pai ou se o pai não for um elemento HTML, retorna `null`. É mais específico que `parentNode`, pois sempre retorna um `Element`.

- `nextSibling`: Retorna o próximo nó no mesmo nível da árvore (o próximo "irmão"). Pode ser um Element, Text, Comment, etc. Se não houver próximo irmão, retorna `null`.

  - `nextElementSibling`: Retorna sempre próximo **`Element`** no mesmo nível da árvore (o próximo "irmão"). Será sempre um **Elemento**. Se não houver próximo irmão, retorna `null`.

- `previousSibling`: Retorna o nó anterior no mesmo nível da árvore (o "irmão" anterior). Pode ser um Element, Text, Comment, etc. Se não houver irmão anterior, retorna `null`.
  - `previousElementSibling`: Retorna sempre o **`element`** anterior no mesmo nível da árvore (o "irmão" anterior). Será sempre um **Elemento**. Se não houver irmão anterior, retorna `null`.

<img src="../img/NodeVsElement-03.PNG">

### Para Acessar os Filhos de um Nó:

- `childNodes`: Retorna uma NodeList contendo todos os nós filhos do nó atual. Isso inclui Elements, Text nodes (como espaços em branco entre tags), Comment nodes, etc. É uma coleção viva, o que significa que se os filhos do nó mudarem, a `NodeList` será automaticamente atualizada.

- `children`: Retorna uma HTMLCollection contendo apenas os elementos filhos do nó atual. Ele ignora nós de texto e comentários. Também é uma coleção viva. É geralmente mais útil quando você está interessado apenas nos elementos HTML filhos.

- `firstChild`: Retorna o primeiro nó filho do nó atual. Pode ser um Element, Text, Comment, etc. Se não houver filhos, retorna `null`.

- `firstElementChild`: Retorna o primeiro elemento filho do nó atual. Ignora nós de texto e comentários. Se não houver elementos filhos, retorna `null`.

- `lastChild`: Retorna o último nó filho do nó atual. Pode ser um Element, Text, Comment, etc. Se não houver filhos, retorna `null`.

- `lastElementChild`: Retorna o último elemento filho do nó atual. Ignora nós de texto e comentários. Se não houver elementos filhos, retorna `null`.

- `hasChildNodes()`: Retorna um valor booleano (`true` ou `false`) indicando se o nó atual possui algum nó filho (de qualquer tipo).

### Em resumo:

- Os métodos com "Element" no nome (`parentElement`, `firstElementChild`, `lastElementChild`) são convenientes quando você quer trabalhar especificamente com elementos HTML, ignorando outros tipos de nós.
- Os métodos sem "Element" (`parentNode`, `nextSibling`, `previousSibling`, `firstChild`, `lastChild`, `childNodes`) podem retornar qualquer tipo de nó presente na estrutura do DOM.
- `children` é uma coleção viva de apenas elementos filhos, enquanto `childNodes` é uma coleção viva de todos os tipos de nós filhos.

## Para Adicionar NÓS

<img src="../img/NodeVsElement-04.PNG">

## A partir do Element

<img src="../img/NodeVsElement-05.PNG">

## Como Remover NÓS

<img src="../img/NodeVsElement-06.PNG">

## Criar NÓS

<img src="../img/NodeVsElement-07.PNG">

### [Menu DOM parte 2](../menu.md)
