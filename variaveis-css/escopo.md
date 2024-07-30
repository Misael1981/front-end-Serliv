# Escopo de Variáveis ​​CSS: Onde e como suas variáveis ​​funcionam

#### O escopo de uma variável CSS determina onde ela pode ser acessada e utilizada em seu código.

## Escopo Global:

- **Onde**: Definidas no elemento raiz ( `:root`) do seu documento (geralmente o `<html>`).
- **Visibilidade**: Acessível em qualquer lugar do seu CSS, a menos que sejam sobrescritas por variáveis ​​com o mesmo nome em escopos mais específicos.

### Exemplo:

```
:root {
  --primary-color: #007bff;
  --font-family: Arial, sans-serif;
}
```

Essas variáveis ​​podem ser usadas em qualquer estilo do documento.

## Escopo Local:

- **Onde**: Definidas em elementos específicos, como classes ou IDs.
- **Visibilidade**: Acessível apenas dentro do elemento em que foram definidos e seus descendentes, a menos que sejam sobrescritas por variações com o mesmo nome em escopos mais específicos.

### Exemplo:

```
.card {
  --background-color: #f0f0f0;
  background-color: var(--background-color);
}
```

A variável `--background-color`só estará disponível dentro da classe `.card` e de seus elementos filhos.

### Sobrescrita de Variáveis:

**Como funciona**: Variáveis ​​definidas em escopos mais específicos sobre escala de variáveis ​​com o mesmo nome em escopos mais gerais.
- **Exemplo**:

```
:root {
  --font-size: 16px;
}

.heading {
  --font-size: 24px;
}
```
Dentro da classe `.heading`, o texto terá um tamanho de fonte de 24px, pois a variável local sobrescreve a variável global.

## Hierarquia de Escopos:

- **Regras**:

   - Variáveis ​​definidas em elementos mais específicos têm precedência sobre as definidas em elementos mais genéricos.
   - A ordem em que as regras CSS são declaradas também influencia a sobrescrita de variáveis.

- **Exemplo**:

```
.container {
  --color: blue;
}

.box {
  --color: red;
}

.box.special {
  --color: green;
}
```

Um elemento com as classes `.box` e `.special` terá a cor verde, pois a variável mais específica sobrescreve as outras.

### Por que entender o escopo?

- **Organização**: Permite criar estruturas CSS mais organizadas e modulares.
- **Flexibilidade**: Facilita a criação de temas e a personalização de estilos.
- **Evita conflitos**: Ajuda a evitar conflitos entre variáveis ​​com o mesmo nome.

### Em resumo:

O escopo das variáveis ​​CSS é fundamental para entender como elas interagem e se sobrepõem em seu código. Ao esse conceito, você poderá criar estilos CSS mais flexíveis, organizados e eficientes.

### [Voltar ao README principal](../README.md)