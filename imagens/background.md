# background

A principal propriedade para manipulação do plano de fundo de uma página ou dos elementos nela declarados é a `background`. Com ela podemos manipular o plano de fundo utilizando uma sintaxe abreviada e que nos permite definir todas opções a ela relacionadas de forma mais rápida e em apenas uma linha de código.

Exemplo de uso:

```
background: #FFFFFF url("pasta/Imagem.jpg") no-repeat right top fixed;
```

No código acima, configuramos a cor de fundo, a imagem a ser utilizada, se ela deve ser repetida para ocupar todo o fundo do elemento, as posições horizontal e vertical e a forma como a imagem será anexada ao documento.

Além dela, as CSS trazem também propriedades que nos permitem configurar cada opção relacionada ao plano de fundo individualmente, e sobre as quais abordaremos a seguir.

## background-color

Utilizamos essa propriedade para alterar a cor do plano de fundo, seja de um elemento ou do documento como um todo. Para isso, basta atribuir a cor desejada à propriedade background-color, declarada dentro do seletor no qual ela deve ser aplicada.

Exemplos de uso:

```
/* Plano de fundo em vermelho e opacidade de 50% */
background-color: rgba(255,0,0,0.5);
```
Nesse exemplo utilizamos a função RGBA das CSS para definir o vermelho com uma transparência como cor de fundo.

## background-image

Esta propriedade é utilizada para inserir imagens como plano de fundo de um elemento. Para isso, fazemos uso da função `url()`, para a qual passamos como parâmetro o caminho da imagem a ser inserida.

Por padrão, a imagem é inserida no canto superior esquerdo e repetida na vertical e na horizontal até que tenha preenchido 100% do corpo do elemento. Porém, podemos customizar esse e outros comportamentos com as propriedades que veremos a seguir.

Exemplo de uso:

```
background-image: url("pasta/Imagem.jpg");
```

Neste exemplo será renderizada uma imagem com extensão .JPG, mas nada impede que seja uma imagem com extensão diferente, desde que suportado pelo CSS. Além disso, é importante destacar que por se tratar de uma URL podemos indicar tanto o caminho de uma imagem local, quando de uma hospedada em um servidor externo. As aspas na URL são necessárias quando há espaços em branco no caminho.

## background-repeat
Utilizamos esta propriedade para definir a maneira como a imagem será repetida no elemento. Podemos especificar que a imagem se repetirá em todos os eixos, apenas no horizontal, apenas no vertical ou não se repetirá.

Exemplos de uso:

```
background-repeat: no-repeat;
```
### Opções para background-repeat

A tabela a seguir apresenta todos os valores que podemos atribuir a `background-repeat`.

|                   |                |
|-------------------|----------------|
|repeat-y | Repete-se na vertical. |
|repeat-x | Repete-se na horizontal.|
| no-repeat |Não se repete. |
|repeat|Valor padrão, repete-se nas duas direções.|
|   |   |

## background-position

Com esta propriedade podemos definir a posição na qual a imagem será inserida. Essa posição pode ser especificada utilizando uma combinação de valores, sendo o primeiro a posição horizontal e o segundo a posição vertical.

Exemplo de uso:

```
background-position: right top;
```

### Opções para background-position

O local de inserção de uma imagem pode ser especificado com valores pré-definidos para os eixos horizontal e vertical conforme as tabelas abaixo.

| Posição horizontal                         | |
|-----------|--------------|
|right |Sinaliza que a imagem será renderizada à direita.|
|center|Sinaliza que a imagem será renderizada no centro.|
|left|Sinaliza que a imagem será renderizada à esquerda.|


|Posição vertical|         |
|--------------|-----------|
|top |	Sinaliza que a imagem será renderizada no topo.|
|center|	Sinaliza que a imagem será renderizada no centro.|
|bottom|Sinaliza que a imagem será renderizada na parte de baixo.|

No entanto, também podemos especificar o posicionamento de uma imagem com mais precisão, atribuindo à **background-position** valores em **porcentagem**, **pixels** ou **outra** unidade de medida das CSS.

Por padrão, a imagem é inserida na posição 0% 0% ou 0px 0px, a qual representa o canto superior esquerdo. Ao atribuirmos outros valores, movemos a imagem para a direita e para baixo.

Além disso, podemos configurar os eixos com diferentes unidades de medida, como informar que a imagem ficará a 20 pixels de distância da margem esquerda e 40% em relação ao topo da página.

Outros exemplos de uso:

```
background-position: 20% 40%;    /* 20% à direita e 40% abaixo */
background-position: 30px 60px;  /* 30px à direita e 60px abaixo */
background-position: 20px 40%;   /* 20px à direita e 40% abaixo */
```

## background-attachment

Esta propriedade é utilizada para definir o que acontecerá com a imagem de fundo quando da interação com a barra de rolagem, se ela ficará fixa, se ela se moverá junto com o movimento de scroll, entre outras opções.

Exemplo de uso:

```
background-attachment: fixed;
```

### Opções para background-attachment

A tabela a seguir apresenta todos os valores que podemos atribuir a **background-attachment**.

|         |     |
|---------|-----|
|**scroll**|Valor padrão assumido pela imagem de fundo. Define que ao rolar a página a imagem também irá rolar.|
|**fixed**|Faz com que a imagem não se movimente junto com o documento, dando a impressão de que o conteúdo desliza sobre o fundo.|
|**local**|Especifica que a imagem de fundo de um documento interno vai se movimentar junto com o fundo do documento principal.|
|**inherit**|Especifica que a propriedade recebe, por herança, a mesma configuração indicada para o elemento pai.|
|**initial**|Indica à propriedade que o valor padrão deve ser utilizado.|

## background múltiplo

Nossos documentos podem conter diversas imagens de fundo. Para isso, basta utilizar a propriedade **background-image** e incluir, separadas por vírgula, as URLs de cada imagem.

A ordem de exibição das imagens é a mesma em que elas foram declaradas. Dessa forma, a primeira imagem será inserida antes da segunda e assim sucessivamente.

Exemplo de uso:

```
background-image: url("pasta/Imagem1.jpg"), url("pasta/Imagem2.jpg");
```

Caso desejemos customizar a exibição de cada imagem individualmente, devemos declarar a propriedade seguida dos valores separados por vírgula.

Exemplo de uso com customização de múltiplas imagens:

```
background-image: url("pasta/Imagem1.jpg"), url("pasta/Imagem2.jpg");
background-repeat: no-repeat, repeat-x;
background-position: top right, center;
```

## background-size
Utilizamos esta propriedade para especificar o tamanho da imagem de fundo. Assim como acontece com **background-position**, existem diversas formas de declarar esse recurso. Uma delas é definir os valores em **pixels**, sendo o primeiro valor para a largura e o segundo para a altura.

Exemplo de uso:

```
background-size: 80px 60px;  /* 80 pixels de largura e 60 pixels de altura */
background-size: 300px;  /* 300 pixels de largura e altura automática */
```

Podemos utilizar ainda a **porcentagem** da página ou do elemento para definir a largura que a imagem deve ocupar. Nesse caso a altura também assume valor automático proporcional à largura.

Exemplo de uso com porcentagem:

```
background-size: 50%;
```

Além disso, podemos especificar valores pré-definidos para customizar o tamanho da imagem de fundo.

Exemplo de uso:

```
background-size: cover;
```

## Opções para background-size

A tabela a seguir apresenta todos os valores pré-definidos que podemos atribuir a **background-size**.

|        |       |
|--------|-------|
|**cover**|	Amplia a imagem até o ponto que preencha toda a área da página ou elemento.|
|**contain**|Amplia a imagem ao maior tamanho possível respeitando a área visível da página ou elemento.|
|**inherit**|Herda a mesma configuração definida no elemento pai.|
|**initial**|Utiliza o valor padrão da propriedade.|

## background-origin

Este recurso permite escolher a posição em que a imagem será inserida. Diferentemente da propriedade **background-position**, ela configura o ponto de inserção em relação aos elementos do documento.

Exemplo de uso:

```
background-origin: padding-box;
```

### Opções para background-origin

A tabela a seguir apresenta todos os valores que podemos atribuir a **background-origin**.

|       |       |
|-------|-------|
|**padding-box**|Define que a renderização da imagem inicia-se junto ao padding.|
|**border-box**|Define que a renderização da imagem inicia-se junto à borda;.|
|**content-box**|Define que a renderização da imagem inicia-se junto ao conteúdo do elemento.|

## background-clip

Esta propriedade é usada para selecionar a área do background que será pintada. Assim, podemos especificar que desejamos colorir apenas a borda, o padding ou o conteúdo.

Exemplo de uso:

```
background-clip: border-box;
```

### Opções para background-clip

A tabela a seguir apresenta todos os valores que podemos atribuir a **background-clip**.

|       |       |
|-------|-------|
|**border-box**|Preenche toda a área delimitada pelas bordas.|
|**padding-box**|Preenche toda a área delimitada pela propriedade padding.|
|**content-box**|Preenche toda a área de conteúdo.|

## background-blend-mode

Esta propriedade nos permite atribuir efeitos pré-definidos às imagens e cores de fundo, atribuindo a elas mais ou menos luminosidade, saturação, brilho, entre outras opções.

Exemplo de uso:

```
background-blend-mode: darken;
```

### Opções para background-blend-mode

A tabela a seguir apresenta todos os valores que podemos atribuir a **background-blend-mode**.

|      |      |
|------|------|
|**nomal**|	Mantém as características normais do plano de fundo.|
|**multiply**|Multiplica o valor da cor de um pixel, deixando-o mais escuro. Pixels de cor preta ou branca não serão alterados.|
|**screen**|Funciona de forma inversa ao **multiply**, deixando as cores mais claras.|
|**overlay**|Escurece os pixels que já são escuros e clareia os pixels que já são claros;|
|**darken**|Compara o objeto de cima com o de baixo e mantém o pixel que for mais escuro, logo, substitui os mais claros, escurecendo o conteúdo presente no elemento.|
|**lighten**|Possui comportamento inverso ao do Darken. Compara os dois objeto e mantém os pixels mais claros, tornando mais claro o conteúdo presente no elemento.|
|**color-dodge**|Clareia os pixels e aumenta o contraste. Costuma ser usado para criar efeitos brilhosos;|
|**saturation**|Reproduz a saturação do objeto de cima no objeto de baixo, mas o objeto de baixo continua com sua cor e brilho originais.|
|**color**|Reproduz a saturação e a cor do objeto de cima no objeto de baixo, mas o objeto de baixo continua com o seu brilho original.|
|**luminosity**|Reproduz o brilho do objeto de cima no objeto de baixo, mas o objeto de baixo continua com a sua saturação e cor originais.|

### [Fonte: Página da DEVMEDIA](https://www.devmedia.com.br/css-background/38313)

### [Voltar ao Menu Principal](../README.md)

