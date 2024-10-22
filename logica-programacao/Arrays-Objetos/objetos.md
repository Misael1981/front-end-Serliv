# Object JavaScript

## O que é um Objeto em JavaScript?

Em JavaScript, um objeto é uma coleção de **chave-valor**. Cada chave é um **nome de propriedade** que se refere a um valor específico (que pode ser um número, uma string, um booleano, outro objeto, ou até mesmo uma função). Os objetos são a base da programação orientada a objetos em JavaScript e permitem você modelar entidades do mundo real em seu código.

### Exemplo:

```
let pessoa = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo"
};
```

Nesse exemplo, `pessoa` é um objeto. As chaves `nome`, `idade` e `cidade` são as propriedades do objeto, e os valores correspondentes ("João", 30 e "São Paulo") são os valores dessas propriedades.

## As Duas Sintaxes para Criar Objetos

### 1. Objeto Literal

A sintaxe mais comum e simples para criar um objeto é usando a notação literal. Você define o objeto diretamente dentro de chaves `{}`, separando as propriedades por vírgulas.

### Exemplo:

```
let carro = {
  marca: "Ford",
  modelo: "Ka",
  ano: 2023,
  ligar: function() {
    console.log("O carro está ligado!");
  }
};
```

### Observações:

- **Funções dentro de objetos**: Note que você pode adicionar funções como propriedades de um objeto. Essas funções são chamadas de métodos. No exemplo, `ligar` é um método do objeto `carro`.
- **Atribuição dinâmica**: Você pode adicionar ou modificar propriedades de um objeto após sua criação:

```
carro.cor = "prata";
```

### 2. Objeto Construtor

A sintaxe do objeto construtor envolve a criação de uma função (o construtor) que define o padrão para os objetos que serão criados. Para criar um novo objeto, você chama a função como se fosse um construtor, usando a palavra-chave `new`.

### Exemplo:

```
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.saudar = function() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  };
}

let pessoa1 = new Pessoa("Maria", 25);
```

### Observações:

- **Palavra-chave `this`**: Dentro do construtor, a palavra-chave `this` se refere ao objeto que está sendo criado.
- **Herança**: Os construtores são a base para a criação de classes e herança em JavaScript, permitindo você criar objetos que herdam propriedades e métodos de outros objetos.

### Quando Usar Cada Sintaxe?

- **Objeto Literal**: Ideal para criar objetos simples e únicos.
- **Objeto Construtor**: Utilizado quando você precisa criar múltiplos objetos com a mesma estrutura e comportamento. É útil para criar classes e implementar herança.

### Em resumo:

Ambos os métodos permitem criar objetos em JavaScript. A escolha entre eles depende da complexidade do seu projeto e da necessidade de criar objetos com características semelhantes.

### [Menu Arrays e Objetos](menu_arrays-objetos.md)

