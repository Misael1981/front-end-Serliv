# Desvendando o Operador Spread ( ...)

O Operador Spread (`...`) introduzido no ES6 (ECMAScript 2015) permite que um iterável (como um array ou uma string) seja expandido em locais onde zero ou mais argumentos (para chamadas de função) ou elementos (para literais de array) são esperados.
Ele também pode ser usado para expandir objetos em literais de objetos.

Vamos explorar suas principais utilizações:

## 1. Expandindo Iteráveis ​​em Literais de Array

Uma das utilizações mais comuns do operador spread é para criar novos arrays combinando arrays existentes ou inserindo elementos em arrays de forma concisa.

### a) Combinando Arrays: 

```
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayCombinado = [...array1, ...array2];
console.log(arrayCombinado); // Saída: [1, 2, 3, 4, 5, 6]
```

### b) Inserindo Elementos em Arrays:

```
const arrayOriginal = [1, 3, 4];
const elementoNoMeio = 2;
const novoArray = [1, elementoNoMeio, ...arrayOriginal.slice(1)]; // Insere no meio
console.log(novoArray); // Saída: [1, 2, 3, 4]

const elementoNoInicio = 0;
const arrayComInicio = [elementoNoInicio, ...arrayOriginal];
console.log(arrayComInicio); // Saída: [0, 1, 2, 3]

const elementoNoFim = 5;
const arrayComFim = [...arrayOriginal, elementoNoFim];
console.log(arrayComFim); // Saída: [1, 2, 3, 5]
```

### c) Criando uma cópia superficial de um Array:

```
const arrayOriginal = [1, 2, 3];
const arrayCopia = [...arrayOriginal];
arrayCopia.push(4);
console.log(arrayOriginal); // Saída: [1, 2, 3] (original não foi modificado)
console.log(arrayCopia);   // Saída: [1, 2, 3, 4] (cópia foi modificada)
```

**Importante**: O operador spread cria uma **cópia superficial** . Se o array original contiver objetos, apenas as referências aos objetos são copiados, não os objetos em si. Modificar um objeto dentro da cópia afetará o objeto original.

## 2. Passando Argumentos para Funções

O operador spread facilita a passagem dos elementos de um array como argumentos individuais para uma função.

### a) Usando `Math.max()`e `Math.min()`:

```
const numeros = [10, 5, 20, 1, 15];
const maximo = Math.max(...numeros);
const minimo = Math.min(...numeros);
console.log(`Máximo: ${maximo}`); // Saída: Máximo: 20
console.log(`Mínimo: ${minimo}`); // Saída: Mínimo: 1
```

### b) Chamando funções com argumentos de uma matriz:

```
function minhaFuncao(a, b, c) {
  console.log(`a: ${a}, b: ${b}, c: ${c}`);
}

const args = [100, 200, 300];
minhaFuncao(...args); // Saída: a: 100, b: 200, c: 300
```

## 3. Expandindo Strings

Strings são iteráveis, então o operador spread pode ser usado para expandir caracteres individuais dentro de um array.

```
const palavra = "JavaScript";
const arrayDeChars = [...palavra];
console.log(arrayDeChars); // Saída: ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
```

## 4. Usando o Operador Spread em Literais de Objeto (ES2018 e posterior)

O operador spread também pode ser usado para criar novos objetos combinando propriedades de objetos existentes ou adicionando novas propriedades de forma concisa.

### a) Combinando Objetos:

```
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const objCombinado = { ...obj1, ...obj2 };
console.log(objCombinado); // Saída: { a: 1, b: 2, c: 3, d: 4 }
```

**Importante**: Se houver chaves com o mesmo nome em objetos combinados, a propriedade do último objeto "espalhado" prevalecerá.

```
const objA = { a: 1, b: 2 };
const objB = { b: 3, c: 4 };
const objCombinadoComConflito = { ...objA, ...objB };
console.log(objCombinadoComConflito); // Saída: { a: 1, b: 3, c: 4 }
```

### b) Adicionando ou Substituindo Propriedades em Objetos:

```
const objOriginal = { nome: "Alice", idade: 30 };
const novoObjComProfissao = { ...objOriginal, profissao: "Engenheira" };
console.log(novoObjComProfissao); // Saída: { nome: "Alice", idade: 30, profissao: "Engenheira" }

const objComIdadeAtualizada = { ...objOriginal, idade: 31 };
console.log(objComIdadeAtualizada); // Saída: { nome: "Alice", idade: 31 }
```

### m resumo, o operador spread (`...`) é uma ferramenta poderosa para:

- Crie novos arrays e objetos de forma concisa.
- Combine iteráveis ​​e objetos facilmente.
- Passar vários votos para funções.
- Criar superfícies científicas de arrays e objetos.

### [Menu Arrays](../menu.md)
