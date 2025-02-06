# Método createElement() em JavaScript

## O que é o método `createElement()`?

O método `createElement()`é uma das ferramentas mais poderosas do JavaScript para manipulação do DOM (Document Object Model). Ele permite que você crie novos elementos HTML dinamicamente, ou seja, durante a execução do seu script. Isso é fundamental para construir interfaces web mais complexas e interativas.

### Sintaxe básica:

```
let novoElemento = document.createElement("nomeDoElemento");
```

- **nomeDoElemento**: Uma string que representa o nome da tag HTML que você deseja criar (por exemplo, "div", "p", "span", "button", etc.).

### Exemplo prático: Criando um parágrafo

```
// Criando um novo elemento <p>
let novoParagrafo = document.createElement("p");

// Adicionando texto ao parágrafo
novoParagrafo.textContent = "Este é um parágrafo criado dinamicamente com JavaScript.";

// Encontrando um elemento existente no HTML para anexar o novo parágrafo
let container = document.getElementById("meuContainer");

// Adicionando o novo parágrafo ao container
container.appendChild(novoParagrafo);
```
``````

### [Voltar ao Menu DOM](./menu.md)