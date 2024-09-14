# Auto-fill e auto-fit

**Auto-fill** e **auto-fit** são duas funções importantes no CSS Grid que permitem criar layouts responsivos e adaptáveis. Elas são usadas para definir o número de colunas ou linhas em uma grade de forma dinâmica, dependendo do tamanho do contêiner e do conteúdo.

## Auto-fill

- **O que faz**: Crie um número específico de colunas ou linhas, preenchendo o espaço disponível.
- **Como funcion**a: Se o espaço disponível for insuficiente para acomodar todas as colunas ou linhas definidas, a grade será ajustada para caber no espaço disponível.

### Exemplo:

```
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
}
```

Neste exemplo, a grade criará um número de colunas que preencherão o espaço disponível, com cada coluna tendo 100px de largura. Se o espaço disponível for menor que o necessário para 5 colunas, a grade criará apenas o número de colunas que couberem.

## Auto-fit

- **O que faz**: Crie um número de colunas ou linhas que caibam no espaço disponível, sem exceder o número máximo definido.
- **Como funciona**: Se o espaço disponível for insuficiente para acomodar todas as colunas ou linhas definidas, a grade reduzirá o número de colunas ou linhas até que caibam sem espaço disponível.

### Exemplo:

```
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

Neste exemplo, o grid criará um número de colunas que cairão no espaço disponível, com cada coluna tendo um tamanho mínimo de 200px e um tamanho máximo de 1fr (fração do espaço restante). Se o espaço disponível for menor que o necessário para 3 colunas de 200px, a grade criará apenas 2 colunas.

### Quando usar auto-fill e auto-fit

- **auto-fill**: Quando você deseja um número mínimo de colunas ou linhas, mas está disposto a ter mais se o espaço permitir.
- **auto-fit**: Quando você deseja um número máximo de colunas ou linhas, mas está disposto a ter menos espaço para insuficiente.

### Observações:

- Você pode usar `auto-fill` tanto `auto-fit` para colunas quanto para linhas.
- A função `minmax()` é frequentemente usada `auto-fit` para definir um tamanho mínimo e máximo para colunas ou linhas.
- Você pode combinar `auto-fill` e `auto-fit` com outras propriedades do CSS Grid, como `grid-template-rows`, `gap`, e `justify-content`.

### Exemplo de uso prático:

```
<div class="card-container">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <div class="card">Card 5</div>
</div>
```
```
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.card {
  background-color: #f0f0f0;
  padding: 20px;
}
```

Neste exemplo, os cartões serão organizados em uma grade com um número de colunas que se ajusta automaticamente ao tamanho da tela, garantindo que cada cartão tenha um tamanho mínimo de 200px.

### [Menu Layout CSS](menu-introducao.md)