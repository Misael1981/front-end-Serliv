# Pseudo-classes CSS: :focus, :invalid e :valid

As pseudoclasses CSS são ferramentas poderosas para aplicar estilos a elementos HTML com base em estados ou condições específicas, sem a necessidade de modificar o HTML em si. As pseudoclasses : focus, : invalid e : valid são especialmente úteis para criar interfaces de usuário mais interativas e informativas, especialmente em formulários.

## :foco

- **Descrição**: Representa um elemento que está recebendo foco do usuário. Isso geralmente ocorre quando o usuário clica em um elemento ou navega até ele usando o teclado (tab).
- **Uso**: É comumente utilizado para mudar a aparência de um elemento quando ele está sendo interativo com, como alterar o cor da borda, adicionar uma sombra ou aumentar o tamanho da fonte.
### Exemplo:

```
input:focus {
  border: 2px solid blue;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
}
```

## :inválido

- **Descrição**: Representa um elemento cujo valor não atende aos critérios de validação especificados (por exemplo, um campo de e-mail que não contém um formato de e-mail válido).
- **Uso**: Permite criar feedback visual para o usuário, indicando que um campo precisa ser preenchido corretamente. É frequentemente usado em conjunto com a propriedade `required`para destacar campos obrigatórios que estão inválidos.
### Exemplo:

```
input:invalid {
  border: 2px solid red;
}
```

## :válido

- **Descrição**: Representa um elemento cujo valor atende aos critérios de validação especificados.
- **Uso**: Permite fornecer feedback positivo ao usuário, indicando que um campo foi preenchido corretamente.
### Exemplo:

```
input:valid {
  border: 2px solid green;
}
```

### Combinando como pseudo-classes

É possível combinar essas pseudo-classes para criar estilos mais complexos e personalizados. Por exemplo:

```
input:required:invalid {
  /* Estilo para campos obrigatórios que são inválidos */
}

input:focus:valid {
  /* Estilo para campos válidos que estão com foco */
}
```
### Quando usar

- **:focus**: Para criar interfaces mais interativas e acessíveis, especialmente para usuários que navegam com o teclado.
- **:invalid e :valid**: Para fornecer feedback instantâneo ao usuário sobre a validade dos dados inseridos em um formulário, ajudando a prevenir erros e melhorar a experiência do usuário.
### Exemplo prático

```
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" required>
</form>
```

```
input:focus {
  outline: none;
  border: 2px solid blue;
}

input:invalid {
  border: 2px solid red;
}

input:valid {
  border: 2px solid green;
}
```

Neste exemplo, o campo de e-mail terá uma borda azul quando estiver com foco, uma borda vermelha quando o valor for inválido e uma borda verde quando o valor for válido.

### Em resumo

As pseudoclasses : focus, : invalid e : valid são ferramentas poderosas para criar interfaces de usuário mais interativas e informativas. Ao usá-los em conjunto com outras propriedades CSS, você pode criar designs personalizados e melhorar a experiência do usuário em seus formulários.

### [Voltar ao Readme principal](../README.md)