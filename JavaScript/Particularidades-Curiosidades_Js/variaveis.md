# Variáveis

Em 2015 o ECMAScript 6 (ES6) revolucionou a forma como escrevemos JavaScript, introduzindo uma série de recursos que tornaram a linguagem mais expressiva e eficiente. Dentre as principais mudanças, podemos citar: novas formas de declarar variáveis ​​(let e const), funções mais concisas (arrow function), classes para programação orientada a objetos, módulos para organizar melhor o código, além de estruturas de dados mais poderosas como Map e Definir. Essas novidades revelaram um código mais limpo, legível e escalável, facilitando o desenvolvimento de aplicações JavaScript modernas.

## O que Variáveis

**Em programação, uma variável é como um recipiente que armazena um valor específico durante a execução de um programa**. Esse valor pode ser alterado ao longo do tempo, daí o nome "variável". Imagine uma caixa onde você pode guardar diferentes objetos: uma caixa seria uma variável e os objetos seriam os valores. Cada variável possui um nome único que serve como rótulo para identificar o conteúdo armazenado. As variáveis ​​são essenciais para realizar cálculos, decisões e manipular dados dentro de um programa.

Em JavaScript, existem três maneiras principais de declarar variáveis: **var** , **let** e **const** . Cada uma delas possui características e escopos diferentes, ou que influenciam diretamente como essas variáveis ​​podem ser utilizadas em seu código.

### `var`

- **Declaração**: A mais antiga das três, o `var` possui um escopo de função. Isso significa que uma variável declarada `var` dentro de uma função será visível em toda a função.
- **Redeclaração**: Pode ser redeclarada dentro do mesmo escopo.
- **Hoisting**: Variáveis ​​declaradas com `var` são "**hoisted**" para o topo do escopo, o que significa que você pode usar uma variável antes de sua declaração.

### Exemplo:

```
var nome = "João"; // Declaração
console.log(nome); // Imprime "João"

function minhaFuncao() {
  var idade = 30; // Escopo de função
  console.log(idade);
}
```

### `let`

- **Declaração**: Introduzido no ***ECMAScript 6***, o `let` possui um escopo de bloco. Isso significa que uma variável declarada `let` será visível apenas dentro do bloco (como um `if`, `for` ou um ***par de chaves***) em que foi declarada.
- **Redeclaração**: Não pode ser redeclarada dentro do mesmo escopo.
- **Hoisting**: Variáveis ​​declaradas com `let` são "**hoisted**", mas não inicializadas. Tentar usá-la antes da declaração resultará em um erro de referência.

### Exemplo:

```
let cidade = "São Paulo";
if (true) {
  let pais = "Brasil"; // Escopo de bloco
  console.log(pais);
}
// console.log(pais); // Erro: pais não está definido fora do bloco
```

### `const`

- **Declaração**: Também introduzido no ***ECMAScript 6***, o `const` é usado para declarar constantes, ou seja, valores que não devem ser alterados após a inicialização.
- **Redeclaração**: Não pode ser redeclarada ou reatribuída.
- **Hoisting**: Assim como `let`, as variáveis `const​` ​são "hoisted", mas não inicializadas.

### Exemplo:

```
const PI = 3.14159;
// PI = 3.14; // Erro: Não pode reatribuir a uma constante
```

## Como usar?

- **const**: Use sempre que possível para garantir que um valor não seja alterado acidentalmente.
- **let**: Use quando precisar de uma variável que possa ser reatribuída dentro de um escopo específico.
- **var**: Evite usar `var` em novos códigos, pois seu comportamento pode levar a problemas de escopo inesperado.

### Em resumo:

|**Caracteristica**|	**var**|**let**|	**const**|
|------------|--------|---------|-------|
|**Escopo**|	Função|	Bloco|	Bloco|
|**Redeclaração**|	Sim|	Não|	Não|
|**Retribuição**|	Sim	|Sim|	Não|
|**Içamento**|	Sim|	Sim (não inicializado)|	Sim (não inicializado)|

### [Menu Particularidades e Curiosidades JavaScript](menu.md)


