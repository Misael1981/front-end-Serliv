# Propriedades para elementos-filhos

A seguir, veremos propriedades que devem ser declaradas tendo como seletor os elementos-filhos, ou seja:

```
<div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
</div>
```

Isso significa que, onde existe um elemento-pai com propriedade *flex* (o *flex-container*), é possível atribuir propriedades *flex* específicas também para as elementos-filhos (*flex-item*).

Você pode definir as propriedades abaixo para apenas um dos elementos-filhos através de um identificador, como uma classe específica.

# flex-grow

<img src="../flexbox/img/flex-grow.svg">

Define a habilidade de um flex item de crescer, caso necessário. O valor dessa propriedade é um valor numérico sem indicação de unidade, que serve para cálculo de proporção. Este valor dita a quantidade de espaço disponível no container que será ocupado pelo item.

Se todos os ítens tiverem flex-grow definido em 1, o espaço remanescente no container será distribuído de forma igual entre todos. Se um dos ítens tem o valor de 2, vai ocupar o dobro de espaço no container com relação aos outros (ou pelo menos vai tentar fazer isso).

```
.flex-item {
    flex-grow: <numero>; /* o valor default(padrão) é 0 */
}
```
Valores negativos não são aceitos pela propriedade.

# flex-shrink

Define a habilidade de um flex item de encolher, caso necessário.

```
.flex-item {
    flex-shrink: <número>; /* o valor padrão é 0 */
}
```

Valores negativos não são aceitos pela propriedade.

### [Voltar ao README principal](../README.md)