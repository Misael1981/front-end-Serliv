# Métodos de Objetos

## Métodos de Objetos

Em JavaScript, um método é simplesmente uma função que está associada a um objeto. Ou seja, é uma ação que um objeto pode realizar.

### Exemplo:

```
const pessoa = {
  nome: 'João',
  idade: 30,
  saudacao() {
    console.log(`Olá, meu nome é ${this.nome}!`);
  }
};

pessoa.saudacao(); // Saída: Olá, meu nome é João!
```

Neste exemplo:

- `pessoa` é um objeto.
- `saudacao` é um método desse objeto. Quando chamado, ele exibe uma saudação usando o nome da pessoa.

## O `this` em Métodos

O `this` interior de um método refere-se ao próprio objeto que está sendo chamado. É uma forma de acessar as propriedades e outros métodos do objeto atual.

Exemplo:

```
const carro = {
  marca: 'Ford',
  modelo: 'Ka',
  ligar() {
    console.log(`O carro ${this.marca} ${this.modelo} está ligado.`);
  }
};
```

## Sintaxe Abreviada de Métodos em ES6

Antes do ES6, a sintaxe para declarar métodos era um pouco mais detalhada. Com o ES6, foi introduzida uma sintaxe mais concisa:

Sintaxe antiga:

```
const objeto = {
  metodo: function() {
    // ...
  }
};
```

### Sintaxe ES6:

```
const objeto = {
  metodo() {
    // ...
  }
};
```

### Exemplo:

```
const pessoa = {
  nome: 'Maria',
  idade: 25,
  apresentar() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
};
```

## Usos comuns de métodos

- **Manipulação de dados**: Métodos podem modificar as propriedades de um objeto.
- **Realização de cálculos**: Podem realizar cálculos com base nos dados do objeto.
- **Interação com outros objetos**: Podem chamar métodos de outros objetos.
- **Geração de saídas**: Podem exibir informações no console, criar elementos HTML, etc.

### Em Resumo

- **Métodos** são funções associadas a objetos.
- `this` dentro de um método se refere ao próprio objeto.
- **ES6** simplificou a sintaxe para declarar métodos.

### Exemplo Completo:

```
const contaBancaria = {
  saldo: 1000,
  titular: 'Pedro Silva',
  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$ ${valor} realizado com sucesso. Saldo atual: R$ ${this.saldo}`);
    } else {
      console.log('Saldo insuficiente.');
    }
  },
  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de R$ ${valor} realizado com sucesso. Saldo atual: R$ ${this.saldo}`);
  }
};

contaBancaria.sacar(500);
contaBancaria.depositar(200);
```

Neste exemplo, o objeto `contaBancaria` possui métodos para sacar e depositar valores, atualizando o saldo internamente.

### [Menu Particularidades e Curiosidades JavaScript](menu.md)