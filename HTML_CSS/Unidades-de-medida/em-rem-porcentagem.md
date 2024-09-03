# Entendendo as Unidades de Medida em CSS: em, rem e Porcentagem

As unidades de medida `em`,`rem` e `porcentagem` são ferramentas poderosas no CSS para criar layouts responsivos e flexíveis. Vamos entender cada uma delas: 

## Em (`em`)

- **Baseado no tamanho da fonte**: O valor `1em` equivalente ao tamanho da fonte do elemento pai.
- **Relativo ao contexto**: Isso significa que o tamanho de um elemento definido `em` pode variar dependendo do tamanho da fonte do seu pai.
- **Exemplo**: Se o elemento pai tiver um `font-size` de `16px` e você definir um elemento filho com `font-size`: `2em`, o elemento filho terá `32px`.

### Quando usar:

- **Hierarquias de fontes**: Para criar escalas de fontes relacionadas ao tamanho da fonte do pai.
- **Layouts flexíveis**: Para criar layouts que se adaptem a diferentes tamanhos de tela.

## Rem (`rem`)

- **Baseado na fonte raiz**: O valor `1rem` equivalente ao tamanho da fonte da raiz (geralmente o elemento `<html>`).
- **Global**: Isso significa que o tamanho de um elemento definido em `rem`é sempre relativo ao tamanho da fonte da raiz, independentemente de sua posição na árvore DOM.
- **Exemplo**: Se você definir `html` { `font-size: 16px;` }um elemento com font-size: `2rem`, ele terá `32px`, independentemente do tamanho da fonte de seus pais.

### Quando usar:

- **Layouts responsivos**: Para criar layouts que se adaptem a diferentes tamanhos de tela e preferências do usuário.
- **Escalas de fontes globais**: Para definir uma escala de fontes consistente em todo o seu site.

## Porcentagem (%)

- **Relativo ao elemento pai**: O valor de `100%` equivalência à largura ou altura total do elemento pai.
- **Flexível**: As porcentagens são ideais para criar layouts que se adaptem dinamicamente ao tamanho do container.
- **Exemplo**: Se um elemento tiver `width: 50%`, ele ocupará metade da largura do seu elemento pai.

### Quando usar:

- **Layouts responsivos**: Para criar layouts que se adaptem a diferentes tamanhos de tela e dispositivos.
- **Divisão de espaço**: Para dividir o espaço de um container entre vários elementos.

### Qual escolher?

|Unidades|Quando usar| Vantagens| Desvantagens|
|----------|---------|----------|--------------|
|`em`|Hierarquias de fontes, layouts flexíveis|Relativo ao contexto, fácil de ajustar fontes|Pode se tornar complexo em layouts aninháveis|
|`rem`|Layouts responsivos, escalas globais|Global, consistente|Requer definição da fonte raiz|
|`%`|Layouts responsivos, divisão de espaço|Flexível, fácil de entender|Depende do tamanho do elemento pai|

### Em resumo:

- **em** é ideal para ajustar fontes dentro de uma faixa.
- **rem** é ótimo para criar layouts responsivos e escalas de fontes globais.
- **Porcentagem** é perfeita para dividir o espaço e criar layouts flexíveis.

#### Exemplo prático:

```
html {
  font-size: 16px;
}

body {
  font-size: 1.2rem; /* 19.2px */
}

.container {
  width: 80%;
}

.box {
  font-size: 1.5em; /* 28.8px dentro da container */
  width: 33.33%;
}
```

- Uma estratégia muito comum, é, na tag `html`, declarar um tamanho de fonte porcentual:

```
html {
  font-size: 62.5%;
}
```

- As unidades deixam de valer `16px` e passam a var `10px`.

**Dica**: Use uma combinação dessas unidades para criar layouts mais complexos e responsivos. Por exemplo, você pode usar `rem`para definir o tamanho da base da fonte e `%` para dividir o espaço entre os elementos.

Gostaria de ver mais exemplos ou alguma dúvida específica?

### [Voltar ao menu Readme](../README.md)