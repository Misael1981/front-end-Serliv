# Variáveis ​​CSS (custom properties)

### O que são?

As variáveis ​​CSS, também conhecidas como propriedades personalizadas, são como apelidos que você dá para valores em seu código CSS. Ao repetir o mesmo valor várias vezes, você pode armazená-lo em uma variável e reutilizá-lo em diferentes partes do seu estilo.

### Por que usá-las?

- **Reutilização**: Evita a reprodução de valores, tornando o código mais limpo e organizado.
- **Manutenção**: Facilita a alteração de valores globais, pois você precisa modificar apenas a variável e não cada ocorrência individual.
- **Tematização**: Permite criar temas diferentes para sua aplicação, alterando apenas o valor das variáveis.
- **Responsividade**: Pode ser usado em conjunto com media queries para criar estilos adaptativos.

## Como criar e usar:

### 1. Definindo a variável:

```
:root {
  --primary-color: #333;
  --font-size: 16px;
}
```

- Ou `:root` selecione o elemento raiz do documento (geralmente o `<html>`).
- `--primary-color` e `--font-size` são os nomes das variáveis, precedidos por dois hifens.

### 2. Usando a variável:

```
body {
  color: var(--primary-color);
  font-size: var(--font-size);
}
```

- A função `var()` é usada para acessar o valor da variável.

#### Exemplo prático:

```
:root {
  --primary-color: #007bff;
  --font-family: Arial, sans-serif;
}

body {
  background-color: var(--primary-color);
  font-family: var(--font-family);
}

.button {
  background-color: var(--primary-color);
  color: white;
}
```

### Vantagens:

- **Modularidade**: Permite criar módulos CSS mais reutilizáveis.
- **Flexibilidade**: Facilita a criação de temas e a personalização de estilos.
- **Manutenção**: Torna o código mais fácil de entender e manter.
- **Melhora o desempenho**: Em alguns casos, o navegador pode otimizar o uso de variáveis.

### Observações:

- **Cascata**: As variáveis ​​herdadas seguem as regras de cascata do CSS.
- **Nomes**: Os nomes das variáveis ​​devem ser significativos e seguir as convenções de nomenclatura do seu projeto.
- **Compatibilidade**: As variáveis ​​CSS são amplamente suportadas em navegadores modernos.

### Em resumo:

As variáveis ​​CSS são uma ferramenta poderosa para organizar e personalizar seus estilos. Ao entender como usá-los, você pode criar código CSS mais eficiente, escalável e fácil de manter.

### [Voltar ao README principal](../README.md)