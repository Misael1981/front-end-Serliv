# Tags HTML para semântica em textos

- **sup**: Essa tag serve para indicar texto que deve ser sobrescrito, ou seja, colocado ligeiramente acima da linha de base do texto normal. É comumente utilizada para referenciar notas de rodapé, fórmulas químicas ou números de página.
- **sub**: Similar ao sup, a tag sub indica texto que deve ser subscrito, ou seja, colocado ligeiramente abaixo da linha de base do texto normal. É muito usada em fórmulas químicas para indicar índices inferiores.
- **abbr**: Essa tag define uma abreviação ou acrônimo, fornecendo uma descrição completa do termo abreviado. Ao passar o mouse sobre a abreviação, o navegador geralmente exibe a descrição completa em um tooltip. Isso ajuda a melhorar a acessibilidade e a compreensão do texto.
- **dfn**: A tag dfn define um termo que está sendo definido pela primeira vez em um documento. O texto dentro da tag dfn é geralmente em itálico e, assim como a tag abbr, pode ter uma descrição mais completa em um tooltip.

### Exemplo:

```
<p>A fórmula da água é H<sub>2</sub>O, onde H é o símbolo do <dfn title="Hidrogênio">hidrogênio</dfn> e O é o símbolo do oxigênio.</p>
<p>Na minha opinião, a <abbr title="Inteligência Artificial">IA</abbr> está revolucionando o mundo.</p>
```

#### Resultado:

A fórmula da água é H₂O, onde H é o símbolo do hidrogênio e O é o símbolo do oxigênio.

Na minha opinião, a IA está revolucionando o mundo.

## Resumo:

|Marcação	|Descrição|
|-----------|---------|
|sup|Texto sobrescrito|
|sub|Texto sobrescrito|
|abbr|Abreviação|
|dfn|Definição de um termo|

### Quando usar cada uma:

- **sup e sub**: Principalmente em fórmulas matemáticas e químicas, para indicar índices superiores e inferiores.
- **abbr**: Para abreviações e acrônimos que podem não ser familiares ao leitor.
- **dfn**: Para definir termos técnicos ou específicos de um determinado assunto pela primeira vez em um texto.