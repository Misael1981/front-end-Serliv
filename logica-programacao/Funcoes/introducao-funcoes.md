# O Papel das Funções na Lógica de Programação

## O que são funções?

Imagine funções como pequenas máquinas que realizam tarefas específicas. Na programação, uma função é um bloco de **código reutilizável** que executa uma determinada ação. Ela recebe dados de entrada (parâmetros), processa esses dados e, opcionalmente, retorna um resultado.

<img src="img/funcoes.PNG">

## Por que usar funções?

- **Organização do código**: Dividir um programa em funções menores torna o código mais fácil de entender, depurar e manter.
- **Reusabilidade**: Uma vez criada, uma função pode ser chamada várias vezes em diferentes partes do programa, evitando a reprodução de código.
- **Abstração**: Funções permite ocultar a complexidade de um determinado cálculo ou processo, expondo apenas sua interface (parâmetros e retorno).
- **Modularidade**: Cada função pode ser desenvolvida e testada de forma independente, facilitando a criação de programas mais complexos.

### Estrutura básica de uma função

```
function nomeDaFuncao(parâmetro1, parâmetro2, ...) {
  // Código que realiza a tarefa da função
  return resultado; // Opcional
}
```

- `function`: Palavra-chave que define uma função.
- `nomeDaFuncao`: Nome que você escolhe para identificar a função.
- **`parâmetro1`,` parâmetro2`, ...**: Dados que você passa para a função.
- `// Código que realiza a tarefa da função`: Bloco de código que contém as instruções da função.
- `return resultado;`: Opcional. Retorna um valor para quem chamou a função.

### Exemplo prático: Calculando uma área de um retângulo

```
function calcularAreaRetangulo(base, altura) {
  const area = base * altura;
  return area;
}

// Chamando a função
const baseRetangulo = 5;
const alturaRetangulo = 3;
const resultado = calcularAreaRetangulo(baseRetangulo, alturaRetangulo);
console.log("A área do retângulo é:", resultado);
```

Neste exemplo:

- A função` calcularAreaRetangulo` recebe duas parâmetros: `base`e `altura`.
- Ela calcula a área e retorna o resultado.
- A função é chamada com os valores específicos da base e altura do retângulo.
- O resultado é armazenado na variável `resultado`e impresso no console.

## Tipos de funções

- **Funções puras**: Não modificar dados externos e sempre retornar o mesmo resultado para as mesmas entradas. São mais simples de testar e depurar.
- **Funções com efeitos colaterais**: Modificar dados externos (por exemplo, variáveis ​​globais) ou interação com o mundo real (como exibir uma mensagem na tela).

### Passagem de parâmetros

- **Por valor**: Uma cópia do valor do parâmetro foi passada para a função. Alterações dentro da função não afetam o valor original.
- **Por referência**: A função recebe uma referência para o valor original. Alterações dentro da função afetam o valor original.

### Escopo de variáveis

- **Escopo local**: Variáveis ​​declaradas dentro de uma função só existem dentro dela.
- **Escopo global**: Variáveis ​​declaradas fora de qualquer função são acessíveis em qualquer parte do código.

### Vantagens de usar funções

- **Código mais limpo e organizado**: Funções ajudam a dividir o código em partes menores e mais gerenciáveis.
- **Reusabilidade**: Uma vez criada, uma função pode ser reutilizada em diferentes partes do programa.
- **Facilidade de teste**: Funções podem ser testadas isoladamente.
- **Abstração**: Funções permitem ocultar a complexidade de um determinado cálculo ou processo.
- **Colaboração**: Funções facilitam a colaboração em projetos, pois diferentes desenvolvedores podem trabalhar em funções diferentes.

### Em resumo

As funções são ferramentas poderosas na programação que permitem organizar o código, promover a reutilização e facilitar a compreensão de programas mais complexos. Ao o conceito de funções, você dará um grande passo para se tornar um programador mais eficiente.



### [Menu Funções](menu-funcoes.md)