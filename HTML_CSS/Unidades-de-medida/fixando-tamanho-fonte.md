# Fixando o tamanho da fonte em 62,5% no HTML

## Por que 62,5%?

Essa escolha pode parecer arbitrária à primeira vista, mas há uma lógica por trás dela. Ao definir o `font-size` elemento `html` como `62,5%`, estamos criando uma base mais fácil de trabalhar quando utilizamos as unidades `em`e `rem`.

### Como funciona:

- **Base 16px**: A maioria dos navegadores possui um tamanho de fonte padrão de 16px para o elemento `html`.
- **Cálculo**: `62,5%` de resultado de 16px em 10px.
- **Nova base**: Ao definir o `font-size` em `62,5%`, estamos, na prática, estabelecendo uma nova base de 10px para o nosso documento.

### Por que usar 10px como base?

- **Facilidade de design**: Trabalhar com múltiplos de 10 é mais intuitivo e facilita os cálculos. Por exemplo, para definir um tamanho de fonte de 16px, basta usar `1.6rem`.
- **Escalabilidade**: Ao utilizá `em` e `rem`, podemos criar layouts que escalam proporcionalmente ao tamanho da fonte definida pelo usuário. Isso é fundamental para garantir a acessibilidade do seu site.

### Exemplo:

```
html {
  font-size: 62.5%; /* Estabelece a base de 10px */
}

body {
  font-size: 1.6rem; /* Equivalente a 16px */
}

h1 {
  font-size: 2.4rem; /* Equivalente a 24px */
}
```

## Vantagens:

- **Maior controle sobre o tamanho das fontes**: Você tem um ponto de partida consistente para definir os tamanhos de fonte em todo o seu site.
- **Melhora na legibilidade**: Ao usar `em`e `rem`, você pode criar layouts mais legíveis, pois o tamanho das fontes se adapta ao tamanho da tela e às opções do usuário.
- **Facilita a manutenção**: Ao centralizar a definição do tamanho da fonte no elemento `html`, você torna mais fácil fazer configurações globais no tamanho das fontes.
- **Melhor acessibilidade**: Ao permitir que os usuários ajustem o tamanho da fonte do navegador, você garante que seu site seja acessível a pessoas com deficiência visual.

**Em resumo**, fixar o `font-size` em `62,5%` no elemento `html` é uma prática recomendada para quem deseja utilizar as unidades `em` e `rem` de forma eficiente e criar layouts mais flexíveis e acessíveis.

### [Voltar ao Menu Avançando em CSS](menu.md)