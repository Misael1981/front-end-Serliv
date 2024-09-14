# Grid-area

Uma outra maneira de determinar as *grid-lines* é através da propriedade **grid-area**. Um atalho para as propriedades:

- `grid-row-start`

- `grid-column-start`

- `grid-row-end`

- `grid-column-end`

## Sintaxe

```
grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end
```

### Exemplo:

```
.gridItem:nth-child(6) {
    background-color: blueviolet;
    grid-area: 4 / 1 / -1 / 2;
}
```

<img src="img/grid-area.png">

- O elemento 6 começa na linha 4 e vai até a última linha, e começa na coluna 1 e termina na 2.


### [Menu Layout CSS](menu-introducao.md)