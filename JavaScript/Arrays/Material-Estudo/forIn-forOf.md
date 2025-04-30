# Loops `for...in` e `for...of`

Ambos os loops `for...in` e `for...of` foram introduzidos no ES6 para facilitar a iteração sobre estruturas de dados, mas eles têm propósitos diferentes e operam de maneiras diferentes.

## 1. O Loop `for...in`: Iterando sobre Propriedades de Objetos

O loop `for...in` é projetado para iterar sobre as **propriedades enumeráveis ​​de um objeto** . Isso inclui as propriedades herdadas da cadeia de protótipos.

### Sintaxe:

```
for (const propriedade in objeto) {
  // código a ser executado para cada propriedade
}
```

- `propriedade`: Uma variável que, a cada iteração, recebe um nome de propriedade (string) do objeto.
- `objeto`: O objeto cujas propriedades serão iteradas.

### Pontos importantes sobre `for...in`:

- **Ordem de iteração**: A ordem de iteração das propriedades **não é garantida** em todos os ambientes JavaScript. Em geral, as propriedades são iteradas na ordem em que foram adicionadas ao objeto, mas não confie nisso para a lógica que depende da ordem.

- **Propriedades herdadas**: O loop `for...in`
  também itera sobre as propriedades herdadas da cadeia de protótipos do objeto. Muitas vezes, você só está interessado nas propriedades diretas do objeto. Para verificar se uma propriedade pertence diretamente ao objeto (e não à sua cadeia de protótipos), você pode usar o método `hasOwnProperty()`:

```
for (const propriedade in objeto) {
  if (objeto.hasOwnProperty(propriedade)) {
    console.log(`${propriedade}: ${objeto[propriedade]}`);
  }
}
```

- **Não é adequado para Arrays (na maioria dos casos)**: Embora você possa usar `for...in` para iterar sobre os índices de um array, não é a abordagem recomendada. A ordem de iteração não é garantida e ele também pode iterar sobre propriedades adicionadas ao objeto array (o que geralmente não é o comportamento desejado). Para arrays, o `for` tradicional, `for...of` ou métodos como `forEach`, `map`, `filter`, etc., são mais adequados.

### Exemplo com um Objeto:

```
const carro = {
  marca: "Ford",
  modelo: "Focus",
  ano: 2020
};

for (const propriedade in carro) {
  console.log(`${propriedade}: ${carro[propriedade]}`);
}
// Saída (a ordem pode variar):
// marca: Ford
// modelo: Focus
// ano: 2020
```

### Exemplo com um Array (a evitar na maioria dos casos):

```
const frutas = ["maçã", "banana", "laranja"];
frutas.cor = "amarelo"; // Adicionando uma propriedade ao array (objeto)

for (const indice in frutas) {
  console.log(indice);
}
// Saída (a ordem pode variar):
// 0
// 1
// 2
// cor
```

## 2. O Loop for...of: Iterando sobre Valores de Iteráveis

O loop `for...of` foi introduzido para fornecer uma maneira mais direta e segura de iterar sobre os valores de objetos iteráveis. Um objeto é iterável se ele definir um protocolo de iteração (possui um método `Symbol.iterator`). Isso inclui:

- `Array`
- `String`
- `Map`
- `Set`
- `arguments`(objeto dentro de funções)
- `NodeList`(retornado por métodos como `querySelectorAll`)
- Outros objetos que implementam o protocolo de iteração

### Sintaxe:

```
for (const valor of iteravel) {
  // código a ser executado para cada valor
}
```

- `valor`: Uma variável que, a cada iteração, recebe um valor do objeto iterável.
- `iteravel`: O objeto iterável foi interrompido.

### Pontos importantes sobre `for...of`:

- **Itera sobre valores, não índices/propriedades**: Ele acessa diretamente o conteúdo do iterável.
- **Ordem de iteração**: A ordem de iteração é geralmente a ordem em que os valores aparecem não iteráveis ​​(por exemplo, a ordem dos elementos em um array).
- **Não itera sobre propriedades adicionadas a objetos**: Ele é projetado para iterar sobre os valores definidos pela estrutura iterável.
- **É uma maneira moderna e segura de iterar sobre arrays na maioria dos casos**.

### Exemplo com um Array:

```
const cores = ["vermelho", "verde", "azul"];

for (const cor of cores) {
  console.log(cor);
}
// Saída:
// vermelho
// verde
// azul
```

### Exemplo com uma String:

```
const texto = "JavaScript";

for (const letra of texto) {
  console.log(letra);
}
// Saída:
// J
// a
// v
// a
// S
// c
// r
// i
// p
// t
```

### Exemplo com um Set:

```
const meuSet = new Set([1, 2, 2, 3]);

for (const numero of meuSet) {
  console.log(numero);
}
// Saída:
// 1
// 2
// 3
```

### Em resumo:

- `for...in`: Use para iterar sobre as propriedades enumeráveis ​​de um objeto (lembre-se de usar `hasOwnProperty` para filtrar propriedades diretas). Geralmente não é a melhor escolha para arrays.
- `for...of`: Use para iterar sobre os valores de objetos iteráveis ​​(arrays, strings, Maps, Sets, etc.). É uma maneira moderna e segura de iterar sobre arrays na maioria dos cenários.

### [Menu Arrays](../menu.md)
