# Propriedade background-blend-mode do CSS

## O que é a propriedade background-blend-mode?

A propriedade `background-blend-mode` em CSS permite que você combine múltiplas imagens de fundo e o fundo de um elemento de forma criativa. Ela define como essas camadas visuais se misturam entre si, resultando em efeitos visuais únicos e personalizados.

### Sintaxe:

```
background-blend-mode: valor;
```

## Valores possíveis:

- **normal**: As imagens de fundo são empilhadas, com a última sobreposição como anteriores.
- **multiply**: Multiplica as cores das camadas, criando um efeito de escurecimento.
- **screen**: Combina as áreas claras das camadas, criando um efeito de clareamento.
- **overlay**: Combina os efeitos de multiplicação e tela, dependendo da cor das camadas.
- **darken**: Escolhe a cor mais escura em cada ponto de sobreposição.
- **lighten**: Escolhe a cor mais clara em cada ponto de sobreposição.
- **color-dodge**: Clarea a cor de base de acordo com a cor da camada superior.
- **color-burn**: Escureça o cor de base de acordo com a cor da camada superior.
**hard-light**: Combinação de color-dodge e color-burn.
- **soft-light**: Versão mais suave de hard-light.
- **difference**: Subtrai as cores das camadas, criando um efeito de contraste.
- **exclusion**: Semelhante a diferença, mas com resultados mais suaves.
- **hue**: Mantém o tom da cor de base e a saturação e luminosidade da camada superior.
- **saturation**: Mantém a luminosidade da cor de base e o tom e a saturação da camada superior.
- **color**: Mantém a luminosidade da cor de base e o tom e a saturação da camada superior.
- **luminosity**: Mantém o tom e a saturação do cor de base e a luminosidade da camada superior.

### Exemplo:

```
.box {
    width: 500px;
    height: 375px;
    background-image: url('img/bg.jpg');
    background-color: aqua;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: darken;
}
```

### Quando usar o modo de mesclagem de fundo:

- **Crie efeitos visuais interessantes**: Combine cores e imagens para obter resultados exclusivos e personalizados.
- **Melhorar a legibilidade**: Ajuste a opacidade e a cor das imagens de fundo para melhorar a legibilidade do texto.
- **Crie interfaces mais interessantes**: Use efeitos de mesclagem para adicionar profundidade e interesse visual aos seus designs.

### Dicas:

- **Experimente diferentes valores**: A melhor maneira de aprender a usar `background-blend-mode`é experimentando os diferentes valores e combinando-os de diversas formas.
- **Use ferramentas de desenvolvimento**: As ferramentas de desenvolvimento do navegador permitem visualizar os diferentes modos de mesclagem em tempo real.
- **Combine com outras propriedades CSS**: Use `background-blend-mode`em conjunto com outras propriedades CSS, como `opacity`, `filter`e `mix-blend-mode`, para criar efeitos ainda mais complexos.

### Recursos adicionais:

- **Documentação da Web MDN**: https://developer.mozilla.org/pt-BR/docs/Web/CSS/background-blend-mode
- **Sem tabela**: https://tableless.com.br/modos-de-mesclagem-em-css-blend-mode-css/

### Conclusão:

A propriedade `background-blend-mode`é uma ferramenta poderosa para criar designs web mais criativos e personalizados. Ao entender os diferentes valores e como combiná-los, você pode adicionar um toque especial aos seus projetos.

### [Menu Trabalhando com Imagens](menu-imagens.md)