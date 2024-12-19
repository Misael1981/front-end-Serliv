# Propriedade transition em CSS

A propriedade `transition` em CSS define quais propriedades CSS terão um efeito de transição. Isso permite criar animações suaves para propriedades especificadas quando elas mudam, sem alterar o layout ou requerem JavaScript.

### Como funciona

A propriedade `transition`é um atalho para outras quatro propriedades individuais:

- `transition-property`: Especificar as propriedades CSS em que a transição será aplicada.
- `transition-duration`: Define o tempo total da transição.
- `transition-timing-function`: Determina a velocidade da transição durante seu curso.
- `transition-delay`: Especifica um atraso antes do início da transição.

### Exemplo básico

```
button:hover {
  background-color: blue;
}

button {
  transition: background-color 0.5s ease;
}
```

### Neste exemplo:

- Quando o botão é pairado, seu fundo muda para azul.
- A propriedade `transition` aplicada ao botão especifica que a propriedade `background-color` terá uma transição de 0,5 segundos com uma função de temporização `ease`.

### Usandotransition-property

Você também pode usar uma propriedade `transition-property` individualmente para especificar múltiplas propriedades com transições:

```
button {
  transition-property: background-color, color;
  transition-duration: 0.5s;
}
```

### Importante

- A transição ocorre quando o valor de uma propriedade muda de um estado para outro.
- Você pode definir várias transições separando-as por vírgulas.
- Os valores padrão para as propriedades de transição são `all`,`0s` ,`ease` e `0s`, respectivamente. 

**Em resumo** , a propriedade `transition` é uma ferramenta poderosa para criar efeitos visuais interessantes e melhorar a experiência do usuário em seus designs web.

### [Voltar ao Menu Avançando em CSS](menu.md)
