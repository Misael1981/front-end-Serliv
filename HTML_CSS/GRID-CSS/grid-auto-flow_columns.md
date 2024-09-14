# grid-auto-flow e grid-auto-columns 

## grid-auto-flow

A propriedade `grid-auto-flow` controla a ordem em que os itens são colocados em uma grade. Ela define o fluxo de itens para as linhas ou colunas.

### Valores possíveis:

- **coluna**: Os itens são exibidos em colunas, da esquerda para a direita.
- **linha**: Os itens são colocados em linhas, de cima para baixo.
- **denso**: O grid tenta preencher os espaços vazios antes de iniciar uma nova linha ou coluna.

### Exemplo:

```
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: column dense;
}
```

Neste exemplo, os itens serão colocados em colunas, e a grade tentará preencher os espaços vazios antes de iniciar uma nova coluna.

## grid-auto-columns

A propriedade `grid-auto-columns` define o tamanho das colunas que serão criadas automaticamente quando o conteúdo de uma grade for expandido além das colunas especificadas especificamente com `grid-template-columns`.

### Exemplo:

```
.grid-container {
  display: grid;
  grid-template-rows: 100px;
  grid-auto-columns: minmax(100px, auto);
}
```

Neste exemplo, as colunas subsequentes não terão no mínimo 100px de largura e se expandirão para acomodar o conteúdo.

### Combinando grid-auto-flow e grid-auto-columns

Você pode combinar `grid-auto-flow`e `grid-auto-columns` criar layouts mais complexos. Por exemplo, você pode criar uma grade com colunas de tamanho automático e um fluxo de itens densos.

### Exemplo:

```
.grid-container {
  display: grid;
  grid-template-rows: 100px;
  grid-auto-columns: minmax(100px, auto);
  grid-auto-flow: column dense;
}
```

### Considerações adicionais

- Você pode usar `grid-auto-flow` juntos `grid-auto-column` sou separadamente.
- A propriedade `grid-auto-rows` funciona de forma semelhante a `grid-auto-columns`, mas para as linhas.
- Você pode usar a função `minmax()` com `grid-auto-columns` e `grid-auto-rows` para definir um tamanho mínimo e máximo para as colunas ou linhas.

### [Menu Layout CSS](menu-introducao.md)