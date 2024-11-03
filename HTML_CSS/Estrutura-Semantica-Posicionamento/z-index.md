# Z-index: A Profundidade dos Elementos

### O z-index é uma propriedade CSS que determina a ordem de empilhamento dos elementos sobrepostos em uma página.

Imagine os elementos como camadas. O **z-index** define qual camada está acima das outras.

Como funciona:

- **Valor numérico**: O **z-index** aceita valores numéricos. Quanto maior o número, mais à frente o elemento ficará posicionado.
- **Elementos posicionados**: Para que o índice z funcione, o elemento precisa ter uma propriedade positiondiferente de static(como `relative`,`absolute` ,`fixed` ou `sticky`).  
- **Herança**: O **z-index** não é herdado por elementos filhos.

### Exemplo:

```
.element1 {
  position: absolute;
  z-index: 1;
}

.element2 {
  position: absolute;
  z-index: 2;
}
```
Neste exemplo, o elemento `.element2` será exibido em cima do `.element1` porque possui um valor de índice z maior.

### Importante:

- **Padrão**: O valor padrão do **z-index** é auto, que equivale a 0.
- **Negativos**: É possível usar valores negativos do índice z, mas geralmente não é recomendado.
- **Contexto de empilhamento**: O **z-index** funciona dentro de um contexto de empilhamento. Elementos com o mesmo valor do índice z são empilhados na ordem que aparecem no HTML.

### Em resumo, o **z-index** é essencial para controlar a sobreposição de elementos e criar efeitos visuais complexos em suas páginas web.

### [Menu Estrutura Semântica e Posicionamento](menu.md)