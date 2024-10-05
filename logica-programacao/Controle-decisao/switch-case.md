# O que é o `switch case`?

O `switch case`é uma estrutura de controle de fluxo em JavaScript que permite executar diferentes blocos de código com base no valor de uma expressão. É uma alternativa mais eficiente ao uso de múltiplos `if-else` quando você precisa verificar o valor de uma expressão contra vários valores possíveis.

### Sintaxe:

```
switch (expression) {
  case value1:
    // Código a ser executado se expression for igual a value1
    break;
  case value2:
    // Código a ser executado se expression for igual a value2
    break;
  // ...
  default:
    // Código a ser executado se expression não corresponder a nenhum dos valores
}
```

### Como funciona:

1. A expressão é perceptível.
2. O valor da expressão é comparado com cada um `case`.
3. Se o valor da expressão correspondente a um `case`, o código dentro desse `case` é executado.
4. O `break` opcional é usado para sair do `switch` após o código `case` ser executado. Se não houver um `break`, o código continuará a ser executado até o final do `switch`.
5. Se nenhum `case` for executado, o código dentro do `default`(se presente) é executado.

### Exemplo:

```
let dayOfWeek = 2;

switch (dayOfWeek) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  // ...
  default:
    console.log("Dia da semana inválido");
}
```

### Pontos importantes:

- Os valores dos `case` devem ser constantes.
- Você pode usar `break` para sair do `switch` após o `case` ser executado.
- O `default` é opcional, mas é útil para lidar com valores não correspondentes.
- Você pode usar `switch` qualquer tipo de dado em JavaScript.

### Conclusão:

O `switch case` é uma ferramenta poderosa para escrever código mais eficiente e legível em JavaScript. Isso é especialmente útil quando você precisa verificar o valor de uma expressão em relação a vários valores possíveis.

## [Menu Controle de Decisão](menu_controle-decisao.md)