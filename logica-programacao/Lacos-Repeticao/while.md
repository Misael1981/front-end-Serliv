# Loop While

## O que é um loop while?

Em JavaScript, o loop `while` é uma estrutura de controle que permite executar um bloco de código repetidamente enquanto uma determinada condição é verdadeira. É uma ferramenta fundamental para automatizar tarefas repetitivas e iterar sobre conjuntos de dados.   

### Sintaxe básica:

```
while (condição) {
  // Código a ser executado enquanto a condição for verdadeira
}
```

- **condição**: Uma expressão que retorna um valor booleano (verdadeiro ou falso).
- **bloco de código**: As instruções que serão executadas a cada iteração do loop.

### Como funciona:

1. **Verificação da condição**: Antes de cada execução do bloco de código, a condição é avaliada.
2. **Execução do bloco**: Se a condição for verdadeira, o código dentro do bloco é executado.
3. **Repetição**: Após a execução do bloco, a condição é verificada novamente. O processo se repete até que a condição se torne falsa.

### Exemplo prático:

```
let i = 0;
while (i < 5) {
  console.log("O valor de i é:", i);
  i++;
}
```

### Neste exemplo:

- A variável `i` é inicializada com o valor 0.
- O loop continua enquanto `i` for menor que 5.
- A cada iteração, o valor `i` é impresso no console e incrementado em 1.

### Quando usar o loop while:

- **Repetição indefinida**: Quando não se sabe exatamente quantas vezes o loop deve ser executado.
- **complexo**: Quando a condição de parada depende de múltiplos fatores ou condições de cálculos mais complexos.

### Exemplos mais avançados:

### Calculando a soma dos números de 1 a 10

```
let soma = 0;
let numero = 1;

while (numero <= 10) {
  soma += numero;
  numero++;
}

console.log("A soma é:", soma);
```

### Considerações importantes:

- **Condição de parada**: É fundamental garantir que a condição do loop eventualmente se torne falsa, evitando loops infinitos.
- **Variáveis ​​de controle**: Utilize variáveis ​​para controlar o fluxo do loop e garantir que ele termine corretamente.
- **Eficiência**: Evite realizar cálculos desnecessários dentro do loop. Calcule os valores antes do loop sempre que possível.
- **Outras estruturas de repetição**: Além do `while`, o JavaScript oferece outros tipos de loops, como `for` e `do...while`. Escolha o mais adequado para cada situação.

### Resumo:

O loop `while` é uma ferramenta poderosa para realizar tarefas repetitivas em JavaScript. Entender sua sintaxe e funcionamento é essencial para dominar a programação em JavaScript.


### [Menu Laços de Repetição](menu_lacos-repeticao.md)