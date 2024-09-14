# A tag HTML `<video>`

A tag `<video>` é utilizada para incorporar conteúdo de vídeo em uma página HTML. Com ela, você pode adicionar vídeos em sua página web, permitindo aos visitantes assisti-los diretamente no navegador.

Exemplo básico:

```
<video controls>
  <source src="meu_video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

### Explicando o código:

- `<video controls>`: Cria um elemento de vídeo e exibe os controles padrão (reproduzir, pausar, volume, etc. ).
- `<source src="meu_video.mp4" type="video/mp4">`: Especifique o caminho para o arquivo de vídeo (neste caso, "meu_video. mp4") e o tipo de arquivo (MP4).
- **"Seu navegador não suporta a tag de vídeo."**: Mensagem exibida caso o navegador não suporte a tag `<video>`.

## Atributos importantes da tag `<video>`

- **autoplay**: Inicia a reprodução do vídeo automaticamente ao carregar a página.
- **loop**: Repete a reprodução do vídeo indefinidamente.
- **muted**: Inicia a reprodução com o vídeo silenciado.
- **controls**: Exibe os controles de reprodução.
- **width**: Define a largura do vídeo.
- **heigth**: Define a altura do vídeo.
- **poster**: Especifique uma imagem que será exibida durante o carregamento do vídeo ou antes da reprodução.

### Formatos de vídeo suportados

Os navegadores geralmente suportam os seguintes formatos de vídeo:

- **MP4**: Formato de especificações muito popular, suportado por quase todos os navegadores.
- **WebM**: Formato de código aberto, com suporte a codecs modernos.
- **OGG**: Formato de código aberto, com suporte a codecs como Theora e Vorbis.

### [Menu Incorparar Elementos](menu_incorporar-elementos.md)