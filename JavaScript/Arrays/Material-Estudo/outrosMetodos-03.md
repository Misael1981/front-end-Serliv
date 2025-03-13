# Métodos push(), pop(), shift(), unshift(), slice() e splice()

## `push()`

- **Propósito**: Adicionar um ou mais elementos ao final de um array.
- **Como funciona**: Modifica o array original e retorna o novo comprimento do array.
- **Exemplo**:

```
const frutas = ["maçã", "banana"];
frutas.push("laranja", "manga");
console.log(frutas); // Saída: ["maçã", "banana", "laranja", "manga"]
```

## `pop()`

- **Propósito**: Remover o último elemento de um array.
- **Como funciona**: Modifica o array original e retorna o elemento removido.
- **Exemplo**:

```
const frutas = ["maçã", "banana", "laranja"];
const ultimaFruta = frutas.pop();
console.log(frutas); // Saída: ["maçã", "banana"]
console.log(ultimaFruta); // Saída: "laranja"
```

## `shift()`

- **Propósito**: Remover o primeiro elemento de um array.
- **Como funciona**: Modifica o array original e retorna o elemento removido.
- **Exemplo**:

```
const frutas = ["maçã", "banana", "laranja"];
const primeiraFruta = frutas.shift();
console.log(frutas); // Saída: ["banana", "laranja"]
console.log(primeiraFruta); // Saída: "maçã"
```

## `unshift()`

- **Propósito**: Adicionar um ou mais elementos no início de um array.
- **Como funciona**: Modifica o array original e retorna o novo comprimento do array.
- **Exemplo**:

```
const frutas = ["banana", "laranja"];
frutas.unshift("maçã", "morango");
console.log(frutas); // Saída: ["maçã", "morango", "banana", "laranja"]
```

## `slice()`

- **Propósito**: Criar uma cópia superficial de uma parte de um array.
- **Como funciona**: Retorna um novo array contendo os elementos selecionados, sem modificar o array original.
- **Exemplo**:

```
const frutas = ["maçã", "banana", "laranja", "manga"];
const frutasSelecionadas = frutas.slice(1, 3);
console.log(frutasSelecionadas); // Saída: ["banana", "laranja"]
console.log(frutas); // Saída: ["maçã", "banana", "laranja", "manga"]
```

## `splice()`

- **Propósito**: Adicionar ou remover elementos de um array em qualquer posição.
- **Como funciona**: Modifica o array original e retorna um array contendo os elementos removidos (se houver).
- **Exemplo**:

```
const frutas = ["maçã", "banana", "laranja"];
const frutasRemovidas = frutas.splice(1, 1, "manga", "morango");
console.log(frutas); // Saída: ["maçã", "manga", "morango", "laranja"]
console.log(frutasRemovidas); // Saída: ["banana"]
```

### Resumo das Diferenças:

- `push()`, `pop()`, `shift()`, `unshift()` e `splice()`modificamos o array original.
- `slice()`crie um novo array sem modificar o original.
- `push()`e `unshift()` adicionam elementos.
- `pop()`e `shift()` remova elementos.
- `slice()`selecione uma parte do array.
- `splice()`pode adicionar ou remover elementos em qualquer posição.

### [Menu Arrays](../menu.md)
