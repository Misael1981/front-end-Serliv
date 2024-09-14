# `grid-auto-rows` e função `minmax()`

## O que é `grid-auto-rows`?

A propriedade `grid-auto-rows`no CSS Grid é utilizada para definir o tamanho das linhas que serão criadas automaticamente quando o conteúdo de uma grade se expandir além das linhas definidas especificamente com `grid-template-rows`. Em outras palavras, ela estabelece um padrão para as novas linhas que surgirem.

### Quando usar:

- **Conteúdo sonoro**: Quando você não sabe exatamente quantas linhas serão necessárias, e quer que a grade se adapte automaticamente.
- **Layouts flexíveis**: Para criar layouts que se ajustam a diferentes tamanhos de tela.

# A função `minmax()`

A função `minmax()`é usada para definir um intervalo de tamanhos para uma faixa do grid. Ela recebe dois argumentos:

- **Mínimo**: O tamanho mínimo que a faixa pode ter.
- **Máximo**: O tamanho máximo que a faixa pode ter.

### Por que usar `minmax()`?

- **Flexibilidade**: Permite criar faixas que se adaptam a diferentes conteúdos, garantindo um tamanho mínimo e um máximo.
- **Responsividade**: Ideal para criar layouts que se adaptem a diferentes tamanhos de tela.

## Combinando `grid-auto-rows` e `minmax()`

Ao combinar `grid-auto-rows`com você `minmax()`, você pode criar uma grade que se ajuste de forma inteligente ao conteúdo, garantindo que as linhas tenham um tamanho mínimo e máximo definido.

### Exemplo:

```
.grid-container {
  display: grid;
  grid-template-rows: 100px; /* Primeira linha com 100px de altura */
  grid-auto-rows: minmax(50px, auto); /* Linhas subsequentes com no mínimo 50px e no máximo o tamanho do conteúdo */
}
```
### Neste exemplo:

- A primeira linha terá exatamente 100px de altura.
- As linhas subsequentes não terão no mínimo 50px de altura. Se o conteúdo de uma linha for maior que 50px, a linha se expandirá para acomodar todo o conteúdo.

### Exemplo Prático: Criando um Card Deck Responsivo

```
<div class="card-deck">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
</div>
```
```
.card-deck {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  gap: 20px;
}

.card {
  background-color: #f0f0f0;
  padding: 20px;
}
```

### Neste exemplo:

- Os cartões serão organizados em colunas, com um número automático de colunas que se adapta ao tamanho da tela.
- Cada uma terá no mínimo 200px de largura e se expandirá para ocupar o espaço restante da tela.
- As linhas terão no mínimo 150px de altura e se expandirão para acomodar o conteúdo de cada cartão.

### Outros Usos e Considerações

- `grid-auto-columns`: Funciona de forma semelhante ao `grid-auto-rows`, mas para as colunas.
- `repetir()`: Pode ser usado `grid-auto-rows` para criar um número específico de linhas com o mesmo tamanho.
- `fr`: Uma unidade `fr`é útil para criar faixas que se dividem proporcionalmente ao espaço disponível.


### [Menu Layout CSS](menu-introducao.md)