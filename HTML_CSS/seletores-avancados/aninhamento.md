# Aninhamento (Nesting) CSS

## O que é?

O Aninhamento (Nesting) em CSS é uma técnica que permite escrever regras de estilo de forma mais organizada e intuitiva.

## Como funciona:

- **Tradicionalmente**: Em CSS tradicional, você escreve regras de estilo para elementos aplicando seletores diretamente a eles. Por exemplo:

```
.container {
  background-color: #f0f0f0;
}

.container h1 {
  color: #333;
}

.container p {
  font-size: 16px;
}
```

- **Com Aninhamento**: Você pode "anexar" as regras de estilo dos elementos filhos diretamente dentro da regra de estilo do elemento pai. Isso deixa o código mais conciso e fácil de ler:

```
.container {
  background-color: #f0f0f0;

  h1 {
    color: #333;
  }

  p {
    font-size: 16px;
  }
}
```

### Vantagens do Aninhamento:

- **Melhora a legibilidade**: O código fica mais organizado e fácil de entender, pois as regras de estilo de um elemento estão agrupadas com ele.
- **Reduz a repetição**: Evita a repetição de seletores, tornando o código mais conciso.
- **Facilita a manutenção**: Torna mais fácil modificar e manter o código, pois as alterações em um elemento afetam apenas seus filhos.

### Importante:

- **Compatibilidade**: O Aninhamento nativo do CSS ainda pode ter suporte limitado em alguns navegadores mais antigos.
- **Preprocessadores CSS**: Se você estiver usando pré-processadores como Sass ou Less, o Aninhamento já é uma funcionalidade padrão.

### Exemplo prático:

```
<div class="container">
  <h1>Título</h1>
  <p>Parágrafo</p>
</div>
```
```
.container {
  background-color: #f0f0f0;

  h1 {
    color: #333;
  }

  p {
    font-size: 16px;
  }
}
```

Neste exemplo, as regras de estilo do `<h1>` e do `<p>` estão aninhadas dentro da regra de estilo do .container.

### [Voltar ao menu de Seletores Avançados](Menu.md)

