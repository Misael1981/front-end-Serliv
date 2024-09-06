# Operadores Aritméticos

## Introdução
Operadores aritméticos são as ferramentas básicas que utilizamos em programação para realizar cálculos matemáticos. Em JavaScript, eles permitem que manipulemos números de diversas formas, desde simples edições até operações mais complexas.

### Principais Operadores Aritméticos

- ### Adição (+): Soma dois valores numéricos.

```
let x = 5;
let y = 3;
let soma = x + y; // soma será 8
```

- ### Subtração (-): Subtrai um valor numérico de outro.

```
let diferenca = x - y; // diferenca será 2
```

- ### Multiplicação (*): Multiplica dois valores numéricos.

```
let produto = x * y; // produto será 15
```

- ### Divisão (/): Divide um valor numérico por outro.

```
let divisao = x / y; // divisao será aproximadamente 1.6667
```

- ### Módulo (%): Retorna o resto da divisão de um número por outro.

```
let resto = x % y; // resto será 2
```

- ### Incremento (++): Adiciona 1 ao valor de uma variável.

```
let numero = 10;
numero++; // numero agora é 11
```
- ### Decremento (--): Subtrai 1 do valor de uma variável.

```
numero--; // numero agora é 10
```

### Exemplo Prático: Calculando a Área de um Retângulo

```
let base = 10;
let altura = 5;

let area = base * altura;

console.log("A área do retângulo é:", area);
```
``````
``````
``````

## Desafio 

- Pedir para o usuário digitar um número;
- Converter em número inteiro;
- Pedir para o usuário digitar outro número;
- Converter em número inteiro;
- Mostrar a divisão concatenada com o texto: "A divisão é: ...";
- Mostrar a multiplicação concatenada com o texto: "A multiplicação é: ...";
- Mostrar a subtração concatenada com o texto: "A subtração é: ...";
- Mostrar a soma concatenada com o texto: "A soma é: ...";

```
let number1 = Number(prompt('Digite um número'))
let number2 = Number(prompt('Digite outro número'))

let divisao = number1 / number2
let multiplicacao = number1 * number2
let subtracao = number1 - number2
let soma = number1 + number2

alert('A divisão é:' + " " + divisao)
alert('A multiplcação é:' + " " + multiplicacao)
alert('A subtração é:' + " " + subtracao)
alert('A soma é:' + " " + soma)
```




### [Menu Variáveis e Tipos de Valores](menu_variaveis-valores.md)