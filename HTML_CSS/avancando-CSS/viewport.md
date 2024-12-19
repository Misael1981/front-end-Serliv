# vw e vh: Unidades Relativas ao Tamanho da Viewport

**vw** e **vh** são unidades de medida relativas em CSS que se baseiam em seus valores no tamanho da janela de visualização do usuário. A viewport é uma área visível da página, ou seja, uma janela do navegador.

- **vw (largura da viewport)**: Representa 1% da largura da viewport. Por exemplo, um elemento com largura de **100vw** ocupará toda a largura da tela, independentemente do seu tamanho.
**vh (altura da viewport)**: Representa 1% da altura da viewport. Da mesma forma ao **vw**, um elemento com altura de **100vh** ocupará toda a altura da tela.

### Por que usar **vw** e **vh**?

- **Layouts responsivos**: Essas unidades são ideais para criar layouts que se adaptem a diferentes tamanhos de tela, como smartphones, tablets e desktops. Ao utilizar **vw** e **vh**, você garante que seus elementos sejam dimensionados proporcionalmente ao viewport, proporcionando uma experiência de usuário mais consistente.
- **Elementos que se ajustam ao conteúdo**: Se você deseja que um elemento tenha um tamanho mínimo ou máximo, mas que se ajuste ao conteúdo disponível, as unidades **vw** e **vh** podem ser muito úteis.
- **Efeitos visuais**: Essas unidades também podem ser utilizadas para criar efeitos visuais interessantes, como elementos que se expandem ou contraem conforme o usuário rola pela página.

### Exemplo:

```
.container {
  width: 80vw;
  height: 50vh;
}
```

Neste exemplo, uma div com a classe "container" terá 80% da largura e 50% da altura da viewport.

### Quando usar vw e vh?

- **Layouts fluidos**: Quando você precisa que os elementos se adaptem de forma proporcional ao tamanho da tela.
- **Elementos que ocupam toda a tela**: Para criar elementos que se estendem por toda a largura ou altura da viewport.
- **Efeitos visuais baseados no tamanho da tela**: Para criar efeitos que variam de acordo com o tamanho da janela de visualização.

### [Voltar ao Menu Avançando em CSS](menu.md)