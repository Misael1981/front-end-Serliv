# Operadores de Comparação

## Introdução

Os operadores de comparação em JavaScript são ferramentas essenciais para realizar verificações e tomar decisões dentro do seu código. Eles permitem comparar valores de diferentes tipos de dados (números, strings, booleanos, etc.) e retornar um valor booleano (true ou false) como resultado. Essa avaliação é crucial para a construção de estruturas condicionais (como if/else) e loops, que são a base da lógica de programação.

## Os Principais Operadores


|**Operador**|**Descrição**|
|------------|----------|
|`==` **(Igualdade)** | Verifique se as operações são iguais, realizando de forma completa se necessário. Por exemplo, `"3" == 3` é verdadeiro.|
|`===` **(Igualdade estrita)** | Verifique se as operações são iguais e do mesmo tipo. Por exemplo, `"3" === 3` é falso, pois um é uma string e o outro um número.|
|`!=` **(Desigualdade)** | Verifica se as operações são diferentes.|
|`!==` **(Desigualdade estrita)** | Verifique se as operações são diferentes ou de tipos diferentes.|
|`>` **(Maior que)** | Verifique se o operando à esquerda é maior que o operando à direita.|
|`<` **(Menor que)** | Verifique se o operando à esquerda é menor que o operando à direita.|
|`>=` **(Maior ou igual a)** | Verifica se o operando à esquerda é maior ou igual ao operando à direita.|
|`<=` **(Menor ou igual a)** | Verifique se o operando à esquerda é menor ou igual ao operando à direita.|

### Exemplos Práticos

```
let idade = 25;
let nome = 'João';

// Comparando números
console.log(idade > 18); // true
console.log(idade === 30); // false

// Comparando strings
console.log(nome === 'João'); // true
console.log(nome < 'Ana'); // true (ordenação alfabética)

// Comparando tipos diferentes
console.log(5 == '5'); // true (conversão implícita)
console.log(5 === '5'); // false (tipos diferentes)
```

### Quando usar qual operador?

- **`===` e `!==`**: Preferidos na maioria dos casos, pois evitam implicações específicas e garantem comparações precisas.
- **`==` e `!=`**: Podem ser úteis em situações específicas, mas é importante estar ciente das possibilidades de tipo.
Utilizando Operadores de Comparação em Estruturas Condicionais

```
if (idade >= 18) {
  console.log('Você é maior de idade.');
} else {
  console.log('Você é menor de idade.');
}
```

### Conclusão

Os operadores de comparação são fundamentais para a lógica de programação em JavaScript. Ao entender como eles funcionam e quando utilizá-los, você poderá criar programas mais robustos e eficientes.

**Recomendação**: Utilize o operador de igualdade estrita (`===`) sempre que possível para evitar resultados inesperados devido a especificidades de tipo.

```
Um sinal de igual (=) nunca é comparação, mas sim atribuição
```

```
O operador => não é operador de comparação, mas sim uma notação para arrow function em JavaScript
```

### [Menu Lógica de Programação](../menu_logica-programacao.md)