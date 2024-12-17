# Argumentos, Parâmetros e Parâmetros Padrão em Funções 

No mundo das funções JavaScript, três termos são essenciais para dominar a arte da programação: argumentos, parâmetros e configurações padrão. Vamos desvendar cada um deles:

## Argumentos:

Imagine um garçom anotando seu pedido no restaurante. Os pratos que você escolhe são como os argumentos , que são os valores passados ​​para a função quando ela é chamada.

## Parâmetros:

Agora, visualize a cozinha do restaurante. Lá, o cozinheiro recebe seu pedido (argumentos) e utiliza os ingredientes ( intervalos ) para preparar uma refeição. As parâmetros são as variáveis ​​definidas na declaração da função para receber os argumentos.

## Parâmetros Padrão:

Em alguns casos, o cozinheiro pode ter ingredientes pré-definidos para um prato, caso você não os especifique. No JavaScript, as configurações padrão definem valores predefinidos para as configurações da função, caso nenhum argumento seja fornecido.

## Exemplo Prático: Degustando Funções com Argumentos, Parâmetros e Parâmetros Padrão

Considere a seguinte função que calcula a soma de dois números:

```
function somar(numero1, numero2 = 10) {
  const resultado = numero1 + numero2;
  return resultado;
}
```

- **Argumento**: Ao chamar a função, você informa os valores que serão usados ​​na soma. Por exemplo, . Aqui, 5 e 3 são os argumentos. `somar(5, 3)`

- **Parâmetros**: Na declaração da função, e são as configurações que confirmam os valores dos argumentos. `numero1` `numero2`

- **Parâmetro Padrão**: O parâmetro `numero2` possui um valor padrão de 10. Se você chamar uma função sem especificar o segundo argumento, como em `somar(5)`, o valor 10 será utilizado.

```
function cumprimentar() {
  console.log("Olá, mundo!");
}
```

- **Função com Vários Argumentos**: Uma função pode receber vários argumentos, separados por vírgulas. Por exemplo:

```
function calcularMedia(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;
  return media;
}
```

## Abrindo o Apetite com Rest Parameters: Saboreando Argumentos Indefinidos

Em certos casos, você pode querer lidar com um número indefinido de argumentos. É aí que ambos os **parâmetros restantes**.

Imagine um banquete com vários pratos deliciosos. Os `rest parameters` permitem que você receba um número indefinido de argumentos e os armazene em um array. Veja um exemplo:

```
function calcularMedia(...notas) {
  let soma = 0;
  for (const nota of notas) {
    soma += nota;
  }
  const media = soma / notas.length;
  return media;
}
```

Nesse exemplo, a função `calcularMedia` recebe um `rest parameter` chamado `notas`. Esse parâmetro armazena todos os argumentos passados ​​para a função em um array, que pode ser acessado dentro da função.

## Desvendando os Segredos dos Argumentos Objeto: Personalizando a Experiência

Os objetos permitem que você passe um objeto como argumento para uma função, fornecendo vários dados de forma organizada.

Imagine um pedido no restaurante com detalhes específicos. Os argumentos objetos são como pedidos detalhados, contendo propriedades e valores para personalizar a execução da função. Veja um exemplo:

```
function formatarNome(pessoa) {
  const nomeCompleto = `${pessoa.nome} ${pessoa.sobrenome}`;
  return nomeCompleto.toUpperCase();
}

const cliente = {
  nome: "João",
  sobrenome: "Silva"
};

const nomeFormatado = formatarNome(cliente);
console.log(nomeFormatado); // Resultado: JOÃO SILVA
```

Nesse exemplo, uma função `formatarNome` recebe um argumento objeto pessoacom as propriedades `nome` e `sobrenome`. A função utiliza esses dados para formatar o nome completo em seus guardiões.

## Recapitulando: Dominando a Arte das Funções em JavaScript

Argumentos, parâmetros e configurações padrão são peças fundamentais no quebra-cabeça das funções em JavaScript. Agora que você já conhece, vamos revisar os pontos-chave:

## Argumentos:

- São os valores passados ​​para a função quando ela é chamada.
- Imaginados como os pratos que você pede em um restaurante.

## Parâmetros:

- São as variáveis ​​definidas na declaração da função para receber os argumentos.
- Visualizados como os ingredientes que o cozinheiro utiliza para preparar seu pedido.

## Parâmetros Padrão:

- Valores predefinidos para as configurações da função, caso nenhum argumento seja fornecido.
- Funcionam como os ingredientes que o cozinheiro já tem na cozinha para agilizar o preparo.

## Tipos de Funções por Número de Argumentos:

- **Sem Argumentos**: Não recebe nenhum valor quando chamadas.
- **Com Vários Argumentos**: Recebem diversos valores separados por vírgulas.
- **Com Rest Parameters**: Recebem um número indefinido de argumentos armazenados em um array.

## Passando Argumentos:

- **Por posição**: A ordem dos argumentos na chamada corresponde à ordem das cláusulas na declaração.
- **Por Nome**: Utilize nomes de parâmetros e valores entre chaves para maior clareza.

## Retornando Valores:

- Utilize uma palavra-chave `return` seguida do valor desejado.
- O valor retornado pode ser utilizado em outras partes do programa.

## Funcionalidades Extras:

- **Funções anônimas**: Criadas sem nome e armazenadas em variáveis ​​ou passados ​​como argumentos.
- **Funções de seta**: Sintaxe concisa para funções simples, utilizando a seta `=>`.
- **Funções autoinvocáveis**: Funções que se chamam automaticamente, encapsulando código e evitando variações globais.

### [Menu Funções](menu-funcoes.md)