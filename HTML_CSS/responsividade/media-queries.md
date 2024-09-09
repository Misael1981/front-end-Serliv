#  Media Queries em CSS - Adaptando seu site para diferentes dispositivos

## O que são Media Queries?

*Media Queries* são uma extensão dos media types em CSS que permitem criar regras ainda mais específicas, baseadas em características do dispositivo, como largura da tela, resolução, orientação (retrato ou paisagem) e muito mais. Isso é fundamental para criar experiências web responsivas e otimizadas para diversos tamanhos de tela, como smartphones, tablets e desktops.

### Por que usar *Media Queries*?

- **Responsividade**: Adapte o layout e o conteúdo do seu site para diferentes tamanhos de tela.
- **Acessibilidade**: Ofereça uma experiência melhor para usuários com diferentes necessidades, como aqueles que utilizam leitores de tela.
- **Impressão**: Crie estilos específicos para a versão impressa do seu documento.

### Sintaxe básica:

```
@media (media-feature: value) {
  /* Estilos para o dispositivo que atende à condição */
}
```

- **media-feature**: A característica de mídia que você deseja verificar.
- **value**: O valor que a característica de mídia deve ter para que os estilos sejam aplicados.

### Características de mídia comuns:

- **width**: Largura da tela.
- **height**: Altura da tela.
- **device-width**: Largura do dispositivo.
- **device-height**: Altura do dispositivo.
- **orientation**: Orientação da tela (portrait ou landscape).
- **resolution**: Resolução da tela (dpi).
- **aspect-ratio**: Proporção da tela.
- **color**: Tipo de saída de cor (color, grayscale, etc.).

### Exemplos de uso:

- ### Criar um layout responsivo:

```
@media (min-width: 768px) {
  /* Estilos para telas com largura mínima de 768 pixels */
  nav {
    display: flex;
  }
}
```

- ### Ocultar elementos em dispositivos móveis:

```
@media (max-width: 600px) {
  img.large {
    display: none;
  }
}
```

- ### Ajustar o tamanho da fonte:

```
@media (font-size: 16px) {
  body {
    font-size: 18px;
  }
}
```

### Combinando múltiplas condições:

Você pode combinar várias condições em uma única *media query* usando operadores lógicos:

- **and**: Ambas as condições devem ser verdadeiras.
- **or**: Pelo menos uma das condições deve ser verdadeira.
- **not**: A condição não deve ser verdadeira.

### Exemplo:

```
@media (min-width: 768px) and (orientation: landscape) {
  /* Estilos para telas com largura mínima de 768 pixels e orientação paisagem */
}
```

### Dicas para uso eficaz de Media Queries:

- **Comece com um layout básico**: Crie um layout que funcione bem em dispositivos maiores e, em seguida, use media queries para adaptá-lo para dispositivos menores.
- **Teste em diferentes dispositivos**: Verifique como seu site se comporta em diferentes dispositivos e tamanhos de tela.
- **Use uma ferramenta de desenvolvimento**: Ferramentas como o Chrome DevTools podem ajudar você a visualizar e ajustar seus estilos responsivos.
- **Priorize a experiência do usuário**: Certifique-se de que seu site seja fácil de usar e navegar em todos os dispositivos.

### Conclusão:

As media queries são uma ferramenta essencial para criar sites responsivos e acessíveis. Ao dominar esses conceitos, você poderá oferecer uma experiência de navegação personalizada para cada usuário, independentemente do dispositivo que ele esteja utilizando.

### [Menu Responsividade](Introducao-menu.md)