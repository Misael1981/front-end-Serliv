# `<output>`

A tag `<output>`é utilizada em HTML5 para exibir o resultado de um cálculo ou a consequência de uma ação do usuário, geralmente associada a um formulário. É como um campo de texto somente leitura que é preenchido dinamicamente, normalmente através de JavaScript.

## Características principais:

- **Exibição de resultados**: O conteúdo principal da tag é o resultado de uma operação.
- **Associação com formulários**: Pode ser associado a um formulário usando o atributo `form`.
- **Manipulação dinâmica**: O conteúdo pode ser alterado através de JavaScript.
- **Não envio de dados**: O valor da tag não é enviado junto com os dados do formulário.
### Exemplo:

```
<form>
  <input type="number" id="num1">
  <input type="number" id="num2">
  <button onclick="calcular()">Calcular</button>
  <output id="resultado"></output>
</form>

<script>
  function calcular() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado   
 = Number(num1) + Number(num2);
    document.getElementById("resultado").value = resultado;
  }
</script>
```

Neste exemplo, uma tag `<output>`com o id "resultado" exibirá a soma dos valores inseridos nos campos de entrada.

### Atributos importantes:

- **form**: Especifica o formulário ao qual a tag está associada.
- **name**: Define o nome do elemento para uso com a API de elementos de formulário.

### Em resumo:

A tag `<output>`é uma ferramenta útil para criar interfaces dinâmicas, exibindo resultados de cálculos ou outras informações relevantes ao usuário de forma clara e organizada.

### [Voltar ao Readme principal](../README.md)