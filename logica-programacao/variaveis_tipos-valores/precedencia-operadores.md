# Precedência de Operadores em JavaScript

## O que é Precedência de Operadores?

Imagine uma expressão matemática como "2 + 3 * 4". Qual operação você realiza primeiro, a adição ou a multiplicação? A precedência de operadores define a ordem em que as operações são realizadas em uma expressão. Em JavaScript, como em muitas outras linguagens, a multiplicação tem precedência sobre a adição, então o resultado da expressão acima seria 14 (3 * 4 = 12, 12 + 2 = 14).

### Por que a Precedência é Importante?

- **Resultados Corretos**: Garantir que as operações sejam realizadas na ordem correta é fundamental para obter resultados precisos.
- **Leitura de Código**: Entender a precedência facilita a leitura e compreensão de expressões complexas.
- **Evitar Erros**: Conhecer as regras de precedência ajuda a prevenir erros comuns em seu código.

## Tabela de Precedência em JavaScript

A tabela abaixo mostra os operadores em ordem decrescente de precedência, do mais alto (realizado primeiro) para o mais baixo (realizado por último).

| **Nível**|	**Operadores**|**Descrição**|
|------|-----------|-------|
|20	|`()`|	Parênteses (agrupamento)|
|19	|`new`,`...`|	Criação de objetos, spread|
|18	|`++`, `--`(pós)|	Incremento/decremento pós-fixado|
|17|`delete`, `void`, `typeof`, `++`, `--`(pré)|	Deletar, tipo, incremento/decremento pré-fixado|
|16	|`*`, `/`,`%`|	Multiplicação, divisão, módulo|
|15	|`+`,`-`|	Adição, subtração|
|14|	`<<`, `>>`,`>>>`|	Deslocamento de bits|
|13	|`<`, `<=`, `>`,`>=`|	Comparação|
|12	|`==`, `!=`, `===`,`!==`|	Igualdade|
|11|	`&`|	E um pouco mais|
|10	|`^`|	XOR um pouco|
|9	|`	|`|
|8	|`&&`|	E lógica|
|7	|`|	`|
|6	|`? :`|	Operador ternário|
|5	|`=`, `+=`, `-=`, `*=`, `/=`, `%=`, `<<=`, `>>=`, `>>>=`, `&=`, `^=`, |`	=`|
|4	|,|	Sequência|

### Observações:

- **Parênteses**: Usados ​​para alterar a ordem de avaliação. Qualquer expressão dentro dos parentes é avaliada primeiro.
- **Associatividade**: Além da precedência, a associatividade define a direção em que os operadores do mesmo nível são agrupados. A maioria dos operadores são associativos à esquerda, o que significa que as vozes são avaliadas da esquerda para a direita.

### Exemplos

```
// Exemplo 1: Multiplicação antes da adição
let resultado = 2 + 3 * 4; // resultado = 14

// Exemplo 2: Usando parênteses para alterar a ordem
resultado = (2 + 3) * 4; // resultado = 20

// Exemplo 3: Operador ternário
let idade = 18;
let mensagem = (idade >= 18) ? "Você é maior de idade" : "Você é menor de idade";
```

### Dicas Práticas

- **Use parênteses para evitar ambiguidades**: Mesmo que você conheça a tabela de precedência, usar parênteses torna o código mais legível e reduz a chance de erros.
- **Que expressões complexas em linhas separada**s: Isso melhora a legibilidade e facilita a depuração.
- **Consulte a documentação**: Se tiver dúvidas sobre a precedência de um operador específico, consulte a documentação oficial do JavaScript.

### Conclusão

A precedência de operadores é um conceito fundamental em JavaScript. Ao entender as regras de precedência, você poderá escrever um código mais preciso, eficiente e fácil de manter.

### [Voltar ao Menu Variaveis e Valores](menu_variaveis-valores.md)
