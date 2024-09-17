# A Propriedade CSS `steps()` 

A propriedade `steps()` é usada para definir o número de passos em uma animação CSS. Ela é especialmente útil quando você deseja criar animações que avancem em incrementos discretos, como barras de progresso que se preenchem nas etapas definidas.

### Sintaxe:

```
animation-timing-function: steps(number, start|end);
```

- `number`: Um número inteiro que especifica o número total de passos na animação.
- `start|end`: Indica se o primeiro passo ocorre no início ou no final do intervalo de animação.

### Como funciona:

- A animação é dividida em um número específico de passos, definidos pelo valor de `number`.
- A transição entre cada passo é instantânea, a menos que outra função de temporização seja aplicada.
- O parâmetro `start|end` controla onde o primeiro passo ocorre:
    - `start`: O primeiro passo ocorre no início da animação.
    - `end`: O primeiro passo ocorre no final da animação.

### Exemplo:

```
div {
  width: 100px;
  height: 20px;
  background-color: blue;
  animation: myAnimation 2s steps(5, end) forwards;
}

@keyframes myAnimation {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
```

### Neste exemplo:

- A animação `myAnimation` dura 2 segundos.
- A barra azul se preenche em 5 passos.
- O primeiro passo ocorre no final do intervalo de animação, então a barra começa completamente preenchida e depois se "desfaz" em 5 passos.

### Usos comuns:

- **Barras de progresso**: Crie barras que se preenchem em etapas discretas.
- **Animações de contagem**: Mostrar números aumentando ou avançando em passos definidos.
- **Efeitos de pixel art**: Simula a aparência de animações pixeladas.

### Observações:

- A propriedade `steps()` é frequentemente combinada com outras funções de temporização para criar efeitos mais complexos.
- A escolha do valor `number` e do parâmetro `start|end` depende do efeito desejado.

### Em resumo:

A função `steps()` é uma ferramenta poderosa para criar animações CSS precisas e personalizadas. Ela permite controlar o fluxo da animação em incrementos discretos, oferecendo um alto grau de controle sobre o resultado final.

### [Voltar ao menu Animation](introducao-menu.md)