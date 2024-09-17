# Keyframes e Animation CSS

## Keyframes

**Keyframes** são pontos específicos no tempo dentro de uma sequência de animação onde você define as propriedades de estilo de um elemento. A **animation** aplica esses **keyframes** a um elemento, criando uma transição suave entre os estados definidos.

### Propriedades do Keyframes

- **@keyframes name**: Define o nome da animação do quadro-chave.
- **percentage**: Especifica o ponto no tempo dentro da animação. Os valores variam de 0% a 100%.
- **propriedades de estilo**: as propriedades CSS que você deseja aplicar naquele momento específico.

### Propriedades de animation

- **animation-name**: Especifica o nome da animação do quadro-chave a ser aplicada.
- **animation-duration**: define a duração da animação.
- **animation-timing-function**: Define a curva de velocidade da animação.
- **animation-delay**: define o atraso antes do início da animação.
- **animation-iteration-count**: Determina o número de vezes que a animação deve ser reproduzida.
- **animation-direction**: Especifica a direção da animação.
- **animation-play-state**: Controla o estado de reprodução da animação.

### Exemplo: Uma bola quicando

```
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0);
  }
}

.ball {
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50%;
  animation: bounce 1s infinite;
}
```

### Neste exemplo:

- **@keyframes bounce**: Define uma animação de quadro-chave chamada "bounce".
- **0%, 50%, 100%**: especifique os quadros-chave no início, meio e fim da animação.
- **transform: translateY(0); e transform: translateY(-100px)**; definem a posição vertical da bola em cada quadro-chave.
- **.ball** { animation: bounce 1s infinite; }: Aplica a animação "bounce" ao elemento com a classe "ball", definindo sua duração para 1 segundo e fazendo-o repetir infinitamente.

### [Voltar ao menu Animation](introducao-menu.md)