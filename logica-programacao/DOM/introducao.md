# Introdução ao DOM

<img src="img/dom-01.png">

O **DOM (Document Object Model)** é uma representação da estrutura de uma página HTML em formato de árvore de objetos. Ele permite que o JavaScript interaja com os elementos da página, permitindo modificá-los, adicionar novos elementos e responder a eventos do usuário.

**Em resumo**, o DOM é uma ponte entre o JavaScript e o HTML, permitindo que você manipule dinamicamente o conteúdo de uma página web.

<img src="img/dom-02.png">

## getElements

**getElements** é um método comumente usado em JavaScript para recuperar elementos do HTML Document Object Model (DOM). É uma função versátil que permite que você interaja e manipule elementos em uma página da web.

Veja aqui uma análise de como isso funciona:

- **`document` Objeto**: O ponto de partida para acessar o DOM é o `document` objeto. Este objeto representa todo o documento HTML carregado no navegador.
- **`getElements` Método**: O `document` objeto fornece vários métodos para selecionar elementos, e `getElements` é um deles. No entanto, é importante notar que não há um método embutido `getElements` diretamente no `document` objeto no JavaScript padrão.

Existem vários métodos comuns usados ​​para obter a seleção de elementos, cada um com sua própria sintaxe e finalidade:

## 1. `getElementById'('id')`:

  - Seleciona um elemento com um `id` atributo específico. O `id` atributo deve ser único dentro do documento.
  - Exemplo:

```
const element = document.getElementById("myElement");
```

### [Menu DOM](menu-dom.md)