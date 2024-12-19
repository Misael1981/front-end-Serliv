# O que é border-radius?

É uma propriedade do CSS que permite criar cantos arredondados em elementos HTML. Com ela, você pode transformar caixas retangulares em formas mais suaves e arredondadas, adicionando um toque visual mais moderno e agradável aos seus designs.

### Como funciona:

- **Sintaxe**:

```
border-radius: valor;
```

O valor pode ser especificado em pixels (px), porcentagem (%) ou até mesmo em outras unidades de medida.

- **Valores**:

  - **Um valor**: Definir o mesmo raio para todos os cantos.
  - **Dois valores**: Define raios diferentes para os cantos horizontais e verticais.
  - **Quatro valores**: Define raios específicos para cada canto, na ordem: superior esquerdo, superior direito, inferior direito, inferior esquerdo.

### Exemplo:

```
HTML

<div class="box"></div>
```

```
CSS

.box {
  width: 200px;
  height: 100px;
  background-color: #f0f0f0;
  border-radius: 10px; /* Todos os cantos com 10px de raio */
}
```

Neste exemplo, a div terá cantos arredondados com 10 pixels de raio.

### Criando cantos elípticos:

Para criar cantos elípticos, você pode usar dois valores separados por uma barra (/). O primeiro valor define o raio horizontal e o segundo, o raio vertical.

```
.box {
  border-radius: 10px / 20px; /* Cantos superiores mais arredondados que os inferiores */
}
```

### Aplicações:

- **Botões**: Criar botões com cantos arredondados para um visual mais moderno.
- **Imagens**: Arredondar as bordas das imagens para um efeito mais suave.
- **Caixas**: Transformar caixas em formas arredondadas para um layout mais interessante.
- **Cartões**: Crie cartões com cantos arredondados para destacar o conteúdo.

### [Voltar ao Menu Avançando em CSS](menu.md)

