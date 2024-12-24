# Function declaration, function expression e arrow function

Em JavaScript, existem três formas principais de definição de funções: **function declaration, function expression e arrow function**. Cada uma possui suas particularidades e é utilizada em diferentes contextos.

## Function declaration

- **Sintaxe**:

```
function nomeDaFuncao(parâmetros) {
    // corpo da função
}
```

- **Características**:
    - **Hoisting**: São "elevadas" para o topo do escopo, podendo ser chamadas antes de serem declaradas.
    - **Nome obrigatório**: A função precisa ter um nome.
- **Uso**:
    - Ideais para funções que serão utilizadas em várias partes do código.
    - Comumente utilizado para definir funções auxiliares ou funções que serão reutilizadas.

## function Expression

- **Sintaxe**:

```
const nomeDaVariavel = function(parâmetros) {
    // corpo da função
};
```

- **Características**:
    - **Não possuem içamento**: Devem ser declaradas antes de serem utilizadas.
    - **Nome opcional**: Podem ser pessoas anônimas ou nomeadas.
- **Uso**:
    - Flexíveis, podem ser atribuídas a variáveis, passadas como argumentos para outras funções ou retornadas por funções.
    - Comumente utilizado para criar funções anônimas ou encerramentos.

## Arrow function

- **Sintaxe**:

```
const nomeDaVariavel = (parâmetros) => {
    // corpo da função
};
// Sintaxe curta para uma única expressão:
const soma = (a, b) => a + b;
```

- **Características**:
    - **Sintaxe mais concisa**: Ideal para funções curtas.
    - **Não possui o próprio isto**: Herdam o valor deste contexto em que foram criados.
    - **Não podem ser usados ​​como construtores**: Não podem ser chamadas com o operador new.
- **Uso**:
    - Perfeitas para callbacks, mapear, filtrar, reduzir e outras operações em arrays.
    - Ideal para funções pequenas e simples.

### Quando Usar Cada Uma?

- **Function declaration**: Para funções que serão utilizadas em várias partes do código e que precisam ser acessíveis antes de serem declaradas.
- **Function Expression**: Para funções que serão atribuídas a variáveis, passadas como argumentos ou devolvidas por outras funções.
- **Arrow function**: Para funções curtas, callbacks e operações em arrays.

### Em resumo:

|**Caracteristica**|**function declaration**| **function expression**|**arrow function**|
|----------|------------------|------|--------|
|**Içamento**|	Sim|	Não|	Não|
|**Nome**|	Obrigatório|	Opcional|	Opcional|
|**Sintaxe**|	Mais tradicional|	Mais flexível|	Mais concisa|
|**Uso comum**|	Funções auxiliares, reutilizáveis|	Retornos, fechamentos|	Retornos de chamada, mapa, filtro, redução|

### Escolha a forma de definir uma função com base em suas necessidades e no contexto em que ela será utilizada.

### Exemplo:

```
// Declaração de função
function saudacao(nome) {
  console.log(`Olá, ${nome}!`);
}

// Expressão de função (anônima)
const dobrar = function(numero) {
  return numero * 2;
};

// Função seta
const numerosPares = [2, 4, 6, 8];
const numerosDobrados = numerosPares.map(numero => numero * 2);
```


### [Menu Particularidades e Curiosidades JavaScript](menu.md)