# A propriedade `accent-color` no CSS: Uma nova ferramenta para estilização

## O que ela faz?

- **Cor unificada**: A principal função da `accent-color` é definir uma cor única para diversos elementos de um formulário que, por padrão, herdam a mesma cor do navegador. Isso inclui elementos como:
    - Checkboxes
    - Radio buttons
    - Botões
    - Caixas de seleção
    - Progress bars
    - Sliders
- **Personalização**: Com essa propriedade, você pode adaptar a aparência desses elementos para que se alinhem com a identidade visual do seu site ou aplicação.
- **Facilidade de uso**: Ao invés de estilizar cada elemento individualmente, você pode definir a cor desejada uma única vez e ela será aplicada a todos os elementos relevantes.

### Como usar a `accent-color`?

A sintaxe é bastante simples:

```
CSS

element {
  accent-color: blue;
}
```

### Onde:

- `element`: O elemento HTML ao qual você deseja aplicar a cor.
- `blue`: A cor desejada. Você pode usar nomes de cores, valores hexadecimais, RGB ou HSL.

### Exemplo:

```
HTML

<input type="checkbox">
<input type="radio">
<button>Enviar</button>
```
```
CSS

input, button {
  accent-color: #4CAF50; /* Verde */
}
```

<img src="./img/accent-color.PNG">
Neste exemplo, todos os checkboxes, radio buttons e botões terão a cor verde definida.

## Por que usar a `accent-color`?

- **Coerência visual**: Garante uma aparência consistente em todos os elementos do formulário.
- **Eficiência**: Reduz a quantidade de CSS necessário para estilizar os elementos.
- **Facilidade de manutenção**: Se você precisar alterar a cor, basta modificar o valor da propriedade `accent-color` em um único lugar.
- **Melhora a acessibilidade**: Ao personalizar a cor, você pode garantir que os elementos sejam visíveis e distintos para usuários com diferentes tipos de visão.

## Compatibilidade:

A `accent-color` é bem suportada pelos navegadores modernos, como Chrome, Firefox, Edge e Safari. No entanto, é sempre recomendado verificar a compatibilidade com os navegadores que você precisa suportar.

### Em resumo:

A propriedade `accent-color` é uma ferramenta poderosa para estilizar formulários de forma eficiente e personalizada. Ao utilizar essa propriedade, você pode criar interfaces mais atraentes e coerentes.

### [Menu Formulários](menu-formularios.md)