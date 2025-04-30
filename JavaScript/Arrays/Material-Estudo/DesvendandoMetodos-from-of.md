# Desvendando `Array.from()` e `Array.of()`

Ambos `Array.from()` e `Array.of()` são métodos estáticos da função construtora `Array`. Isso significa que eles são chamados diretamente na classe `Array`, e não em instâncias de arrays (objetos array) como `meuArray.push()` ou `outroArray.map()`.

## 1. `Array.from()`: Criando Arrays a Partir de Outras Coisas

O método `Array.from()` oferece uma maneira flexível de criar um novo objeto `Array` a partir de:

- **Objetos iteráveis**: Como `String`, `NodeList` (retornado por métodos como `querySelectorAll`), `Set`, `Map` (obtendo suas chaves ou valores).
- **Objetos array-like (com uma propriedade `length` e elementos indexados)**: Como o objeto `arguments` dentro de uma função ou objetos que você cria com essa estrutura.

### Sintaxe:

```
Array.from(arrayLike[, mapFn[, thisArg]])
```

- **`arrayLike`**: O objeto a ser convertido em array.
- **`mapFn` (opcional)**: Uma função de mapeamento a ser chamada em cada elemento do array durante a criação. Similar ao método `map()` dos arrays.
- **`thisArg` (opcional)**: O valor a ser usado como `this` ao executar a função `mapFn`.

### Exemplos Práticos:

#### a) Criando um array a partir de uma string:

```
const texto = "Alura";
const arrayDeLetras = Array.from(texto);
console.log(arrayDeLetras); // Saída: ['A', 'l', 'u', 'r', 'a']
```

#### b) Criando um array a partir de um NodeList (retornado por `querySelectorAll`):

```
// Suponha que você tenha alguns elementos <div class="item"> no seu HTML
const elementosItem = document.querySelectorAll('.item');
const arrayDeElementos = Array.from(elementosItem);
arrayDeElementos.forEach(item => {
  console.log(item.textContent);
});
```

#### c) Criando um array a partir de um `Set`:

```
const meuSet = new Set([1, 2, 2, 3, 4, 4, 5]);
const arrayDoSet = Array.from(meuSet);
console.log(arrayDoSet); // Saída: [1, 2, 3, 4, 5] (elementos duplicados são removidos pelo Set)
```

#### d) Usando a função de mapeamento (`mapFn`):

```
const numeros = [1, 2, 3];
const arrayDobrado = Array.from(numeros, numero => numero * 2);
console.log(arrayDobrado); // Saída: [2, 4, 6]

const arrayDeIndices = Array.from({ length: 5 }, (_, index) => index);
console.log(arrayDeIndices); // Saída: [0, 1, 2, 3, 4] (criando um array de 0 a 4)
```

## 2. `Array.of()`: Criando Arrays com Argumentos

O método `Array.of()` cria um novo objeto `Array` com um número variável de argumentos, independentemente do número ou do tipo dos argumentos.

### Sintaxe:

```
Array.of(element1[, element2[, ...[, elementN]]])
```

- `element1, element2, ..., elementN`: Os elementos que você deseja incluir no novo array.

## Diferença crucial de `Array()` constructor:

É importante notar a diferença entre `Array.of()` e o construtor `Array()` quando passado um único argumento numérico:

- `Array(7)`: Cria um array vazio com um comprimento de 7.
- `Array.of(7)`: Cria um array com um único elemento, o número 7: `[7]`.

### Exemplos Práticos:

#### a) Criando um array com números:

```
const arrayDeNumeros = Array.of(10, 20, 30);
console.log(arrayDeNumeros); // Saída: [10, 20, 30]
```

#### b) Criando um array com diferentes tipos de dados:

```
const arrayMisto = Array.of(1, "dois", true, null, { valor: 5 });
console.log(arrayMisto); // Saída: [1, "dois", true, null, { valor: 5 }]
```

#### c) A diferença com o construtor `Array()`:

```
const arrayComComprimento = Array(5);
console.log(arrayComComprimento); // Saída: [ <5 empty items> ]

const arrayComUmElemento = Array.of(5);
console.log(arrayComUmElemento); // Saída: [ 5 ]
```

## Por Que a Chamada na Função Construtora?

Para entender a natureza dos métodos estáticos:

### Métodos Estáticos:

Em muitas linguagens de programação orientada a objetos (incluindo JavaScript), métodos estáticos são métodos que pertencem à **classe em si**, e não a instâncias específicas dessa classe (os objetos). Eles são frequentemente usados para:

1. **Operações relacionadas à criação de instâncias**: Como é o caso de `Array.from()` e `Array.of()`, que são formas de criar novos objetos array.

2. **Funções utilitárias gerais relacionadas à classe**: Que não dependem do estado de um objeto específico

```
Analogia: Pense na classe Carro. Métodos de instância seriam carro1.acelerar(), carro2.frear(), pois a ação depende de um carro específico. Um método estático da classe Carro poderia ser Carro.criarNovoCarro(modelo, cor), que é uma função utilitária para criar um novo carro, mas não opera em um carro existente.
```

### No caso de `Array`:

- `Array.from()` recebe algo que não é necessariamente um array e o transforma em um novo array. A lógica de "transformar em array" pertence à funcionalidade geral da classe `Array`.
- `Array.of()` cria um novo array a partir dos argumentos fornecidos, sem depender de um array preexistente. A lógica de "criar um array com esses elementos" é uma funcionalidade de construção da classe `Array`.

Por outro lado, métodos como `push()`, `pop()`, `map()`, `filter()` operam em **objetos array existentes**. Eles manipulam ou transformam o conteúdo de um array específico. Portanto, eles são chamados em instâncias de arrays.

### Em resumo:

- **Métodos estáticos (`Array.from()`, `Array.of()`)**: São chamados na classe e geralmente estão relacionados à criação de instâncias ou a funcionalidades utilitárias gerais da classe.
- **Métodos de instância (`meuArray.push()`, `meuArray.map()`)**: São chamados em objetos (instâncias) da classe e operam no estado ou conteúdo desses objetos.

### [Menu Arrays](../menu.md)
