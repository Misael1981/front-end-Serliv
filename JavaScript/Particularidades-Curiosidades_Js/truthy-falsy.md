# Valores Truthy e Falsy em JavaScript

Em JavaScript, nem todos os valores são explicitamente booleanos (true ou false), mas em contextos onde um valor booleano é esperado, muitos valores podem ser implicitamente convertidos para true ou false. Esses valores são chamados de **Truthy e Falsy**.

## Valores Falsy

São aqueles que, quando avaliados em um contexto booleano, se comportam como `false`. Os valores falsos são:

- **false**: O valor booleano falso.
- **0**: O número zero.
- **-0**: O número zero negativo.
- **""**: Uma string vazia.
- **null**: Representa a ausência de qualquer valor.
- **undefined**: Representa uma variável que não foi inicializada.
- **NaN**: Not a Number, resultado de operações matemáticas inválidas.

## Valores Truthy

Todos os outros valores são considerados verdadeiros. Isso inclui:

- **true**: O valor booleano verdadeiro.
- **Qualquer número diferente de zero**: Tanto positivo quanto negativo.
- **Qualquer string não vazia**: Mesmo que contenha apenas espaços.
- **Todos os objetos, incluindo arrays**: Mesmo objetos vazios.

## Por que isso é importante?

- **Condicionais**: Em estruturas condicionais como `if`, `while`e `for`, os valores são implicitamente convertidos para booleanos. Por exemplo:

```
if (0) {
  console.log("Isso não será executado, pois 0 é falsy");
}

if ("Olá") {
  console.log("Isso será executado, pois 'Olá' é truthy");
}
```

- **Operador lógico OR (||)**: Retorna o primeiro valor verdadeiro ou o último valor se todos forem falsos.
- **Operador lógico AND (&&)**: Retorna o primeiro valor falso ou o último valor se todos forem verdadeiros.

### Exemplos práticos

```
let nome = "";
if (nome) {
  console.log("Você tem um nome");
} else {
  console.log("Por favor, informe seu nome");
}
```
```
let idade = 18;
let podeDirigir = idade >= 18 ? "Sim" : "Não";
console.log(podeDirigir);
```

## Coerção de tipos

A conversão implícita de um valor para booleano é chamada de coerção de tipo. É importante estar ciente desse mecanismo para evitar erros inesperados em seu código.

### Em resumo:

Compreender os valores **Truthy e Falsy** é fundamental para escrever código JavaScript mais conciso e eficiente. Ao entender como os valores são avaliados em contextos booleanos, você poderá tomar decisões mais precisas em suas estruturas condicionais e equações lógicas.

### [Menu Particularidades e Curiosidades JavaScript](menu.md)