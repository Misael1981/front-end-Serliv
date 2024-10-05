# null e undefined, NaN

## Null

- **O que é**: Representa a ausência intencional de um valor. É como se você tivesse uma caixa vazia, mas você sabe que ela existe e que foi puramente vazia.
- **Quando usar**:
    - **Inicializando variáveis**: Quando você declara uma variável, mas ainda não tem um valor específico para especificar a ela.
    - **Limpando variáveis**: Quando você deseja remover um valor de uma variável.
    - **Retornando valores de funções**: Quando uma função não encontra um valor específico, ela pode retornar `null`.

### Exemplo:

```
let nome = null; // Nome ainda não foi definido
let objeto = { nome: null }; // Objeto com propriedade "nome" intencionalmente vazia
```

## undefined

- **O que é**: Indica que uma variável foi declarada, mas ainda não foi atribuída nenhum valor a ela. É como se você tivesse uma caixa, mas ainda não colocou nada dentro.
- **Quando ocorre**:
    - **Variáveis ​​não inicializadas**: Quando você declara uma variável, mas não atribui um valor inicial.
    - **Acesso a propriedades inexistentes**: Quando você tenta acessar uma propriedade de um objeto que não existe.
    - **Argumentos de função não passados**: Quando uma função espera um argumento, mas ele não é fornecido.

### Exemplo:

```
let idade; // Variável declarada, mas sem valor
console.log(idade); // Saída: undefined

let pessoa = {};
console.log(pessoa.endereco); // Saída: undefined (propriedade não existe)
```

## NaN (Não é um número)

- **O que é**: Representa um valor que não é um número válido. É o resultado de operações matemáticas que não fazem sentido, como dividir um número por zero.
- **Quando ocorre**:
    - **Operações matemáticas inválidas**: Divisão por zero, raiz quadrada de um número negativo, etc.
    - **Conversões de tipos de dados inválidos**: Tente converter uma string que não represente um número para um número.

### Exemplo:

```
let resultado = "oi" / 2; // Saída: NaN
console.log(isNaN(resultado)); // Saída: true (é NaN)
```

### Qual a diferença entre null e undefined?

- **null**: Valor intencionalmente para indicar ausência de valor.
- **undefined**: Valor atribuído automaticamente quando uma variável é declarada, mas não inicializada.

### Em resumo:

| **Valor**|**Descrição**|
|-----------|-----------|
|null|Ausência intencional de valor|
|undefined|Variável declarada, mas sem valor atribuído|
|NaN|Resultado de uma operação matemática inválido|

### Para que serve?

- **Controle de fluxo**: Verifique se uma variável tem um valor antes de realizar operações.
- **Tratamento de erros**: identificar e lidar com situações inesperadas.
- **Validação de dados**: Garantir que os dados recebidos sejam válidos.

### Exemplo prático:

```
function calcularMedia(nota1, nota2) {
  if (nota1 === null || nota1 === undefined || isNaN(nota1)) {
    return "Nota 1 inválida";
  }
  if (nota2 === null || nota2 === undefined || isNaN(nota2)) {
    return "Nota 2 inválida";
  }

  return (nota1 + nota2) / 2;
}
```