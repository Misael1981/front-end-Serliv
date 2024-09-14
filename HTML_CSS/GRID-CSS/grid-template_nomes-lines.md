# Grid-template

**`grid-template`** com apenas essa propriedade podemos determinar o `grid-template-columns`, `grid-template-rows` e o `grid-template-areas`.

### Exemplo:

```
grid-template: 
    "header   header   header"   75px
    "nav      nav      aside"    50px
    "main     main     aside"    1fr
    "footer   footer   footer"   50px
    / 1fr     1fr      1fr;
```

# Nomeando grid-lines

## O que são Grid-Lines?

Em um contexto de design digital, especialmente no desenvolvimento web, "grid-lines" ou "linhas de grade" referem-se às linhas imaginárias que dividem uma área de design em uma estrutura organizada. Essa estrutura serve como base para posicionar elementos de forma precisa e consistente.

## Por que nomear Grid-Lines?

Nomear linhas de grade pode parecer um passo extra, mas traz diversos benefícios para o processo de design e desenvolvimento:

- **Comunicação**: Facilita a comunicação entre designers e desenvolvedores. Ao especificar nomes específicos de cada linha, todos os membros da equipe entendem exatamente a qual parte da estrutura estão se referindo.
- **Organização**: Crie um sistema mais organizado e escalável. Ao invés de se referir a linhas por suas posições numéricas (por exemplo, "a linha 100px do topo"), você pode usar nomes mais descritivos (como "header", "main-content", "footer").
- **Reutilização**: Permite a reutilização de layouts em diferentes partes do projeto. Ao nomear linhas de grade, você pode criar um sistema de grade que pode ser aplicado em várias páginas ou componentes.
- **Flexibilidade**: Facilita a adaptação do design a diferentes tamanhos de tela. Ao ajustar as posições das linhas de grade nomeadas, você pode criar layouts responsivos que se adaptam a dispositivos móveis e desktops.

### Como nomear Grid-Lines?

A forma de nomear as linhas de grade pode variar dependendo do projeto e das opções da equipe, mas algumas práticas incluem comuns:

- **Nomes descritivos**: Utilize nomes que reflitam a função da área que uma linha de grade define (por exemplo, "navbar", "sidebar", "content-area").
- **Nomes consistentes**: Mantenha uma nomenclatura consistente em todo o projeto para evitar confusão.
- **Nomes hierárquicos**: Se necessário, utilize uma classificação de nomes para indicar a relação entre as diferentes linhas de grade.

### Nomeando grid-lines de maneira implícita

Na `grid-template` o que estão sendo nomeadas até agora são as `grid-cell`, mas também é possível nomear as `grid-lines`.

```
grid-template-rows: [header-start] 75px [header-end nav-start] 50px [nav-end main-start] 1fr [main-end footer-start] 50px [footer-end];
```

### Explicação:

- `grid-template-rows`: Esta propriedade CSS define o tamanho da trilha e os nomes das linhas do contêiner de grade.
- **Tamanhos das pistas**:
    - `75px`: A primeira faixa tem uma altura fixa de 75 pixels.
    - `50px`: A segunda e quarta faixas têm uma altura fixa de 50 pixels.
    - `1fr`: A terceira trilha ocupa o espaço restante disponível usando uma unidade de fração flexível (fr). Isso significa que ela crescerá ou encolherá para preencher o espaço restante depois que as outras trilhas forem dimensionadas.

- **Nomes das linhas**:
    - `[header-start]`: Este nome de linha marca o início da primeira faixa, que representa a seção de cabeçalho.
    - `[header-end nav-start]`: Este nome de linha marca o fim da primeira faixa e o início da segunda faixa, que representa a seção de navegação.
    - `[nav-end main-start]`: Este nome de linha marca o fim da segunda faixa e o início da terceira faixa, que representa a seção de conteúdo principal.
    - `[main-end footer-start]`: Este nome de linha marca o fim da terceira faixa e o início da quarta faixa, que representa a seção de rodapé.
    - `[footer-end]`: Este nome de linha marca o fim da quarta faixa.

### Tutorial:

1. **Crie um contêiner de grade**:

    - Configure um elemento de contêiner (por exemplo, um `div`) e aplique a `display: grid;`propriedade para torná-lo um contêiner de grade.

2. **Definir tamanhos de trilha e nomes de linhas**:

    - Use a `grid-template-rows`propriedade para especificar os tamanhos das trilhas e os nomes das linhas, conforme mostrado no trecho de código.

3. **Coloque os itens dentro da grade**:

    - Adicione elementos filho (por exemplo, `div`s) ao contêiner de grade e posicione-os usando as propriedades `grid-row-start` e `grid-row-end`. Por exemplo:

```
.item1 {
    grid-row-start: header-start;
    grid-row-end: header-end;
}

.item2 {
    grid-row-start: nav-start;
    grid-row-end: nav-end;
}

.item3 {
    grid-row-start: main-start;
    grid-row-end: main-end;
}

.item4 {
    grid-row-start: footer-start;
    grid-row-end: footer-end;
}
```

```
<div class="container">
    <div class="item1">Header</div>
    <div class="item2">Navigation</div>
    <div class="item3">Main Content</div>
    <div class="item4">Footer</div>
</div>
```

Este código criará um layout de grade com quatro itens: um cabeçalho, navegação, conteúdo principal e rodapé. O cabeçalho e o rodapé terão alturas fixas, enquanto o conteúdo principal ocupará o espaço restante.

### [Menu Layout CSS](menu-introducao.md)