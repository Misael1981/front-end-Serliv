# Matriz Vs Vetor

Em JavaScript, embora o termo “matriz” seja menos comum, o conceito é fundamentalmente o mesmo que em outras linguagens de programação. Na prática, usamos arrays para representar tanto vetores quanto matrizes.

## Vetores (Matrizes Unidimensionais)

- **O que são**: Um vetor é uma estrutura de dados linear que armazena uma coleção ordenada de elementos. Cada elemento pode ser de qualquer tipo de dado (números, strings, objetos, etc.).
- **Declaração**:

```
let numeros = [1, 2, 3, 4, 5];
let nomes = ['Ana', 'Pedro', 'Carlos'];
```

- **Acesso aos elementos**:

```
console.log(numeros[2]); // Imprime 3
```
- **Modificação de elementos**:

```
nomes[1] = 'Maria';
```

## Matrizes (Arrays Multidimensionais)

- **O que são**: Uma matriz é uma estrutura de dados que organiza elementos em linhas e colunas, formando uma tabela. Em JavaScript, representamos matrizes como arrays de arrays.
- **Declaração**:

```
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

- **Acesso aos elementos**:

```
console.log(matriz[1][2]); // Imprime 6
```

- **Modificação de elementos**:

```
matriz[0][1] = 10;
```

### Em resumo:

- **Vetores**: São listas unidimensionais de elementos.
- **Matrizes: São tabelas bidimensionais (ou mais) de elementos.
- **Arrays**: São uma estrutura de dados básica em JavaScript para representar tanto vetores quanto matrizes.
Operações Comuns com Arrays
- **Métodos**: O JavaScript oferece diversos métodos para manipular arrays, como `push`, `pop`, `shift`, `unshift`, , `splice`, `slice`, `map`, `filter`, `reduce`, etc.
- **Iteração**: Você pode percorrer os elementos de um array usando `for`, `for...of`ou `forEach`.
- **Busca**: Utilize métodos como `indexOf`ou `findIndex`para encontrar a posição de um elemento.
Exemplo Prático: Criando uma Tabela de Multiplicação

```
function criarTabelaMultiplicacao(tamanho) {
  let tabela = [];
  for (let i = 0; i < tamanho; i++) {
    let linha = [];
    for (let j = 0; j < tamanho; j++) {
      linha.push((i + 1) * (j + 1));
    }
    tabela.push(linha);
  }
  return tabela;
}

let tabela5x5 = criarTabelaMultiplicacao(5);
console.log(tabela5x5);
```

### Observações:

- **Arrays dinâmicos**: Em JavaScript, os arrays são sonoros, ou seja, você pode adicionar ou remover elementos a qualquer momento.
- **Arrays como objetos**: Embora os arrays sejam usados ​​para armazenar coleções de dados, eles são, na verdade, objetos especiais em JavaScript. Isso significa que eles possuem propriedades e métodos.
- **Arrays multidimensionais**: Você pode criar arrays com mais de duas dimensões para representar estruturas de dados mais complexas.

### Em suma, os arrays são ferramentas poderosas em JavaScript para organizar e manipular dados. Compreender seus conceitos básicos e as transações disponíveis é fundamental para qualquer desenvolvedor JavaScript.

### [Menu Particularidades e Curiosidades JavaScript](menu.md)