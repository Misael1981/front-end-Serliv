# Métodos toString(), join() e concat()

## `toString()`

- **Propósito**: O método `toString()` converte um array em uma string.
- **Como funciona**: Ele junta todos os elementos do array em uma única string, separados por vírgulas.
- **Exemplo**:

```
const frutas = ["maçã", "banana", "laranja"];
const stringFrutas = frutas.toString();
console.log(stringFrutas); // Saída: "maçã,banana,laranja"
```

- **Oservação**: `toString()` é útil quando você precisa de uma representação de string simples de um array.

## `join()`

- **Propósito**: O método `join()` também converte um array em uma string, mas oferece mais controle sobre o separador.
- **Como funciona**: Ele junta todos os elementos do array em uma string, usando um separador especificado.
- **Exemplo**:

```
const numeros = [1, 2, 3, 4, 5];
const stringNumeros = numeros.join("-");
console.log(stringNumeros); // Saída: "1-2-3-4-5"
```

- **Observação**: Se você não fornecer um separador, ele `join()` se comportará da mesma forma que toString().

## `concat()`

- **Propósito**: O método `concat()` é usado para combinar dois ou mais arrays em um novo array.
- **Como funciona**: Ele cria um novo array contendo todos os elementos dos arrays originais.
- **Exemplo**:

```
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayCombinado = array1.concat(array2);
console.log(arrayCombinado); // Saída: [1, 2, 3, 4, 5, 6]
```

- **Observação**: `concat()` não modifica os arrays originais; ele cria um novo array.

### Exemplo Combinando os Métodos

```
const cores = ["vermelho", "verde", "azul"];
const outrasCores = ["amarelo", "roxo"];
const todasCores = cores.concat(outrasCores);
const stringCores = todasCores.join(" | ");
console.log(stringCores); // Saída: "vermelho | verde | azul | amarelo | roxo"
```

### [Menu Arrays](../menu.md)
