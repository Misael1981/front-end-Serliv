# Arrays e Principais Métodos

## O que são Arrays?

Arrays são como listas organizadas que guardam vários valores em uma única variável. Pense neles como gavetas numeradas, onde cada gaveta (índice) guarda um valor. Os arrays em JavaScript podem salvar qualquer tipo de dado: números, textos (strings), objetos, outros arrays e até misturas de tudo isso.

### Criando Arrays

Existem duas formas principais de criar arrays:

1. **Literal**: É a forma mais comum e simples. Você coloca os valores entre colchetes `[]`, separados por vírgulas:

```
let frutas = ["maçã", "banana", "laranja"];
let numeros = [1, 2, 3, 4, 5];
let misturado = [1, "dois", { nome: "João" }, [4, 5]];
```

2. **Construtor `Array()`**: Menos comum, mas útil em alguns casos. Você usa a palavra-chave `new` seguida de `Array()`:

```
let frutas = new Array("maçã", "banana", "laranja");
let numeros = new Array(1, 2, 3, 4, 5);
```

## Métodos de Arrays

Agora, vamos explorar alguns métodos essenciais para manipular arrays:

- `every()`: Verifique se todos os elementos do array passam em um teste (condição). Retorna `true` se todos passarem, ou `false` caso contrário.

```
let numeros = [10, 20, 30, 40, 50];
let todosMaioresQue5 = numeros.every(numero => numero > 5); // true
let todosPares = numeros.every(numero => numero % 2 === 0); // true
```

- `some()`: Verifique se pelo menos um elemento do array passa em um teste. Retorna `true` se algum passar, ou `false` se nenhum passar.

```
let numeros = [10, 20, 30, 40, 50];
let algumMaiorQue45 = numeros.some(numero => numero > 45); // true
let algumImpar = numeros.some(numero => numero % 2 !== 0); // false
```

- `forEach()`: Executa uma função para **cada** elemento do array. Não retorna nada, apenas itera pelos elementos.

```
let frutas = ["maçã", "banana", "laranja"];
frutas.forEach(fruta => {
  console.log(`Eu gosto de ${fruta}`);
});
```

- `filter()`: Cria um **novo** array com os elementos que passam em um teste. Retorna um array com os elementos filtrados.

```
let numeros = [10, 20, 30, 40, 50];
let maioresQue30 = numeros.filter(numero => numero > 30); // [40, 50]
```

- `map()`: Cria um **novo** array com os resultados de uma função aplicada a cada elemento do array original. Retorna um array transformado.

```
let numeros = [1, 2, 3, 4, 5];
let dobrados = numeros.map(numero => numero * 2); // [2, 4, 6, 8, 10]
```

### Exemplo Completo

```
let produtos = [
  { nome: "Camiseta", preco: 29.99 },
  { nome: "Calça", preco: 59.99 },
  { nome: "Tênis", preco: 99.99 },
];

// Filtrar produtos com preço maior que 50
let caros = produtos.filter(produto => produto.preco > 50);

// Criar um array com os nomes dos produtos
let nomes = produtos.map(produto => produto.nome);

// Verificar se todos os produtos são caros (preço > 50)
let todosCaros = produtos.every(produto => produto.preco > 50);

// Verificar se algum produto custa menos de 30
let algumBarato = produtos.some(produto => produto.preco < 30);

// Imprimir os nomes dos produtos
produtos.forEach(produto => {
  console.log(produto.nome);
});

console.log(caros);
console.log(nomes);
console.log(todosCaros);
console.log(algumBarato);
```

### [Menu Arrays](../menu.md)
