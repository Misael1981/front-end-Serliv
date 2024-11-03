# A Propriedade `overflow` do CSS

A propriedade `overflow` em CSS controla como o conteúdo de um elemento se comporta quando ele ultrapassa as suas dimensões definidas (largura e altura). Em outras palavras, ela determina o que acontece com o conteúdo que não cabe dentro das bordas do elemento.

### Valores possíveis e seus comportamentos:

- **visible**: (padrão) O conteúdo que ultrapassa as bordas do elemento é visível e se estenderá para fora das bordas.
- **hidden**: O conteúdo que ultrapassa as bordas é cortado e não é visível.
- **scroll**: Cria barras de rolagem para que o usuário possa rolar e visualizar o conteúdo oculto.
- **auto**: O navegador decide automaticamente se precisa criar barras de rolagem, dependendo se o conteúdo ultrapassar as bordas.

### Exemplo:

```
.container {
  width: 200px;
  height: 150px;
  overflow: auto;
}
```

Neste exemplo, se o conteúdo dentro da div com uma classe `container` maior que 200px de largura ou 150px de altura, barras de rolagem aparecem para permitir que o usuário visualize todo o conteúdo.

### Quando usar cada valor:

- **visible**: Raramente utilizado, pois pode causar layouts inesperados.
- **hidden**: Ideal quando você não quer que o conteúdo extra seja visível e prefira cortado.
- **scroll**: Perfeito quando você quiser garantir que todo o conteúdo seja acessível, mesmo que seja necessário rolar.
- **auto**: Uma boa opção para criar layouts adaptáveis, pois o navegador decide automaticamente a melhor solução.

### Uso comum:

- **Criar áreas de rolagem**: Para permitir que o usuário veja todo o conteúdo de um elemento que seja maior que a área visível.
- **Prevenir que o conteúdo se espalhe**: Para manter o layout organizado e evitar que o conteúdo extra interfira em outros elementos.
- **Criar efeitos visuais**: Em combinação com outras propriedades CSS, pode ser usado para criar efeitos como caixas de diálogo, dicas de ferramentas e menus suspensos. `overflow` 
Observações:

A propriedade `overflow` pode ser aplicada a qualquer elemento HTML.
É possível aplicar `overflow` separadamente para a direção horizontal (`overflow-x`) e vertical (`overflow-y`).
A propriedade `overflow` é frequentemente usada em conjunto com as propriedades `width` e `height` para controlar o tamanho e o comportamento de um elemento.

### Em resumo:

A propriedade `overflow` é uma ferramenta poderosa para controlar a exibição de conteúdo em elementos HTML. Ao entender os diferentes valores e seus comportamentos, você pode criar layouts mais flexíveis e responsivos.


### [Menu Estrutura Semântica e Posicionamento](menu.md)