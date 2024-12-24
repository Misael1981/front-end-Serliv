# Curto-circuito em JavaScript

## O que é curto-circuito?

Em JavaScript, o curto-circuito é um mecanismo que os operadores lógicos **&&** (e) e **||** (ou) compareça para melhorar a avaliação de expressões. Ao invés de avaliar todas as operações de uma expressão, o interpretador pode parar a avaliação assim que o resultado final já estiver determinado.

## Como funciona na prática?

- **&& (e)**: Se o primeiro operando for false , o resultado da expressão inteiramente será false , independentemente dos outros operandos. Nesse caso, o interpretador não precisa avaliar as operações restantes.
- **|| (ou)**: Se o primeiro operando for true , o resultado da expressão inteira será true , independentemente dos outros operandos. Nesse caso, o interpretador também não precisa avaliar as operações restantes.

### Exemplos:

```
// && (e)
let x = 0;
let y = 5;
let resultado = x && y; // resultado será 0 (falso), pois x já é falso
```

```
// || (ou)
let a = true;
let b = false;
let resultado2 = a || b; // resultado será true, pois a já é verdadeiro
```

### Por que usar curto-circuito?

- **Melhora de desempenho**: Evita cálculos desnecessários.
- **Escrita de código mais concisa**: Permite criar expressões mais compactas.
- **Controle de fluxo**: Pode ser usado para controlar o fluxo de execução de um programa.

### Usos comuns:

- **Condições**:

```
if (usuario && usuario.isAdmin) {
    // Executar código apenas se o usuário existir e for administrador
}
```
- **Atribuições**:

```
let valorPadrao = 10;
let valorPersonalizado = null;
let valorFinal = valorPersonalizado || valorPadrao; // valorFinal será 10
- **Validação**:
```

```
function dividir(numerador, denominador) {
    if (denominador === 0) {
        return "Divisão por zero não é permitida";
    }
    return numerador / denominador;
}
```

### Em resumo:

O curto-circuito é uma ferramenta poderosa em JavaScript que permite escrever código mais eficiente e expressivo. Para entender como ele funciona, você pode utilizar essa técnica para aprimorar suas aplicações e tornar seu código mais legível.

### [Menu Particularidades e Curiosidades JavaScript](menu.md)