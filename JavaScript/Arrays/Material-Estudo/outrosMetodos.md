# Métodos indexOf(), lastIndexOf(), includes(), find() e findIndex()

## `indexOf()`

- O método `indexOf()` busca a primeira ocorrência de um elemento em um array e retorna seu índice. Se o elemento não for encontrado, retorna -1.
- **Sintaxe**: `array.indexOf(elemento, índiceInicial)`
  - `elemento`: O elemento a ser procurado.
  - `índiceInicial(opcional)`: O índice a partir de qual a busca deve começar.
- **Exemplo**:

```
const frutas = ["maçã", "banana", "laranja", "banana"];
console.log(frutas.indexOf("banana")); // 1
console.log(frutas.indexOf("uva")); // -1
console.log(frutas.indexOf("banana", 2)); // 3
```

## `lastIndexOf()`

- O método `lastIndexOf()` busca a última ocorrência de um elemento em um array e retorna seu índice. Se o elemento não for encontrado, retorna -1.
- **Sintaxe**: `array.lastIndexOf(elemento, índiceInicial)`
  - `elemento`: O elemento a ser procurado.
  - `índiceInicial(opcional)`: O índice a partir do qual a busca deve começar, retrocedendo no array.
- **Exemplo**:

```
const frutas = ["maçã", "banana", "laranja", "banana"];
console.log(frutas.lastIndexOf("banana")); // 3
console.log(frutas.lastIndexOf("uva")); // -1
console.log(frutas.lastIndexOf("banana", 2)); // 1
```

## `includes()`

- O método `includes()` verifica se um array contém um determinado elemento e retorna trueou false.
- **Sintaxe**: `array.includes(elemento, índiceInicial)`
  - `elemento`: O elemento a ser procurado.
  - `índiceInicial(opcional)`: O índice a partir de qual a busca deve começar.
- **Exemplo**:

```
const frutas = ["maçã", "banana", "laranja"];
console.log(frutas.includes("banana")); // true
console.log(frutas.includes("uva")); // false
console.log(frutas.includes("banana", 2)); // false
```

## `find()`

- O método `find()` retorna o primeiro elemento de um array que atende a uma determinada condição (definida por uma função de retorno de chamada). Se nenhum elemento for encontrado, retorna `undefined`.
- **Sintaxe**: `array.find(funçãoCallback)`
  - `funçãoCallback`: Uma função que recebe um elemento do array como argumento e retorna `true` se o elemento satisfizer a condição, ou `false` caso contrário.
- **Exemplo**:

```
const numeros = [10, 15, 20, 25, 30];
const primeiroMaiorQue20 = numeros.find((numero) => numero > 20);
console.log(primeiroMaiorQue20); // 25
```

- O método `findIndex()` retorna o índice do primeiro elemento de um array que atende a uma determinada condição (definida por uma função de retorno de chamada). Se nenhum elemento for encontrado, retorna `-1`.
- **Sintaxe**: `array.findIndex(funçãoCallback)`
  - `funçãoCallback`: Uma função que recebe um elemento do array como argumento e retorna `true` se o elemento satisfizer a condição, ou `false` caso contrário.
- **Exemplo**:

```
const numeros = [10, 15, 20, 25, 30];
const indicePrimeiroMaiorQue20 = numeros.findIndex((numero) => numero > 20);
console.log(indicePrimeiroMaiorQue20); // 3
```

### Dicas:

- `indexOf()` é `lastIndexOf()` útil para buscar elementos específicos em um array, enquanto `includes()` é ideal para verificar a presença de um elemento.
- `find()` e `findIndex()` são poderosos para buscar elementos que satisfaçam condições complexas, utilizando funções de retorno de chamada.
- Lembre-se de que `find()` retorna o elemento encontrado, enquanto `findIndex()` retorna o índice do elemento.

### [Menu Arrays](../menu.md)
