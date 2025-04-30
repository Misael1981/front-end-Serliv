# Dominando o Desestruturando em JavaScript

O **destruturing** (desestruturação) é uma expressão que permite extrair valores de matrizes ou propriedades de objetos e atribuir-lhes variáveis ​​distintas de uma maneira muito mais elegante e direta.

Vamos explorar a desestruturação com arrays e objetos separadamente:

## 1. Desestruturação de Arrays

A desestruturação de arrays permite descompactar valores de um array e atribuir-lhes variáveis ​​usando uma sintaxe semelhante a um literal de array. A correspondência é baseada na posição dos elementos no array.

### a) Atribuição básica:

```
const cores = ["vermelho", "verde", "azul"];
const [primeiraCor, segundaCor, terceiraCor] = cores;

console.log(primeiraCor);  // Saída: vermelho
console.log(segundaCor);   // Saída: verde
console.log(terceiraCor);  // Saída: azul
```

### b) Ignorando valores:

Você pode ignorar valores em um array durante a desestruturação usando vírgulas vazias.

```
const info = ["Alice", 30, "Engenheira"];
const [nome, , profissao] = info; // Ignora a idade

console.log(nome);       // Saída: Alice
console.log(profissao);  // Saída: Engenheira
```

### c) Usando o Parâmetro Rest (`...`) para obter o restante do array:

Semelhante ao operador spread, o parâmetro rest no destructuring de arrays coleta os elementos restantes em um novo array.

```
const numeros = [1, 2, 3, 4, 5];
const [primeiro, segundo, ...restante] = numeros;

console.log(primeiro);    // Saída: 1
console.log(segundo);     // Saída: 2
console.log(restante);   // Saída: [3, 4, 5]
```

### d) Trocando valores de variáveis:

A desestruturação facilita a troca de valores entre duas variáveis ​​sem a necessidade de uma variável temporária.

```
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a); // Saída: 20
console.log(b); // Saída: 10
```

### e) Desestruturação em funções:

Você pode desestruturar arrays diretamente nos parâmetros de uma função.

```
function exibirCoordenadas([x, y]) {
  console.log(`Coordenada X: ${x}, Coordenada Y: ${y}`);
}

const ponto = [5, 10];
exibirCoordenadas(ponto); // Saída: Coordenada X: 5, Coordenada Y: 10
```

## 2. Desestruturação de Objetos

A desestruturação de objetos permite extrair valores de propriedades de um objeto e atribuí-los a variáveis ​​com o **mesmo nome da propriedade** (ou com um novo nome, se desejar). A ordem não importa aqui, apenas o nome da propriedade.

### a) Atribuição básica:

```
const pessoa = { nome: "Bob", idade: 25, profissao: "Programador" };
const { nome, idade, profissao } = pessoa;

console.log(nome);       // Saída: Bob
console.log(idade);      // Saída: 25
console.log(profissao);  // Saída: Programador
```

### b) Atribuição a novas variáveis:

Você pode calcular valores de propriedades a variáveis ​​com nomes diferentes usando a sintaxe `{ propriedade: novoNomeDaVariavel }`.

```
const produto = { nome: "Teclado", preco: 79.90 };
const { nome: nomeDoProduto, preco: valor } = produto;

console.log(nomeDoProduto); // Saída: Teclado
console.log(valor);        // Saída: 79.9
```

### c) Valores padrão:

Você pode definir valores padrão para variáveis ​​que serão usadas caso a propriedade não exista no objeto que está sendo desestruturado.

```
const configuracao = { tema: "escuro" };
const { tema, fonte = "Arial" } = configuracao;

console.log(tema);   // Saída: escuro
console.log(fonte);  // Saída: Arial (valor padrão usado)
```

### d) Usando o Parâmetro Rest (`...`) para obter as propriedades restantes:

O parâmetro restante na desestruturação de objetos coletados como propriedades remanescentes em um novo objeto.

```
const usuario = { id: 1, nome: "Carlos", email: "carlos@exemplo.com", ativo: true };
const { nome, ...outrasInfo } = usuario;

console.log(nome);        // Saída: Carlos
console.log(outrasInfo);  // Saída: { id: 1, email: "carlos@exemplo.com", ativo: true }
```

### e) Desestruturação aninhada:

Você pode desestruturar objetos que contenham outros objetos aninados.

```
const empresa = {
  nome: "Tech Solutions",
  endereco: {
    rua: "Avenida Principal",
    numero: 123
  }
};

const { nome: nomeEmpresa, endereco: { rua, numero } } = empresa;

console.log(nomeEmpresa); // Saída: Tech Solutions
console.log(rua);         // Saída: Avenida Principal
console.log(numero);      // Saída: 123
```

### f) Desestruturação em parâmetros de funções:

Assim como com arrays, você pode desestruturar objetos diretamente nos parâmetros de uma função.

```
function exibirProduto({ nome, preco }) {
  console.log(`Produto: ${nome}, Preço: R$${preco}`);
}

const meuProduto = { nome: "Mouse", preco: 29.99 };
exibirProduto(meuProduto); // Saída: Produto: Mouse, Preço: R$29.99
```

### Em resumo, a desestruturação torna a remoção de valores de matrizes e objetos muito mais concisa e legível. Ele ajuda a:

- #### Reduzir a verbosidade do código.
- #### Facilitar o acesso a valores específicos.
- #### Tornar o código mais expressivo.

### [Menu Arrays](../menu.md)
