# Box-Shadow no CSS: Adicionando profundidade e realismo aos seus elementos

### O que é box-shadow?

É uma propriedade do CSS que permite adicionar sombras aos elementos HTML, criando uma ilusão de profundidade e realismo. Essa propriedade é extremamente útil para destacar elementos, criar efeitos de elevação e dar mais vida aos seus designs.

## Como funciona:

- **Sintaxe**:

```
box-shadow: offset-x offset-y blur spread color;
```

- **offset-x e offset-y**: Definem a posição horizontal e vertical da sombra em relação ao elemento.
- **blur**: Define o raio do desfoque da sombra.
- **spread**: Define o tamanho da sombra.
- **cor**: Defina um cor da sombra.

```
<div class="card"></div>
```

```
.card {
  width: 200px;
  height: 150px;
  background-color: #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* Sombra com offset de 2px em x e y, blur de 5px e cor cinza */
}
```
Neste exemplo, a div terá uma sombra levemente desfocada e cinza, projetada 2 pixels para a direita e 2 pixels para baixo.

### Várias sombras:

Você pode adicionar várias sombras separando-as por vírgulas:

```
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3), -2px -2px 5px rgba(255, 255, 255, 0.2);
```
### Inserindo:

- **Inserção**: Para criar uma sombra interna, adicione a palavra-chave insetantes dos outros valores.

```
box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.3);
```

### Aplicações:

- **Botões**: Crie botões com efeito de clique ao passar o mouse.
- **Cartões**: Adicione profundidade e realismo aos cartões.
- **Textos**: Criar efeitos de texto em destaque.
- **Formulários**: Destacar campos de formulário.

### Dicas:

- **Experimente**: Ajuste os valores de offset, blur, spread e cor para criar efeitos diferentes.
- **Combine com outras propriedades**: Use o box-shadow em conjunto com outras propriedades CSS, como border-radius, para criar designs mais complexos.
- **Considere uma performance**: Um excesso de sombras pode impactar o desempenho de sua página. Use-as com moderação.

### [Voltar ao menu Readme](../README.md)
