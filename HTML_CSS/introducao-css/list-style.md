# Propriedade CSS list-style


A propriedade CSS `list-style` é usada para estilizar listas não ordenadas (`<ul>`) e ordenadas (`<ol>`). Ela permite que você personalize diversos aspectos da lista, como o tipo de marcador, sua posição e imagem.

### Sintaxe:

```
list-style: [list-style-type] [list-style-position] [list-style-image]
```

### Parâmetros:

- `list-style-type`: Define o tipo de marcador. Opções comuns incluem:
   - `disc`: Círculo sólido
   - `circle`: Círculo vazio
   - `square`: Quadrado
   - `none`: Sem marcador
   - `upper-alpha`: Letras maiúsculas(Mesmo valor que: `upper-latim`)
   - `upper-roman`: Números romanos
   - `url()`: Define uma imagem para o marcador
- `list-style-position`: Define a posição do marcador em relação ao texto do item da lista. Opções comuns incluem:
   - `inside`: O marcador fica dentro da caixa de conteúdo do item
   - `outside`: O marcador fica fora da caixa de conteúdo do item
   - `inline`: O marcador fica na mesma linha que o texto do item
- `list-style-image`: Define uma imagem para ser usada como marcador. A imagem deve estar entre parênteses e o caminho deve ser especificado entre aspas ou aspas simples.

### Exemplo

```
ul {
  list-style: circle inside url("imagem.png");
}
```

### Este exemplo:

- Define o tipo de marcador como um círculo vazio (`circle`)
- Posiciona o marcador dentro da caixa de conteúdo do item (`inside`)
- Usa a imagem "`imagem.png`" como marcador

### Observações:

- Você pode usar qualquer combinação dos parâmetros `list-style-type`, e . `list-style-position` `list-style-image`
- Se você não especificar nenhum parâmetro, os valores padrão serão usados:, e . `list-style-type: disc`  `list-style-position: outside` `list-style-image: none`
- A propriedade `list-style` é uma abreviação para as propriedades `list-style-type`, e . Você pode declarar cada propriedade individualmente se preferir. `list-style-positionlist-style-image`

### [Menu Introdução ao CSS](menu_introducao-CSS.md)