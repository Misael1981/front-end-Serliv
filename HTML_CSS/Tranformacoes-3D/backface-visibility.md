# O que é `backface-visibility`?

A propriedade CSS `backface-visibility` controla a visibilidade da face traseira de um elemento 3D quando ele é girado.

### Como funciona?

- **Face traseira**: É a face de um elemento que fica oculto quando ele é visto de frente.
- **Valores**: A propriedade `backface-visibility` pode assumir dois valores:
    - **visible**: A face traseira é visível, mesmo quando está oculta.
    - **hidden**: A face traseira é invisível, mesmo quando está oculta.

### Exemplo:

```
#cena4 .plano {
    transform: perspective(600px) rotateY(180deg);
    backface-visibility: hidden;
}
```

Neste exemplo:

- O elemento `.plano` é girado 180 graus em torno do eixo Y, fazendo com que a face traseira fique externa para o usuário.
- A propriedade `backface-visibility: hidden` oculta a face traseira, evitando que o conteúdo dela fique visível quando o cartão for girado.

### Para que serve?

A propriedade `backface-visibility`é útil para criar efeitos visuais mais suaves e naturais, especialmente quando você está trabalhando com animações 3D. Por exemplo:

- **Cartões flip**: Ao girar um cartão, a face traseira pode ficar oculta para evitar que o conteúdo dela fique visível durante a animação.
- **Efeitos de revelação**: A propriedade pode ser usada para revelar gradualmente elementos 3D, ocultando a face traseira até que o elemento fique completamente visível.
- **Otimização de desempenho**: ocultar a face traseira de elementos que não estão sendo vistos pode melhorar o desempenho da renderização da página.

### Observações:

- A propriedade `backface-visibility`só tem efeito quando o elemento possui uma transformação 3D aplicada.
- O valor padrão da propriedade é `visible`.

### Em resumo:

A propriedade CSS `backface-visibility` permite controlar a visibilidade da face traseira de um elemento 3D. Isso é útil para criar efeitos visuais mais suaves e naturais, especialmente em animações.

### [Menu Transformações 3D](introducao-menu.md)