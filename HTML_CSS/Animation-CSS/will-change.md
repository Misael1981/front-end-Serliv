# `will-change`

A propriedade CSS `will-change`é usada para indicar ao navegador quais propriedades de um elemento serão provavelmente alteradas no futuro. Isso permite que o navegador otimize a renderização do elemento, melhorando potencialmente o desempenho.

### Sintaxe:

```
will-change: properties;
```

Onde `properties` está uma lista de propriedades CSS separadas por vírgulas.

### Valores possíveis:

- **auto**: O navegador determina automaticamente quais propriedades serão alteradas.
Uma lista de propriedades CSS válidas, como `transform`, `opacity`, `top`, `left` etc.

### Exemplo:

```
<div style="will-change: transform, opacity;">
  </div>
```

Neste exemplo, o navegador será informado de que as propriedades `transform` e `opacity` os elementos serão provavelmente alterados. Isso pode ajudar o navegador a otimizar a renderização do elemento, por exemplo, pré-calculando transformações ou criando camadas separadas para o elemento.

### Observações:

- O uso da propriedade `will-change` pode melhorar o desempenho em alguns casos, mas também pode ter um impacto negativo se usado incorretamente. É importante testar cuidadosamente o desempenho do seu site antes e depois de usar essa propriedade.
- A propriedade `will-change` é relativamente nova e pode não ser suportada por todos os navegadores. É sempre uma boa prática verificar a compatibilidade com diferentes navegadores antes de usá-lo.


### [Voltar ao menu Animation](introducao-menu.md)