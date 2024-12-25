# O Atributo CSS `popover` e a Pseudo-Classe `:popover-open`

## O que é um `popover`?

Um `popover` é um elemento sobreposto que aparece quando um usuário interage com outro elemento (como um botão ou um ícone). Ele serve para mostrar informações adicionais, como dicas, menus ou opções, de forma não intrusiva.

### O Atributo`popover`

- **Propósito**: Indica que um elemento HTML é um `popover`.
- **Valores**:
    - **auto**: O `popover` é exibido automaticamente quando um evento específico ocorre (como o passar o mouse sobre um elemento).
    - **manual**: O `popover` só é exibido quando acionado explicitamente por JavaScript.

### O Pseudo-Classe `:popover-open`

- **Propósito**: Representar um elemento popover que está visível.
- **Uso**: Permite aplicar estilos específicos ao popover quando ele está aberto.

### Exemplo:

```
HTML

<button popover="auto">Mostrar popover</button>
<div popover>
  <p>Este é o conteúdo do popover.</p>
</div>
```
```
CSS

div[popover]:popover-open {
  /* Estilos para o popover quando está aberto */
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  position: absolute;
  z-index: 1;
}
```

### Como funciona:

1. O botão com o atributo `popover="auto"` aciona o popover quando o usuário passa o mouse sobre ele.

2. A `div` com o atributo `popover` contém o conteúdo do popover.

3. O seletor `div[popover]:popover-open` aplica os estilos definidos para o popover quando ele está aberto.

### Por que usar popovers?

- **Melhor experiência do usuário**: Permite fornecer informações adicionais sem sobrecarregar a interface.
- **Economia de espaço**: O conteúdo do popover só é mostrado quando necessário.
- **Flexibilidade**: Pode ser personalizado com CSS para se adequar a diferentes designs.

### Considerações importantes:

- **Compatibilidade**: O atributo `popover`e a pseudo-classe `:popover-open` ainda são relativamente novos e podem não ser totalmente suportados em todos os navegadores.
- **Acessibilidade**: Certifique-se de que os popovers são acessíveis para usuários com diferentes necessidades, como aqueles que utilizam tecnologias assistivas.

## Recursos Adicionais:

### Documentação da Web MDN:

[popoveratributo](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover)

### Em resumo:

O atributo `popover` e a pseudo-classe `:popover-open` são ferramentas poderosas para criar elementos sobrepostos personalizados em suas páginas web. Ao entender como eles funcionam, você pode criar interfaces mais interativas e informativas para seus usuários.

### [Menu - Listas, Tabelas, Details e popover](menu.md)