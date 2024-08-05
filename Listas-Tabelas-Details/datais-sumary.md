# `<details>` e `<summary>`

## `<details>`

O elemento `<details>` cria um widget de divulgação onde as informações ficam visíveis apenas quando o widget é alternado para o estado "aberto". Um resumo ou rótulo deve ser fornecido usando o elemento `<summary>` . Um widget de divulgação é normalmente apresentado na tela usando um pequeno triângulo que gira (ou torce) para indicar o status aberto/fechado, com um rótulo ao lado do triângulo.O conteúdo do elemento `<summary>` é usado como rótulo para o widget de divulgação.O conteúdo `<details>` fornece uma descrição acessível para o `<summary>` .   

## `<summary>` 

O elemento `<summary>` especifica um resumo, legenda ou legenda para a caixa de divulgação de um elemento `<details>` . Clique no elemento `<summary>` alterna o estado do elemento pai `<details>` entre aberto e fechado.

O conteúdo do elemento `<summary>` pode ser qualquer conteúdo de cabeçalho, texto simples ou HTML que possa ser usado dentro de um parágrafo. Um elemento `<summary>` só pode ser usado como o primeiro filho de um elemento `<details>` . Quando o usuário clica no resumo, o elemento pai `<details>` é alternado para aberto ou fechado, e então um evento de alternância é enviado para o elemento `<details>` , que pode ser usado para saber quando essa mudança de estado ocorre. O conteúdo `<details>` fornece uma descrição acessível para o `<summary>` .

### Em resumo:

- `<details>` crie um bloco de conteúdo que pode ser expandido ou recolhido.
- `<summary>` é o título ou rótulo desse bloco, que ao ser clicado, mostra ou esconde o conteúdo.

### Exemplo:

```
<details>
  <summary>Clique para ver mais detalhes</summary>
  <p>Este é o conteúdo oculto inicialmente.</p>
  <p>Mais informações podem ser adicionadas aqui.</p>
</details>
```

- O ícone de seta segue a cor da fonte;

- atributo `open`: Atributo booleano, caso seja incorpado fara com que os elementos estajam abertos já na primeira visualização do usuário

Esse código criará um bloco de conteúdo com o título "Clique para ver mais detalhes". Inicialmente, o conteúdo abaixo do `<summary>`estará oculto. Ao clicar no título, o conteúdo será exibido.