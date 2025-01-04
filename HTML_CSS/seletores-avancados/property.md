# @property e Variáveis CSS - Uma Exploração Detalhada

## O que são Variáveis CSS?

As variáveis CSS são como apelidos que damos para valores específicos, permitindo que você reutilize esses valores em todo o seu CSS. Elas são definidas com dois hífens antes do nome (por exemplo, `--minha-cor`) e acessadas usando a função `var()`.

### Exemplo:

```
:root {
  --minha-cor: blue;
}

p {
  color: var(--minha-cor);
}
```

### Vantagens:

- **Reutilização**: Evite repetir valores, tornando o CSS mais organizado e fácil de manter.
- **Centralização**: Altere um valor em um só lugar e veja as mudanças refletidas em todo o documento.
- **Tematização**: Crie temas facilmente, alterando apenas as variáveis principais.

## O que é @property?

O **@property** é um recurso mais recente do CSS que permite criar propriedades personalizadas com comportamentos mais complexos. Ele vai além das simples variáveis, permitindo definir valores iniciais, sintaxes personalizadas e até mesmo criar propriedades que se calculam com base em outras.

### Exemplo:

```
@property --offset {
  syntax: '<length>';
  inherits: false;
  initial-value: 0px;
}

.element {
  transform: translateY(var(--offset));
}
```

## Diferenças entre @property e Variáveis CSS:

|**Característica**|**Variáveis CSS**|	**@property**|
|------|-----------------|---------------|
|Complexidade|	Simples, armazena valores|	Mais complexo, define propriedades personalizadas|
|Comportamento|	Somente armazena valores|	Pode definir comportamentos, herança, valores iniciais|
|Sintaxe|	`--nome-da-variavel`|	`@property --nome-da-propriedade`|
|Uso|	Reutilização de valores|	Criação de novas propriedades personalizadas|

### Quando usar cada um?

- **Variáveis CSS**: Ideal para armazenar cores, espaçamentos, fontes e outros valores que serão reutilizados em todo o CSS.
- **@property**: Utilize quando precisar criar propriedades personalizadas com comportamentos específicos, como animações, cálculos ou interações com JavaScript.

### Exemplos práticos de @property:

- #### Criar uma propriedade personalizada para bordas:

```
@property --border-radius {
  syntax: '<length>';
  inherits: false;
  initial-value: 4px;
}

.button {
  border-radius: var(--border-radius);
}
```

- #### Criar uma propriedade personalizada para sombras:

```
@property --box-shadow {
  syntax: '<shadow>';
  inherits: false;
  initial-value: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.card {
  box-shadow: var(--box-shadow);
}
```

### Considerações Finais

O **@property** é uma ferramenta poderosa que expande as possibilidades do CSS, permitindo criar propriedades personalizadas e complexas. No entanto, é importante entender suas nuances e quando utilizá-lo em conjunto com as variáveis CSS para obter o melhor resultado.

### [Voltar ao menu de Seletores Avançados](Menu.md)