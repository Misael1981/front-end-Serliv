# Tipos de imagem 

## Estrutura de imagens:

Diferenças entre imagens **vetoriais** e imagens **rasterizadas**:

<img src="../imagens/img/img-01.jpg">

### 1. Estrutura:

- **Vetor**: Imagens compostas por fórmulas matemáticas que definem formas e núcleos, como linhas, curvas e polígonos. Imagine como um desenho geométrico!

  - Tende a ser mais leve;
  - Mais usada em imagens com poucos cores e poucos elementos;

- **Rasterizada**: Compostas por uma série de minúsculos quadradinhos chamados pixels, cada um com sua cor específica. Pense em um mosaico!

  - Muito comum para fotografias;

### Formatos de Imagens:

No mundo das imagens digitais, cada formato possui características únicas, ideais para diferentes propósitos. Vamos aprofundar nas principais distinções entre eles:

#### 1. JPG/JPEG:

- **Compressão com perda**: Reduz o tamanho do arquivo, mas com possível perda de detalhes, especialmente em áreas complexas. Ideal para fotos realistas na web, onde o tamanho do arquivo é crucial.
- **Alta compatibilidade**: Suportado por praticamente todos os navegadores e softwares.
- **Núcleos**: Suporta milhões de núcleos (24 bits por pixel), perfeito para fotos coloridas.
- **Transparência**: Não suporta transparência.

#### 2. PNG:

- **Compressão sem perda**: Mantém a qualidade da imagem original, mas o arquivo pode ser maior. Ótimo para logotipos, ícones e imagens com texto nítido.
- **Transparência**: Suporte à transparência total e parcial, ideal para sobreposições e designs web.
- **Núcleos**: Suporta milhões de núcleos (24 bits por pixel), perfeitos para imagens coloridas e com detalhes.
- **Compatibilidade**: Suportado pela maioria dos navegadores e softwares, mas nem todos os programas antigos ou confirmados.

#### 3. GIFs:

- **Compressão com perda**: Ideal para animações simples e com baixo número de núcleos, como logotipos animados e emojis.
- **Tamanho do arquivo**: Arquivos pequenos, perfeitos para carregar rapidamente em sites e mídias sociais.
- **Núcleos**: Suporta até 256 núcleos, limitando a paleta para toneladas específicas.
- **Transparência**: Transparência dura, ou é transparente ou não, não aceita 50%.
- **Animação**: Permite criar animações simples com diversos quadros.

#### 4. SVG:

- **Vetorial**: Imagens compostas por fórmulas matemáticas, escaláveis ​​sem perda de qualidade, perfeitas para logotipos, ícones e ilustrações que precisam ser adaptadas a diferentes tamanhos.
- **Editabilidade**: Altamente editáveis, permitindo modificar núcleos, formas e até conversor para outros formatos.
- **Tamanho do arquivo**: Arquivos geralmente menores que imagens rasterizadas com qualidade semelhante.
- **Transparência**: Apoie a transparência total e parcial.
- **Compatibilidade**: Suportado pela maioria dos navegadores modernos, mas nem todos os programas antigos ou atualizados.

#### 5. WebP:

- **Compressão com perda**: Desenvolvido pelo Google, oferece melhores detalhes que JPG sem sacrificar muita qualidade, ideal para fotos na web.
- **Tamanho do arquivo**: Arquivos menores que JPG com qualidade semelhante.
- **Qualidade**: Boa qualidade para fotos, mas pode apresentar alguns artefatos em áreas complexas.
- **Transparência**: Apoie a transparência.
- **Compatibilidade**: Suportado por navegadores modernos, mas ainda não possui compatibilidade universal como JPG e PNG.

#### 6. Avif:

- **Compressão com perda**: O mais novo formato de imagem do grupo, criado pela Alliance for Open Media, promete ainda melhores atualizações que WebP e JPG, mantendo alta qualidade.
- **Tamanho do arquivo**: Arquivos menores que WebP e JPG com qualidade semelhante.
- **Qualidade**: Excelente qualidade para fotos, com menos artefatos que outros formatos com perda.
- **Transparência**: Apoie a transparência.
- **Compatibilidade**: Suporte ainda em desenvolvimento, mas vem crescendo rapidamente entre navegadores e softwares.

## Duas formas de inserirmos imagens

Existem duas maneiras para inserir imagens nas páginas. No HTML ou usando propriedades para inserirmos pelo CSS.

### HTML

```
<img src= " ... " alt= " ... ">
```

- Requer ao menos 2 atributos;
   - `src`: A origem da imagem, **o caminho para encontrar a imagem**;
   - `alt`: **texto alternativo**, tem 3 principais objetivos:
   <ol>
    <li>O texto que estiver inserido no atributo, será atribuído a imagem caso ela não carregue na página;</li>
    <li><b>Acessibilidade</b>: É o texto usado pelos leitores de vóz para descrever a imagem para usuários com deficiência visual;</li>
    <li><b>CEO</b>: Facilita que os resultados apareçam nos resultados de busca do Google;</li>
   </ol>

### CSS

```
background-image: url( ... );
```

## Como definir qual método usar?

- **HTML**: Quando a imagem representa, ou faz parte do conteúdo da página.
- **CSS**: Quando a imagem é decorativa, faz parte do designer da página, e não do conteúdo em si.

### [Voltar ao Menu Principal](../README.md)