# *Tipos de Valores e Conversão de Tipos em JavaScript*

JavaScript é uma linguagem de tipagem dinâmica, o que significa que você não precisa declarar o tipo de uma variável explicitamente. No entanto, é importante entender os diferentes tipos de valores e como converter entre eles.

## Tipos de Valores em JavaScript

Os principais tipos de valores em JavaScript são:

1. ***Números (Number)***: Representa tanto inteiros quanto números de ponto flutuante.
   javascript
   let idade = 25; // inteiro
   let altura = 1.75; // ponto flutuante
   

2. ***Strings (String)***: Sequências de caracteres.
   javascript
   let nome = "Misael";
   

3. ***Booleanos (Boolean)***: Representa verdadeiro ou falso.
   javascript
   let ativo = true; // verdadeiro
   let desativado = false; // falso
   

4. ***Objetos (Object)***: Estruturas que podem armazenar coleções de dados e entidades mais complexas.
   javascript
   let pessoa = {
       nome: "Misael",
       idade: 25
   };
   

5. ***Arrays (Array)***: Uma forma especial de objeto que armazena listas ordenadas.
   javascript
   let frutas = ["maçã", "banana", "laranja"];
   

6. ***Null***: Representa a ausência intencional de qualquer valor.
   javascript
   let vazio = null;
   

7. ***Undefined***: Indica que uma variável foi declarada, mas ainda não foi atribuída a um valor.
   javascript
   let indefinido;
   

## Conversão de Tipos

A conversão de tipos é o processo de mudar um valor de um tipo para outro. Existem duas formas principais:

1. ***Conversão Implícita***: Ocorre automaticamente quando o JavaScript tenta realizar operações com diferentes tipos.

   Exemplo:
   javascript
   let numero = 5;
   let texto = "10";
   
   let resultado = numero + texto; // "510" (string)
   

2. ***Conversão Explícita***: Quando você força a conversão usando funções.

- ***Para Número***:
  - Number(): Converte strings e outros tipos para número.
    javascript
    let strNumero = "123";
    let num = Number(strNumero); // 123 (número)
    

- ***Para String***:
  - String(): Converte números e outros tipos para string.
    javascript
    let num = 123;
    let str = String(num); // "123" (string)
    

- ***Para Booleano***:
  - Boolean(): Converte valores para booleano, onde valores falsy (0, "", null, undefined) se tornam false, e todos os outros se tornam true.
    javascript
    let valorFalso = "";
    console.log(Boolean(valorFalso)); // false

    let valorVerdadeiro = "texto";
    console.log(Boolean(valorVerdadeiro)); // true


## Desafio 

- ### Pedir para o usuário digitar 2 números e mostrar a soma.

### Resolução
```
let number1 = prompt('Digite um número')
let number2 = prompt('Digite outro número')

let soma = Number(number1) + Number(number2)
alert("A soma dos números é:" + ' ' + soma)
```
    

## Conclusão

Entender os tipos de valores e a conversão entre eles é fundamental para trabalhar eficientemente com JavaScript. Saber como manipular esses tipos pode evitar erros e tornar seu código mais robusto.



### [Menu Variáveis e Tipos de Valores](menu_variaveis-valores.md)