# Propriedade background-repeat do CSS

## O que é background-repeat?

A propriedade `background-repeat` no CSS controla como uma imagem de fundo se repete em um elemento. Ela determina se a imagem será repetida horizontalmente, verticalmente, em ambas as direções ou se não será repetida.

### Por que usar `background-repeat`?

- **Criar padrões**: Ao repetir uma imagem, você pode criar padrões visuais interessantes para o seu design.
- **Preencher espaços**: Se você precisa preencher uma área grande com uma imagem, a repetição pode ser útil.
- **Criar efeitos**: A repetição de imagens pode ser usada para criar efeitos visuais como texturas ou mosaicos.

### Valores da propriedade `background-repeat`

|**Valor**|	**Descrição**|
|------|---------|
|`repeat`|	Repete a imagem tanto na horizontal quanto na vertical. (Valor padrão)|
|`repeat-x`	|Repete a imagem apenas na horizontal.|
|`repeat-y`|	Repete a imagem apenas na vertical.|
|`no-repeat`|	Não repete a imagem.|

### Exemplos práticos

```
.imagensFundo {
    background-image: url('img/bg.jpg');
    background-size: contain;
    background-repeat: no-repeat;
}
```

### Com diferentes valores de background-repeat:

```
/* Repete em todas as direções */
.box {
  background-repeat: repeat;
}

/* Repete apenas na horizontal */
.box {
  background-repeat: repeat-x;
}

/* Repete apenas na vertical */
.box {
  background-repeat: repeat-y;
}

/* Não repete a imagem */
.box {
  background-repeat: no-repeat;
}
```

### Combinando com outras propriedades

A propriedade `background-repeat` pode ser combinada com outras propriedades de fundo, como `background-size`, `background-position` e `background-attachment` para criar efeitos mais complexos.

- **background-size**: Define o tamanho da imagem de fundo.
- **background-position**: Define a posição inicial da imagem de fundo.
- **background-attachment**: Define se a imagem de fundo se move com o conteúdo ou permanece fixa.

### [Menu Trabalhando com Imagens](menu-imagens.md)