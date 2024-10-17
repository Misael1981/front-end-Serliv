# `break` e `continue`: Controlando o fluxo em laços de repetição em JavaScript

No JavaScript, os operadores `break` e `continue` são ferramentas essenciais para controlar o fluxo de execução dentro de laços de repetição ( `for`, , , etc. ). `while` `do...while`

## Vamos analisar cada um em detalhes:

## 1 `break`.:

**Função**: Interrompe a execução do laço de repetição imediatamente , transferindo o controle para a instrução após o término do laço.

**Aplicações**:

- Sair do laço quando uma condição específica para ser atendida.
- Executar apenas um número determinado de iterações.
- Pular para uma parte específica do código após o laço.

### Exemplo:

```
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Sai do laço quando i for igual a 5
  }
  console.log(i); // Exibe os números de 0 a 4
}
```

## 2 `continue`.:

**Função**: Interrompe a iteração atual do laço de repetição e vai direto para a próxima iteração .

**Aplicações**:

- Iterações específicas específicas dentro do laço.
- Executar apenas determinadas ações em algumas iterações.
- Ignorar valores específicos em um loop.

### Exemplo:

```
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Pula iterações para números pares
  }
  console.log(i); // Exibe apenas os números ímpares de 1 a 9
}
```

### Diferenças chave:

- O **laço termina completamente** , enquanto o apenas pula uma iteração .`break` `continue`

- O `break` é útil para sair do laço em situações específicas , enquanto o `continue` é usado para modificar o comportamento do laço sem sair dele .

### Dicas importantes:

- Utilize o `break` com cautela, pois pode interromper o fluxo normal do programa.

- O `continue` pode ser usado para atualizar loops, mas evite usá-lo em excesso para não tornar o código confuso.

- Combine o `break` e `continue` com outras estruturas de controle para criar lógica complexa em seus laços de repetição.

### [Menu Laços de Repetição](menu_lacos-repeticao.md)