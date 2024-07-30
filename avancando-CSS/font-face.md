# Font-face: Usando Fontes Personalizadas no CSS

## O que é `@font-face`?

É uma regra CSS que permite que você incorpore fontes personalizadas em suas páginas da web. Antes disso `@font-face`, tínhamos limitações às fontes padrão instaladas nos computadores dos usuários.

### Como funciona?

1. **Importar a fonte**: Você precisa criar um arquivo de fonte (geralmente nos formatos TTF, WOFF, WOFF2 ou EOT) e hospedá-lo em um servidor.
2. **Defina a regra** `@font-face`: Em sua folha de estilo CSS, você usa uma regra `@font-face`para especificar o nome da fonte, o caminho para o arquivo da fonte e os formatos suportados.
3. **Utilizando a fonte**: Depois de importar e definir a fonte, você pode usá-la como qualquer outra fonte em seu CSS, especificando o nome da fonte na propriedade `font-family`.

#### Exemplo:

```
@font-face {
  font-family: MyCustomFont;
  src: url('myfont.woff2') format('woff2'),
       url('myfont.woff') format('woff'),
       url('myfont.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: MyCustomFont, sans-serif;
}
```

### Explicação:

- `@font-face { ... }`: Inicia uma regra para definir uma fonte personalizada.
- `font-family`: MyCustomFont;: Defina o nome da fonte que você irá usar no CSS.
- `src: url('myfont.woff2') format('woff2'), ...`: Especifica os arquivos de fonte e seus formatos suportados. É incluído diferentes formatos recomendados para garantir a compatibilidade entre navegadores.
- `font-weight: normal;`e ` font-style: normal;`: Definir o peso e estilo padrão da fonte.

### Importância:

- **Personalização**: Permite criar designs únicos e consistentes.
- **Melhor experiência do usuário**: Fontes personalizadas podem melhorar a legibilidade e a aparência do seu site.
- **Branding**: Ajuda a fortalecer a identidade visual da sua marca.

### Considerações:

- **Tamanho do arquivo**: Fontes podem aumentar o tamanho da página, portanto, otimize os arquivos.
- **Formatos de fonte**: Certifique-se de incluir formatos suportados pelos navegadores.
- **Licenciamento**: Respeite os direitos autorais das fontes utilizadas.

### [Voltar ao Readme principal](../README.md)