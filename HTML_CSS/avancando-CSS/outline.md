# Outline CSS: Um contorno destacado

### O que é ou outlinenão CSS?

Imagine que você quer destacar um elemento em uma página da web sem que isso influencie no layout geral da página. É aí que entra o outline. Ele cria um contorno ao redor de um elemento, como uma espécie de halo luminoso, sem ocupar espaço extra na página.

### Para que serve?

- **Destacar elementos**: Ideal para chamar a atenção para links, botões ou outros elementos interativos.
- **Indicar foco**: Mostra ao usuário qual elemento está sendo selecionado ou está com o foco.
- **Criar efeitos visuais**: Pode ser usado para criar efeitos interessantes e personalizados.

### Como funciona?

A propriedade `outline` é uma abreviação para definir três outras propriedades:

- `outline-style`: Define o estilo do contorno (sólido, pontilhado, tracejado, etc.).
- `outline-width`: Define a espessura do contorno.
- `outline-color`: Defina a cor do contorno.

#### Exemplo:

```
button {
  outline: 2px solid blue;
}
```

Esse código aplicará um contorno azul sólido de 2 pixels de espessura a todos os botões da página.

#### Diferença entre `outline` e `border`:

|Característica|`outline`| `border`|
|--------------|---------|--------|
|Posição|	Fora da área de conteúdo|	Dentro da área de conteúdo|
|Influência no layout|Não|	Sim (aumenta o tamanho do elemento)|
|Foco|Usado para indicar foco|Não tem essa função primária|

### Quando usar outline?

- **Ao criar elementos interativos**: Botões, links, campos de formulário.
- **Para indicar o estado de um elemento**: Quando um elemento está sendo clicado ou está com o foco.
- **Para criar efeitos visuais**: Efeitos de foco, animações.

#### Exemplo prático:

```
<button>Clique aqui</button>
```

```
button {
  background-color: #4CAF50; /* Fundo verde */
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;   

  outline: none; /* Remove o contorno padrão do navegador */
}

button:hover {
  background-color: #3e8e41;
  outline: 2px solid white; /* Adiciona um contorno branco ao passar o mouse por cima */
}
```

### Outras propriedades relacionadas:

- **outline-offset**: Define a distância entre o contorno e o elemento.
- **outline-radius**: Define o raio das bordas do contorno (para contornos arredondados).

### Conclusão:

O `outline` é uma ferramenta poderosa no CSS para criar designs mais sofisticados e melhorar a experiência do usuário. Ao entender suas características e como utilizá-lo, você poderá criar interfaces mais intuitivas e visuais.

### [Voltar ao Menu Avançando em CSS](menu.md)




