# `if` e `else` 

## O que são `if` e `else`?

Em JavaScript, as estruturas condicionais `if`são `else` utilizadas para executar diferentes blocos de código com base em uma determinada condição. Imagine que você está criando um jogo simples e precisa verificar se um personagem atingiu um determinado nível para desbloquear uma nova habilidade. O ifque `else` permite que você faça essa verificação e execute as ações correspondentes.

### Sintaxe básica:

```
if (condição) {
  // Código a ser executado se a condição for verdadeira
} else {
  // Código a ser executado se a condição for falsa
}
```

- **condição**:É uma expressão que pode ser avaliada como verdadeira (true) ou falsa (false). Por exemplo: `idade >= 18`, `numero % 2 === 0`, `nome === "João"`.   
- **blocos de código**: O código dentro das chaves `{}`será executado dependendo do resultado da condição.

###Exemplo:

```
let idade = 25;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```

### Operadores de comparação:

- `===`: Igualdade estrita (compara valor e tipo)
- `!==`: Diferença estrita
- `<`: Menor que
- `>`: Mais que
- `<=`: Menor ou igual a
- `>=`: Maior ou igual a

### Exemplo com operadores de comparação:

```
let nota = 75;

if (nota >= 70) {
  console.log("Aprovado!");
} else {
  console.log("Reprovado.");
}
```

### Aninhando se:

Você pode aninhar múltiplos `if`e `else`para criar condições mais complexas:

```
let hora = 14;

if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}
```

### O operador ternário:

Uma forma mais concisa de escrever um `if`simples é usando o operador ternário:

```
let maiorDeIdade = idade >= 18 ? "Sim" : "Não";
console.log("É maior de idade?", maiorDeIdade);
```

### Em resumo:

- `if`e `else`são fundamentais para tomar decisões em seus programas JavaScript.
- A condição deve ser uma expressão que possa ser avaliada como verdadeira ou falsa.
- Os blocos de código dentro das chaves são executados dependendo do resultado da condição.
- Você pode aninar `if`e `else`para criar uma lógica mais complexa.
- O operador ternário é uma forma mais concisa de escrever um `if`simples.

## [Menu Controle de Decisão](menu_controle-decisao.md)