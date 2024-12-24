# Tipos de dados em JavaScript

## Introdução

JavaScript é uma linguagem de programação dinamicamente tipada, o que significa que o tipo de dado de uma variável é determinado em tempo de execução. Isso confere muita flexibilidade, mas também exige atenção para evitar erros comuns.

Existem dois tipos principais de dados em JavaScript: **primitivos** e **objetos**.

## Tipos de Dados Primitivos

Os tipos de dados primitivos são valores imutáveis ​​e passados ​​por **valor**. Isso significa que quando você atribui um valor primitivo a uma variável e depois passa essa variável para uma função, a função receberá uma cópia desse valor e qualquer modificação feita dentro da função **não afetará o valor original**.

- **String**: Representa uma sequência de caracteres. Ex: "Olá, mundo!", 'JavaScript'.
- **Number**: Representa números, tanto inteiros quanto de ponto flutuante. Ex: 42, 3,14, -5.
- **Boolean**: Representa valores lógicos: verdadeiro (true) ou falso (false). Ex: verdadeiro, falso.
- **Null**: Representa um valor nulo ou vazio de forma intencional. Ex: seja x = nulo;
- **Undefined**: Representa uma variável que foi declarada, mas ainda não recebeu nenhum valor. Ex: deixe y;
- **Symbol**: Representa um valor único e imutável, geralmente usado como identificador. Ex: Símbolo('meuSímbolo')
- **BigInt**: (números inteiros grandes)


## Tipos de dados por referência (objetos)

Os objetos são coleções de propriedades (chave-valor). Eles são passados ​​por referência, o que significa que quando você atribui um objeto a uma variável e depois passa essa variável para uma função, a função recebe uma referência ao objeto original. Qualquer modificação feita em um objeto dentro da função também afetará o objeto original.

- **Arrays**: Coleções ordenadas de valores. Ex: [1, 2, 3, "quatro"].
- **Funções**: Blocos de código reutilizáveis.
- **Dados**: Representam pontos no tempo.
- **Objetos personalizados**: Você pode criar seus próprios objetos com propriedades e métodos personalizados.

Passagem por Valor vs. Passagem por Referência

|**Caracteristica**|	**Passagem por Valor**|	**Passagem por Referência**|
|------------|---------------|---------|
|O que é passado|	Cópia do valor|	Referência ao objeto original|
|Modificações|	Não afeta o valor original|	Afetam o objeto original|
|Tipos de dados|	Primitivos|	Objetos|

### Exemplo:

```
// Passagem por valor
let num = 10;
let outroNum = num;
outroNum = 20;
console.log(num); // Imprime 10

// Passagem por referência
let pessoa = { nome: 'João' };
let outraPessoa = pessoa;
outraPessoa.nome = 'Maria';
console.log(pessoa.nome); // Imprime 'Maria'
```

## Por que a distinção é importante?

Compreender a diferença entre passagem por valor e por referência é fundamental para evitar bugs em seus programas. Ao manipular objetos, você precisa estar ciente de que alterações feitas em um objeto podem afetar outros objetos que referenciam o mesmo objeto.

### Conclusão

Dominar os tipos de dados em JavaScript é essencial para escrever um código limpo, eficiente e livre de erros. Ao entender a diferença entre primitivos e objetos, você estará mais preparado para criar aplicações web robustas e interativas.

### [Menu Particularidades e Curiosidades JavaScript](menu.md)

