# Métodos reverse() e reduce()

## `reverse()`

- **Propósito**: Inverter a ordem dos elementos em um array.
- **Como funciona**: Modifica o array original, alterando a posição dos elementos.
- **Exemplo**:

```
const numeros = [1, 2, 3, 4, 5];
numeros.reverse();
console.log(numeros); // Saída: [5, 4, 3, 2, 1]
```

## `reduce()`

- **Propósito**: Reduzir um array a um único valor, aplicando uma função a cada elemento.
- **Como funciona**: Executa uma função "redutora" para cada elemento do array, acumulando o resultado em um único valor.

## Entendendo o `reduce()`

O método `reduce()` pode parecer um pouco complexo no início, mas é extremamente útil para realizar operações de agregação em arrays. Ele recebe dois argumentos:

- Uma função "redutora" que é executada para cada elemento do array.
- Um valor inicial opcional para o acumulador.

A **_função "redutora"_** recebe quatro argumentos:

- O acumulador (o valor acumulado até o momento).
- O valor atual do elemento que está sendo processado.
- O índice do elemento atual.
- Ó matriz original.

## Exemplos Práticos com `reduce()`

- Somando todos os elementos de um array :

```
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(soma); // Saída: 15
```

- Encontrando o maior valor em um array :

```
const numeros = [10, 5, 20, 3, 15];
const maiorValor = numeros.reduce((acumulador, valorAtual) => {
  return Math.max(acumulador, valorAtual);
}, -Infinity);
console.log(maiorValor); // Saída: 20
```

- Contando a ocorrência de cada elemento em um array :

```
const frutas = ["maçã", "banana", "maçã", "laranja", "banana", "banana"];
const contagemFrutas = frutas.reduce((acumulador, valorAtual) => {
  acumulador[valorAtual] = (acumulador[valorAtual] || 0) + 1;
  return acumulador;
}, {});
console.log(contagemFrutas); // Saída: { maçã: 2, banana: 3, laranja: 1 }
```

### Dicas para Dominar o `reduce()`

- **Comece com exemplos simples**: Pratique com casos básicos, como somar ou multiplicar elementos.
- **Visualize o processo**: Tente imaginar como o acumulador e o valor atual mudam a cada iteração.
- **Use `console.log()`**: Para entender melhor o fluxo de execução, adicione `console.log()` dentro da função "redutora" para ver os valores dos argumentos.
- **Experimente com diferentes tipos de dados**: O `reduce()`pode ser usado com arrays de números, strings, objetos e muito mais.

### [Menu Arrays](../menu.md)
