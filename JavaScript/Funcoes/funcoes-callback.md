# Funções de Callback em JavaScript

## O que são funções de callback?

Imagine que você pede um café em uma cafeteria. Você não fica parado esperando o café ficar pronto, você faz outras coisas e quando o café está pronto, o barista te chama. Essa é a ideia básica de uma função de callback em JavaScript.

Uma função de callback é uma função que é passada como argumento para outra função. Essa função passada será executada em um momento posterior, geralmente quando um evento ocorre ou quando uma operação assíncrona é concluída.

## Por que usar funções de callback?

- **Assincronismo**: JavaScript é uma linguagem single-thread. Funções de callback permitem que o código continue a ser executado enquanto outras operações, como solicitações de rede ou operações em arquivos, são realizadas em segundo plano.
- **Modularidade**: Elas ajudam a dividir o código em partes menores e mais gerenciáveis, tornando o código mais fácil de entender e manter.
- **Eventos**: São essenciais para lidar com eventos do usuário, como cliques de botões, rolagem da página, etc.

### Exemplo Básico:

```
function minhaFuncao(callback) {
  // Simulando uma operação que leva tempo
  setTimeout(() => {
    console.log('Operação concluída!');
    callback();
  }, 2000);
}

function minhaCallback() {
  console.log('Esta função será chamada após 2 segundos');
}

minhaFuncao(minhaCallback);
```

### Explicando o código:

1. `minhaFuncao`: Essa função aceita outra função como argumento (o callback).
2. `setTimeout`: Simula uma operação que leva 2 segundos para ser concluída.
3. `callback()`: Chama a função passada como argumento após os 2 segundos.
4. `minhaCallback`: Essa é a função callback que será executada quando minhaFuncao terminar sua tarefa.

### Outro exemplo: Lidando com eventos:

```
let botao = document.getElementById('meuBotao');

botao.addEventListener('click', function() {
  console.log('Você clicou no botão!');
});
```

Neste exemplo, a função anônima passada para `addEventListener` é a função de callback. Ela será executada quando o usuário clicar no botão.

## Conceitos importantes:

- **Funções de primeira classe**: Em JavaScript, funções são cidadãos de primeira classe. Isso significa que elas podem ser atribuídas a variáveis, passadas como argumentos e retornadas por outras funções.
- **Assincronismo**: Operações assíncronas não bloqueiam a execução do código.
- **Promise**: Uma forma mais moderna de lidar com assincronismo, oferecendo um objeto para gerenciar o resultado de uma operação assíncrona.
- **Async/await**: Uma sintaxe mais limpa para trabalhar com Promises.

## Quando usar funções de callback?

- **Eventos**: Clique de botão, rolagem, carregamento de página.
Solicitações de rede: Fetch, Axios.
- **Operações assíncronas em geral**: Leitura/escrita de arquivos, timers.

## Dicas:

- **Evite o Callback Hell**: Muitas funções de callback aninhadas podem dificultar a leitura e manutenção do código. Considere usar Promises ou async/await para tornar seu código mais limpo.
- **Entenda o contexto**: O valor de this dentro de uma função de callback pode ser diferente do valor de this fora dela.
- **Utilize bibliotecas**: Bibliotecas como Lodash e Underscore oferecem funções de utilitárias para trabalhar com callbacks de forma mais eficiente.

### Conclusão:

As funções de callback são um conceito fundamental em JavaScript e são essenciais para lidar com a natureza assíncrona da linguagem. Ao entender como elas funcionam, você estará mais preparado para criar aplicações JavaScript mais robustas e eficientes.

### [Voltar ao Menu Funções](menu.md)