# *Tutorial: Operadores Lógicos em JavaScript*

Os operadores lógicos são usados para combinar expressões booleanas (verdadeiras ou falsas) e tomar decisões com base nos resultados dessas transferências. Eles operam sobre valores booleanos (Verdadeiro ou Falso) e retornam um valor booleano como resultado. Os três principais operadores lógicos são:

1. **AND (&&)**
2. **OR (||)**
3. **NOT (!)**

## 1. Operador AND (&&)

O operador && retorna true se *todas* as expressões forem verdadeiras.

*Exemplo:*
```
javascript
let a = true;
let b = false;

console.log(a && b); // false
console.log(a && true); // true
```

## 2. Operador OR (||)

O operador || retorna true se *pelo menos uma* das expressões for verdadeira.

*Exemplo:*
```
javascript
let a = true;
let b = false;

console.log(a || b); // true
console.log(b || false); // false
```

## 3. Operador NOT (!)

O operador ! inverte o valor booleano da expressão. Se for true, ele se torna false, e vice-versa.

*Exemplo:*
```
javascript
let a = true;

console.log(!a); // false
console.log(!false); // true

```

## Tabela Verdade

|**Expressões**|  |**`&&` (E)**| **`()`(Ou)**|
|--------------|----|--------|--------------|
|false|false|false|false|
|false|true|false|true|
|true|false|false|true|
|true|true|true|true|

|**Expressões**|`!`(negação)|
|--------|----------|
|false|true|
|true| false|

### Combinação de Operadores Lógicos

Você pode combinar esses operadores para criar expressões mais complexas.

**Exemplo:**

```
javascript
let a = true;
let b = false;
let c = true;

console.log(a && (b || c)); // true (porque a é true e c é true)
console.log(!(a && b)); // true (porque a && b é false, e o NOT inverte)
```


### Usando em Condicionais

Os operadores lógicos são frequentemente usados em estruturas de controle, como if.

*Exemplo:*

```
javascript
let idade = 20;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
    console.log("Pode dirigir!");
} else {
    console.log("Não pode dirigir.");
}
```

### *Resumo*

- **AND (&&): Retorna true se ambas as condições forem verdadeiras.
- **OR (||): Retorna true se pelo menos uma condição for verdadeira.
- **NOT (!): Inverte o valor booleano da condição.



### [Menu Lógica de Programação](../menu_logica-programacao.md)