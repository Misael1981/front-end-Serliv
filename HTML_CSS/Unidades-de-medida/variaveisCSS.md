# Variáveis ​​CSS (Custom Properties)

## O que são Variáveis ​​CSS?

As variáveis ​​CSS, também conhecidas como propriedades específicas, são recursos que permitem que você armazene valores (como núcleos, fontes, tamanhos, etc.) para serem reutilizados em todo o seu código CSS. Elas facilitam a manutenção, a organização e a personalização de seus estilos.

## Por que usar variáveis ​​CSS?

- **Reutilização**: Evite repetir os mesmos valores várias vezes no seu CSS.
- **Manutenção**: Altere um valor em um único lugar e veja as mudanças refletidas em todo o seu site.
- **Organização**: Nomeie suas variáveis ​​de forma clara e concisa para facilitar a compreensão do seu código.
- **Personalização**: Crie temas ou variações visuais de forma rápida e fácil.

## Como definir uma variável CSS?

Para definir uma variável CSS, você utiliza a seguinte sintaxe:

```
:root {
  --minha-variavel: valor;
}
```

- **:root**: Seleciona o elemento raiz do documento (html).
- **--minha-variável**: É o nome da sua variável. Você pode usar qualquer nome, mas é recomendado usar nomes significativos.
- **valor**: É o valor que você quer considerar à variável, como uma cor, uma fonte, um tamanho, etc.

### Exemplo:

```
:root {
  --cor-principal: #333;
  --fonte-principal: Arial, sans-serif;
}
```

## Como usar uma variável CSS?

Para usar uma variável CSS, você utiliza uma função `var()`dentro de uma propriedade CSS:

```
body {
  color: var(--cor-principal);
  font-family: var(--fonte-principal);
}
```

### Exemplo completo:

```
<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      --cor-principal: #333;
      --fonte-principal: Arial, sans-serif;
    }

    body {
      color: var(--cor-principal);
      font-family: var(--fonte-principal);
    }

    h1 {
      color: var(--cor-principal);
      font-size: 2rem;
    }
  </style>
</head>
<body>
  <h1>Título da página</h1>
  <p>Este é um parágrafo de exemplo.</p>
</body>
</html>
```

## Vantagens de usar variáveis ​​CSS:

- **Facilidade de manutenção**: Se você decidir mudar a cor principal do seu site, basta alterar o valor da variável `--cor-principal` e todas as ocorrências dessa variável serão atualizadas automaticamente.
- **Melhora a legibilidade do código**: Ao usar nomes claros para suas variáveis, você torna seu código mais fácil de entender e manter.
- **Criação de temas**: Você pode criar temas diferentes para o seu site simplesmente alterando os valores das variáveis.
- **Compatibilidade**: Variáveis ​​CSS são suportadas por todos os navegadores modernos.

### Dicas adicionais:

- **Use nomes significativos**: Escolha nomes que reflitam o propósito da variável.
- **Organize suas variáveis**: Crie um arquivo CSS separado para armazenar suas variáveis.
- **Utilize pré-processadores CSS**: Pré-processadores como Sass e Less oferecem recursos adicionais para trabalhar com variáveis ​​CSS, como aninhamento e funções.
- **Combine com outras propriedades CSS**: Variáveis ​​CSS podem ser combinadas com outras propriedades CSS para criar efeitos mais complexos.

### [Voltar ao Menu Avançando em CSS](menu.md)