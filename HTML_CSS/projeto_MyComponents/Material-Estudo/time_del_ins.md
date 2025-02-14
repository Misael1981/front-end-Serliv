# Tags de data

## `<time>` e `datetime`

A tag `<time>` serve para representar um período específico de tempo. Ela é especialmente útil para datas e horas, pois permite que os navegadores e assistentes virtuais interpretem essa informação de forma correta.

- **datetime**: É um atributo essencial da tag `<time>`. Ele contém a data e a hora em um formato legível por máquinas, como "2023-11-24T13:37:00". Esse formato permite que os navegadores e outros softwares entendam a data e a hora de forma precisa.

### Exemplo:

```
<p>O evento será realizado no dia <time datetime="2024-04-05T19:00">5 de abril de 2024, às 19h</time>.</p>
```
### Por que usar <time> e datetime?

- **Acessibilidade**: Screen readers podem usar essa informação para fornecer datas e horas de forma mais acessível aos usuários.
- **SEO**: Motores de busca podem usar essa informação para indexar e organizar conteúdo relacionado a datas e eventos.
- **Funcionalidades**: Algumas ferramentas e bibliotecas podem usar essa informação para criar calendários, cronogramas e outras funcionalidades relacionadas ao tempo.

## `<del>` e `<ins>`

Essas tags são usadas para indicar mudanças em um texto.

- `<del>`: Indica texto que foi deletado ou removido.
- `<ins>`: Indica texto que foi inserido ou adicionado.

### Exemplo:

```
<p>O preço original do produto era <del>R$100,00</del> <ins>R$80,00</ins>.</p>
```

### Por que usar `<del>` e `<ins>`?

- **Histórico de edições**: Permite rastrear as mudanças em um documento ao longo do tempo.
- **Destaque de alterações**: Facilita a identificação das partes de um texto que foram alteradas.
- **Acessibilidade**: Screen readers podem usar essas tags para indicar as mudanças para os usuários.

**Observação**: As tags `<del>` e `<ins>` também podem ter o atributo `datetime` para indicar a data e hora em que a mudança ocorreu.

### Resumo:

|Marcação|	Descrição|	Uso|
|------------|------|------|
|`<time>`|	Representa um período de tempo|	Datas, horas, eventos|
|`datetime`|	Atributo de `<time>`, fornece data e hora em formato legível por máquinas|	Para que navegadores e outros softwares entendam a data e a hora|
|`<del>`|	Indica texto deletado|	Para mostrar texto que foi removido|
|`<ins>`|	Indica texto inserido|	Para mostrar texto que foi adicionado|

- `<time>` e `datetime`: Para datas e horas, melhorando a acessibilidade e o SEO.
- `<del>` e `<ins>`: Para indicar mudanças em um texto, facilitando a compreensão e o rastreamento de edições.

Com essas tags, você pode criar conteúdo mais semântico e acessível, facilitando a compreensão e a utilização do seu site por diferentes usuários e ferramentas.