# Media Types em CSS - Adaptando seu site para diferentes dispositivos

## O que são Media Types?

Em CSS, media types (tipos de mídia) são mecanismos que permitem que você aplique estilos diferentes a um mesmo documento HTML, dependendo do dispositivo ou contexto em que ele está sendo visualizado. Isso é fundamental para criar experiências web responsivas e otimizadas para diversos tamanhos de tela, como smartphones, tablets e desktops.

### Por que usar Media Types?

- **Responsividade**: Adapte o layout e o conteúdo do seu site para diferentes tamanhos de tela.
- **Acessibilidade**: Ofereça uma experiência melhor para usuários com diferentes necessidades, como aqueles que utilizam leitores de tela.
- **Impressão**: Crie estilos específicos para a versão impressa do seu documento.

## Tipos de Media mais comuns:

- **all**: Aplica os estilos a todos os dispositivos.
- **print**: Aplica os estilos somente quando o documento é impresso.
- **screen**: Aplica os estilos somente quando o documento é visualizado em uma tela (monitores, smartphones, tablets).

## Como usar Media Types:

- Existem diferentes maneiras de se aplicar o Media types:

### De maneira interna:

A sintaxe básica para utilizar media types é a seguinte:

```
CSS

@media (media-type) {
  /* Estilos para o tipo de mídia especificado */
}
```

### Exemplo:

```
@media print {
  // Tudo o que estiver aqui dentro será mandado para impressão
}
```

### Através de um arquivo CSS:

- Através de um novo arquivo CSS juntamente com o atributo **media** que irá especificar em qual tipo de midia será utilizado:

```
<link rel="stylesheet" href="NOME_DO_ARQUIVO.css" media="print">
```
O documento será formatado somente para impressão.

- O que deve ser observado ao se trabalhar dessa maneira, é a ordem dos documentos para que nehuma sobreescreva outra e a espicifidade.








### [Menu Responsividade](Introducao-menu.md)