# O que é Prototype?

Imagine que você está criando vários objetos semelhantes em JavaScript. Por exemplo, vários cachorros. Cada cachorro tem um nome, uma raça e pode latir. Ao invés de definir a habilidade de latir em cada objeto cachorro individualmente, o JavaScript nos oferece uma maneira mais elegante e eficiente: o **Prototype** .

O **Prototype** é como um "modelo" ou um "ancestral" para os objetos. Quando você cria um objeto, ele herda propriedades e métodos do seu protótipo. Pense assim: todos os cachorros têm uma habilidade de latir porque essa habilidade está definida no "protótipo" de cachorro.

**Em termos técnicos**: Todo objeto em JavaScript (com exceção de alguns casos especiais) tem uma propriedade interna chamada `[[Prototype]]`(acessível através de `__proto__` ou `Object.getPrototypeOf()`). Esso `[[Prototype]]` aponta para outro objeto, que é o seu protótipo.

### Vamos ver um exemplo prático:

```
// Função construtora para criar objetos Cachorro
function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

// Adicionando um método 'latir' ao Prototype de Cachorro
Cachorro.prototype.latir = function() {
  console.log(`${this.nome} está latindo: Au au!`);
};

// Criando instâncias de Cachorro
const rex = new Cachorro("Rex", "Pastor Alemão");
const luna = new Cachorro("Luna", "Labrador");

// Agora ambos os objetos 'rex' e 'luna' podem usar o método 'latir'
rex.latir(); // Saída: Rex está latindo: Au au!
luna.latir(); // Saída: Luna está latindo: Au au!

console.log(rex.__proto__ === Cachorro.prototype); // Saída: true
console.log(Object.getPrototypeOf(luna) === Cachorro.prototype); // Saída: true
```

No exemplo acima:

1. Criamos uma função construtora Cachorro.
2. Adicionamos o método `latir` ao `Cachorro.prototype`. Isso significa que todos os objetos criados usando `new Cachorro()` terão acesso a esse método através de sua cadeia de protótipos.
3. Quando chamamos `rex.latir()`, o JavaScript primeiro procura o método `latir` no próprio objeto `rex`. Se não encontrar, ele sobe na cadeia de protótipos até encontrar (nesse caso, encontra em `Cachorro.prototype`).

### Benefícios do Prototype:

- **Eficiência de memória**: Métodos comuns são definidos apenas uma vez no protótipo, em vez de serem duplicados em cada objeto.
- **Herança**: Permite que os objetos herdem propriedades e métodos de seus protótipos, facilitando a reutilização de código e a criação de construções.

## Entrando em Cena: `call()` e `apply()`

Agora que entendemos o conceito de Protótipo, vamos explorar as funções `call()` e `apply()`. Elas são ferramentas poderosas que nos permitem **mudar o contexto `this`** de uma função.

Em JavaScript, o valor de `this` dentro de uma função depende de como a função é chamada. `call()` e `apply()` nos dão a flexibilidade de definir explicitamente qual objeto deve ter o `this` dentro da função.

### `call()`:

A função `call()`chama uma função com um dado valor `this` e informações fornecidas individualmente.

### A sintaxe é:

```
funcao.call(thisArg, arg1, arg2, ...);
```

- `funcao`: A função que você quer chamar.
- `thisArg`: O valor que você quer que seja usado como `this` dentro da função.
- `arg1, arg2, ...`: Os argumentos que serão passados ​​para a função, separados por vírgulas.

### Exemplo com `call()`:

```
const pessoa = {
  nome: "João",
  saudar: function(mensagem) {
    console.log(`${mensagem}, meu nome é ${this.nome}.`);
  }
};

const outraPessoa = {
  nome: "Maria"
};

// Usando call() para chamar 'saudar' com 'outraPessoa' como 'this'
pessoa.saudar.call(outraPessoa, "Olá"); // Saída: Olá, meu nome é Maria.
```

No exemplo acima, mesmo que o método `saudar` pertinente ao objeto pessoa, usamos `call()` para repeti-lo no contexto de `outraPessoa`. Assim, `this.nome` dentro de `saudar` se refere a `outraPessoa.nome`.

### `apply()`:

A função `apply()` é muito semelhante a `call()`. A principal diferença é como os argumentos são passados ​​para a função. `apply()` aceita um array (ou um objeto semelhante a um array) de argumentos.

### A sintaxe é:

```
funcao.apply(thisArg, [argsArray]);
```

- `funcao`: A função que você quer chamar.
- `thisArg`: O valor que você quer que seja usado como `this` dentro da função.
- `[argsArray]`: Um array contendo os argumentos que serão passados ​​para a função.

### Exemplo com `apply()`:

```
const calculadora = {
  multiplicar: function(a, b) {
    return this.fator * a * b;
  }
};

const dados = {
  fator: 5
};

const numeros = [2, 3];

// Usando apply() para chamar 'multiplicar' com 'dados' como 'this' e 'numeros' como argumentos
const resultado = calculadora.multiplicar.apply(dados, numeros);
console.log(resultado); // Saída: 30 (5 * 2 * 3)
```

Aqui, usamos `apply()` para chamar `multiplicar` no contexto de `dados`, e discutimos os argumentos 2 e 3 dentro de um array.

### A Conexão com Protótipo

Você pode estar se perguntando: "Como `call()` e `apply()` se encaixam no mundo dos Protótipos?".

A principal conexão é que `call()` permite `apply()` **que você reutilize métodos definidos no protótipo em diferentes objetos** , mesmo que esses objetos não tenham sido criados originalmente com a mesma função construtora.

Imagine que temos um método genérico no protótipo de um objeto e queremos usá-lo em outro objeto que possui propriedades semelhantes, mas foi criado de forma diferente. `call()` ou `apply()`podem nos ajudar a fazer isso, definindo ou `this` corretamente dentro do método.

### Exemplo combinando Prototype, `call()` e `apply()`:

```
function Animal(nome) {
  this.nome = nome;
}

Animal.prototype.apresentar = function(prefixo) {
  console.log(`${prefixo || ""} Meu nome é ${this.nome}.`);
};

function Gato(nome, cor) {
  Animal.call(this, nome); // Usando call() para chamar o construtor de Animal
  this.cor = cor;
}

// Definindo o prototype de Gato para herdar de Animal
Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.constructor = Gato; // Redefinindo o construtor

const mingau = new Gato("Mingau", "branco");
mingau.apresentar("Olá!"); // Saída: Olá! Meu nome é Mingau.

const cachorro = { nome: "Pluto" };

// Usando call() para usar o método 'apresentar' de Animal no objeto 'cachorro'
Animal.prototype.apresentar.call(cachorro, "Au au!"); // Saída: Au au! Meu nome é Pluto.
```

### Neste exemplo:

1. `Gato` herda de `Animal` através do protótipo. Usamos `Animal .call(this, nome)` dentro do construtor `Gato`para inicializar a propriedade `nome` herdada de `Animal` .
2. Criamos um objeto literal `cachorro` que tem uma propriedade `nome`, mas não foi criado com a função construtora `Animal` .
3. Usamos `Animal .prototype.apresentar.call(cachorro, "Au au!")` para chamar o método `apresentar` que não é protótipo de `Animal` , mas definindo o contexto de `this` para o objeto `cachorro`. Isso nos permite reutilizar a lógica do método `apresentar` sem precisar defini-la novamente para objetos de "tipo" diferente.

### Quando usar `call()`e `apply()`?

- **Empréstimo de métodos**: Quando você quer usar um método de um objeto em outro objeto sem que eles necessariamente compartilhem o mesmo protótipo.
- **Encadeamento de construtores**: Como vimos no exemplo de `Gato` e `Animal` , para chamar o construtor da classe pai dentro do construtor da classe filha.
- **Funções com número variável de argumentos**: `apply()` são úteis quando você não sabe quantos argumentos uma função espera ou quando os argumentos estão em um array.

### Conclusão Marota

Jovem Padawan, você deu os primeiros passos na jornada do Prototype e desvendou os poderes de `call()`e `apply()`. Lembre-se que o Prototype é uma espinha dorsal da herança em JavaScript, permitindo a criação de objetos eficientes e a reutilização de código. `call()`e `apply()`são ferramentas versáteis que lhe dão controle sobre o contexto `this`, abrindo um leque de possibilidades para manipular e interagir com seus objetos de maneiras flexíveis.

### [Menu Arrays](../menu.md)
