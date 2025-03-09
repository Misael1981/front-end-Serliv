# Unidades de Medida no CSS e Acessibilidade: Pixel, Rem e Em

A escolha da unidade de medida no CSS é uma decisão crucial, especialmente quando consideramos a acessibilidade. Cada unidade possui suas particularidades e implicações no layout e na experiência do usuário.

## Pixel (px)

- **Fixo e absoluto**: O pixel representa um único ponto na tela. Seu tamanho é específico e não se adapta a diferentes tamanhos de tela ou preferências do usuário.
- **Problemas de acessibilidade**:
    - **Zoom**: Quando o usuário aumenta o zoom do navegador para melhorar a legibilidade, elementos com tamanhos fixos em pixels podem ficar pequenos ou sobrepostos, dificultando a visualização.
    - **Fontes**: Definir o tamanho da fonte em pixels impede que o usuário ajuste o tamanho da fonte de acordo com suas necessidades, como em casos de baixa visão.

## Em (em)

- **Relativo ao tamanho da fonte pai**: O em é relativo ao tamanho da fonte do elemento pai. Isso significa que se você definir o tamanho da fonte de um elemento como 1em, ele terá o mesmo tamanho da fonte do seu pai.
- **Flexibilidade**: O em permite criar layouts mais flexíveis e responsivos, adaptando-se a diferentes tamanhos de tela.
- **Acessibilidade**:
    - **Ajustes do usuário**: O usuário pode aumentar o tamanho da fonte do navegador, e todos os elementos que utilizam a unidade serão escalados proporcionalmente.
    - **Hierarquia visual**: O que ajuda a estabelecer uma classificação visual clara, onde elementos com tamanhos de fonte maiores são percebidos como mais importantes.

### Rem (rem)

- **Relativo à fonte raiz**: O rem é semelhante ao em, mas é relativo à fonte raiz (root) do documento, geralmente o elemento html.
- **Global e consistente**: Isso significa que você pode definir um tamanho de fonte base para todo o seu site e usar o rem para criar uma escala consistente para todos os elementos.
- **Acessibilidade**:
    - **Controle centralizado**: Ao ajustar a fonte raiz, você pode alterar o tamanho de todas as fontes do site uma única vez, facilitando a personalização.
    - **Acessibilidade**: O rem oferece os mesmos benefícios de acessibilidade que o em, além de permitir um controle mais global sobre o tamanho das fontes.

## Pixel em font-size e media queries

- **Evite o pixel no tamanho da fonte**: Como mencionado anteriormente, o pixel no tamanho da fonte limita a capacidade do usuário de ajustar o tamanho da fonte. Preferir unidades relacionadas, como em ou reais, é fundamental para garantir a acessibilidade.
- **Media queries e unidades relacionadas**: As media queries são uma ferramenta poderosa para criar layouts responsivos. Ao combinar consultas de mídia com unidades relacionadas, você pode criar layouts que se adaptam a diferentes tamanhos de tela e dispositivos, garantindo uma experiência consistente para todos os usuários.

### Em resumo:

- **Priorize unidades relacionadas**: Em e rem são as melhores opções para garantir a acessibilidade e a flexibilidade do seu layout.
- **Evite o pixel no tamanho da fonte**: O pixel limita a capacidade do usuário de ajustar o tamanho da fonte.
- **Combine consultas de mídia e unidades relacionadas**: Crie layouts responsivos e acessíveis.
- **Defina uma fonte raiz**: Use o rem para criar uma escala consistente em todo o seu site.

### Exemplo:

```
html {
  font-size: 16px; /* Fonte raiz */
}

body {
  font-size: 1.2rem; /* 19.2px */
}

h1 {
  font-size: 2rem; /* 32px */
}
```

Ao usar o rem, você tem um ponto de controle centralizado para ajustar o tamanho das fontes de todo o seu site, garantindo uma experiência mais acessível e personalizada para seus usuários.

### [Menu Responsividade](Introducao-menu.md)