# O que é a tag `<audio>` ?

A tag `<audio>` é utilizada para incorporar conteúdo de áudio em um documento HTML. Com ela, você pode adicionar músicas, efeitos sonoros ou qualquer outro tipo de arquivo de áudio em sua página web.

### Exemplo básico:

```
<audio controls>
  <source src="minha_musica.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

### Explicando o código:

- `<audio controls>`: Cria um elemento de áudio e exibe os controles padrão (reproduzir, pausar, volume, etc. ).
- `<source src="minha_musica.mp3" type="audio/mpeg">`: Especifique o caminho para o arquivo de áudio (neste caso, "minha_musica. mp3") e o tipo de arquivo (MP3).
- **"Seu navegador não suporta o elemento de áudio."**: Mensagem exibida caso o navegador não suporte a tag `<audio>`.

### Atributos importantes da tag `<audio>`

- **autoplay**: Inicia a reprodução do áudio automaticamente ao carregar a página.
- **loop**: Repete a reprodução do áudio indefinidamente.
- **muted**: Inicia a reprodução com o áudio silenciado.
- **preload**: Define o comportamento de pré-carregamento do áudio (auto, metadata, none).
- **controles**: Exibe os controles de reprodução.

### Atributo `<source>`

O elemento HTML especifica um ou mais recursos de mídia para os elementos , e . É um elemento void , o que significa que não tem conteúdo e não requer uma tag de fechamento. Este elemento é comumente usado para oferecer o mesmo conteúdo de mídia em vários formatos de arquivo para fornecer compatibilidade com uma ampla gama de navegadores, dado seu suporte diferente para formatos de arquivo de imagem e formatos de arquivo de mídia .`<source>` `<picture>``<audio>``<video>`

```
<audio controls>
        <source src="meuarquivo.mp3" type="audio/mp3">
        <source src="meuarquivo.ogg" type="audio/ogg">
</audio>
```

### Formatos de áudio suportados

Os navegadores geralmente suportam os seguintes formatos de áudio:

- **MP3**: Formato de especificações com perda de qualidade, muito popular.
- **WAV**: Formato sem variações, com alta qualidade, mas com arquivos maiores.
- **OGG**: Formato de código aberto, com variações sem perda de qualidade.

### [Menu Incorparar Elementos](menu_incorporar-elementos.md)