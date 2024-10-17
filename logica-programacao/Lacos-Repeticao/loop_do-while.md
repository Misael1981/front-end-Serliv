# O Loop do...while em JavaScript

## O que é um loop do...while?

O loop `do...while` é uma estrutura de controle em JavaScript que executa um bloco de código **pelo menos uma vez** e, em seguida, continua a execução enquanto uma determinada condição for verdadeira. Ou seja, a condição é verificada **após** a primeira execução do bloco.

### Sintaxe:

```
do {
  // Código a ser executado
} while (condição);
```

### Como funciona:

1. O código dentro do bloco `do` é executado uma vez .
2. A dentro da condição `while` é verificada.
3. Se a condição for verdadeira, o código dentro do bloco `do` é executado novamente, e o processo se repete.
4. Se a condição for falsa, o loop termina.

### Exemplo Prático:

```
let i = 0;

do {
  console.log("O valor de i é:", i);
  i++;
} while (i < 5);
```
### Saída

```
O valor de i é: 0
O valor de i é: 1
O valor de i é: 2
O valor de i é: 3
O valor de i é: 4
```

### Explicação:

- Inicializamos uma variável `i`com o valor 0.
- O código dentro do `do`é executado pela primeira vez, imprimindo "O valor de i é: 0".
- A condição `i < 5`é verificada. Como `i`é igual a 0, a condição é verdadeira, e o código dentro do `do`é executado novamente.
- Esse processo continua até que `i`seja igual a 5, momento em que a condição se torna falsa e o loop termina.

### Quando usar o loop do...while?

- **Garantir que um bloco de código seja executado pelo menos uma vez**: Se você precisa que um código seja executado antes de verificar uma condição, o `do...while`é ideal.
- **Criar menus interativos**: Você pode usar um `do...while`para criar um menu que continua sendo exibido até que o usuário escolha uma opção de saída.

### Comparação com o loop while:

|**Característica**|**while**|**do...while**|
|-----------|-----------|------------|
|Condição	|Verificado no início|Verificado no final|
|Execução mínima|0 (se a condição for falsa inicialmente)|	1|

### Exemplo de menu interativo:

```
let opcao;

do {
  console.log("Menu:");
  console.log("1. Opção 1");
  console.log("2. Opção 2");
  console.log("3. Sair");

  opcao = parseInt(prompt("Escolha uma opção:"));

  switch (opcao) {
    case 1:
      // Código para a opção 1
      break;
    case 2:
      // Código para a opção 2
      break;
  }
} while (opcao !== 3);
```

### Neste exemplo:

- O menu é exibido pelo menos uma vez.
- O usuário pode escolher uma opção.
- O loop continua enquanto a opção escolhida para diferente de 3 (sair).

### Em resumo:

O loop `do...while` é uma ferramenta poderosa em JavaScript que garante a execução de um bloco de código pelo menos uma vez, tornando-o útil em diversas situações. Compreender sua sintaxe e funcionamento é fundamental para dominar a linguagem.

### [Menu Laços de Repetição](menu_lacos-repeticao.md)