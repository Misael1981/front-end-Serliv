# Função CSS `clamp()`

É uma ferramenta poderosa e bastante útil para criar designs responsivos, especialmente quando se trata de ajustar o tamanho de fontes de forma adaptável.

### Para que serve o `clamp()`?

Em poucas palavras, o `clamp()` permite definir um tamanho mínimo, um tamanho preferido e um tamanho máximo para um elemento. O valor final escolhido pelo navegador será sempre o mais próximo possível do tamanho preferido, mas nunca menor que o mínimo e nunca maior que o máximo.

### Como funciona na prática?

A sintaxe básica é a seguinte:

```
font-size: clamp(min-size, pref-size, max-size);
```

- **min-size**: O menor tamanho que o elemento pode ter.
- **pref-size**: O tamanho preferido para o elemento.
- **max-size**: O maior tamanho que o elemento pode ter.

### Exemplo:

```
font-size: clamp(1rem, 2vw + 1rem, 3rem);
```

Neste exemplo:

- O tamanho da fonte nunca será menor que 1rem (16 pixels).
- O tamanho preferido é 2vw (2% da largura da viewport) + 1rem. Isso significa que, idealmente, o tamanho da fonte aumentou proporcionalmente à largura da tela, mas com um mínimo de 1rem.
- O tamanho máximo é 3rem (48 pixels). A fonte nunca ultrapassará esse limite, mesmo em telas muito grandes.

### Por que usar o clamp()?

- **Flexibilidade**: Permite criar designs que se adaptam a diferentes tamanhos de tela, desde dispositivos móveis até monitores de desktop.
- **Controle preciso**: Você define os limites mínimos e máximos, garantindo que o tamanho do texto esteja sempre dentro da faixa desejada.
- **Melhora a experiência do usuário**: Textos com tamanho adequado facilitam a leitura e tornam seu site mais agradável.

### Quando usar o clamp()?

- **Tamanhos de fonte**: É o uso mais comum, mas o clamp() pode ser aplicado a outras propriedades CSS que aceitam valores de comprimento.
- **Espaçamentos**: Para criar layouts que se adaptem a diferentes tamanhos de tela.
- **Outros**: Em qualquer situação em que você precise definir um valor que esteja entre um mínimo e um máximo.

s
### [Menu cores e efeitos](menu_cores-efeitos.md)