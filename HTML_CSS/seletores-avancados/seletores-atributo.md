# Seletores de Atributo

<img src="./img/seletores-atributo-01.PNG">

Os seletores de atributos permitem que você selecione elementos com base em seus atributos HTML. Eles são especialmente úteis para estilizar elementos com classes, IDs ou outros atributos personalizados.

Para selecionar o elemento pelo seu atributo, utilizamos os colchetes `[]`.

### Sintaxe básica:

```
elemento[atributo] {
  /* Estilos a serem aplicados */
}
```

### Exemplos:

- Selecionando todos os links com o atributo `href`:

```
a[href] {
  color: blue;
}
```

- Selecionando todos os elementos `input` com o atributo `type` igual a "texto":

## Seletores mais avançados

### Operadores de comparação:

- `^=`: **Começa com**
- `$=`: **Termina com**
- `=`: **Igual a**
- `!=`: **Diferente de**
- `*=`: **Contém**

### `^=`: Começa com

<img src="./img/seletores-atributo-02.PNG">

O operador `^` vai selecionar o elemento, quando o atributo **começar** com o valor:

<img src="./img/seletores-atributo-03.PNG">

### `$=`: Termina com

O operador `$` vai selecionar o elemento, quando o atributo **terminar** com o valor:

<img src="./img/seletores-atributo-04.PNG">

## Pseudo-classe `:not()`

A pseudo-classe `:not()`permite que você selecione todos os elementos, exceto aqueles que correspondem a um seletor específico. É uma forma de inversor a seleção.

<img src="./img/seletores-atributo-05.PNG">

### Sintaxe:

```
elemento:not(seletor) {
  /* Estilos a serem aplicados */
}
```
- Selecionando todos os elementos `<p>` que não possuem a classe "destaque":

```
p:not(.destaque) {
  font-style: italic;
}
```

### Combinando Seletores de Atributo e `:not()`

Você pode combinar seleções de atributo com `:not()`para criar opções ainda mais precisas.

### Exemplo:

- **Selecionando todos os links que não possuem o atributo `target`**:

```
a:not([target]) {
  text-decoration: underline;
}
```
### Casos de Uso

**Estilização de formulários**: Aplique estilos diferentes para diferentes tipos de entradas (texto, email, etc. ).
- **Criação de layouts responsivos**: Esconder elementos em determinadas telas usando media queries e `:not()`.
- **Personalização de temas**: Crie temas personalizados com base em atributos de dados.
- **Exclusão de estilos**: Remove estilos de elementos específicos.

### [Voltar ao menu de Seletores Avançados](Menu.md)

 

