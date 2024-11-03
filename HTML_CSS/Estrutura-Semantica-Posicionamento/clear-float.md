# Float e Clear: Conceitos Essenciais (e um pouco da história)

**Float e clear** são propriedades CSS que foram amplamente utilizadas para criar layouts complexos na web, especialmente antes do surgimento de modelos de layout mais modernos como Flexbox e Grid. Embora tenham sido bastante populares, a compreensão de seus comportamentos e as limitações que apresentam são importantes para quem trabalha com CSS.

## Float

- **Definição**: A propriedade `float`permite que um elemento seja retirado do fluxo normal do documento e posicionado à esquerda ou à direita do seu contêiner, permitindo que outros elementos de texto ou inline fluam ao seu redor.

- **Como funciona**: Ao aplicar `float: left` ou `float: righ` em um elemento, ele "flutua" para a borda especificada e os elementos subsequentes se ajustam ao seu redor.

- **Usos comuns**:

  - Criar layouts com texto envolvendo imagens.
  - Alinhar elementos lado a lado.
  - Colunas simples semelhantes.

## Clear

- **Definição**: A propriedade `clear` controla como um elemento se posiciona em relação aos elementos flutuantes que o precedem.

- **Como funciona**: Ao aplicar `clear: left`, `clear: right`, `clear: both` em um elemento, ele ficará posicionado abaixo de todos os elementos flutuantes à esquerda, à direita ou a ambos os lados, respectivamente. 

- **Usos comuns**:

  - Evite que elementos flutuantes sobreponham outros elementos.
  - Forçar um elemento a começar em uma nova linha.

### Por que float e clear são considerados "ultrapassados"?

- **Complexidade**: Criar layouts complexos usando apenas float e clear pode se tornar bastante complexo e difícil de manter.
- **Problemas de layout**: Em alguns navegadores e cenários, float pode causar problemas de layout inesperados, como o "collapsing margin" (margem colapsada).
- **Flexbox e Grid**: O surgimento do Flexbox e Grid, modelos de layout mais modernos e flexíveis, tornou-se a utilização de float e claro menos necessária para a maioria dos casos.

### Quando usar float e clear hoje?

Embora Flexbox e Grid sejam as ferramentas preferidas para a maioria dos layouts modernos, ainda existem casos em que float e clear podem ser úteis:

- **Layouts simples**: Para layouts muito simples, float pode ser uma solução rápida e eficaz.
- **Compatibilidade com navegadores antigos**: Em alguns casos, float pode ser necessário para garantir a compatibilidade com navegadores mais antigos que não suportam totalmente Flexbox e Grid.
- **Cenários específicos**: Existem cenários mais complexos em que uma combinação de float, Flexbox e Grid pode ser a melhor solução.

## Em resumo:

Float e clear são ferramentas importantes para entender a história do CSS e como os layouts foram construídos no passado. Embora tenham sido amplamente utilizados, o surgimento do Flexbox e Grid tornou-os menos necessários para a maioria dos casos. No entanto, compreender seus conceitos básicos ainda pode ser útil para solucionar problemas de layout e para trabalhar com código legado.

### [Menu Estrutura Semântica e Posicionamento](menu.md)