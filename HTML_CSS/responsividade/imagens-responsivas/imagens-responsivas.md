# Tags HTML para Imagens Responsivas

## `srcset`, `sizes`, `type`, `media`, `<picture>` e `<source>`

Essas tags HTML foram modificadas para tornar a exibição de imagens em diferentes dispositivos e tamanhos de tela mais eficientes e personalizados. Juntas, elas permitem que você forneça ao navegador uma variedade de opções de imagem, e ele escolherá a mais adequada para cada situação.

## `<picture>`:

- **Função**: É o elemento principal que contém todas as outras tags relacionadas às imagens responsivas. Atua como um container para as diferentes versões da imagem.

## `<source>`:

- **Função**: Dentro do elemento `<picture>`, a tag `<source>` define diferentes versões da imagem, cada uma com suas próprias características (formato, tamanho, etc. ).

## `srcset`:

- **Função**: Esse atributo dentro da tag `<source>` especifica uma lista de URLs para diferentes versões da imagem, cada uma com um descritor de tamanho. O navegador escolhe a imagem mais adequada com base na largura da janela de visualização.
- **Exemplo**: `srcset="image/960.jpg 960w, image/640.jpg 640w, image/480.jpg 480w"`

## `sizes`

- **Função**: Complementa o atributo `srcset`, diminuindo o tamanho que cada imagem ocupará na página. Isso ajuda o navegador a calcular a densidade de pixels necessária e escolher a imagem mais adequada.
- **Exemplo**: `sizes="(max-width: 600px) 50vw, (max-width: 900px) 30vw"`

## `type`

- **Função**: Especificar o tipo MIME da imagem (por - exemplo, `image/jpeg, image/webp`). Isso permite que o navegador verifique se ele suporta o formato da imagem antes de carregá-la.

## `media`

- **Função**: Definir as condições sob as quais uma determinada versão da imagem deve ser usada. Geralmente, são utilizadas consultas de mídia para verificar o tamanho da tela, a orientação do dispositivo, etc.

### Como funciona:

1. O navegador encontra o elemento `<picture>`.
2. Para cada elemento `<source>` dentro de `<picture>`, o navegador verifica se as condições definidas em mediasão atendidas.
3. Se as condições forem atendidas, o navegador verifica o atributo `srcset` para encontrar a melhor imagem com base na largura da janela de visualização e sem atributo `sizes`.
4. Se nenhuma das condições em `<source>` for atendida, o navegador usa a imagem padrão definida no elemento `<img>` dentro de `<picture>`.

## [Menu Responsividade](../Introducao-menu.md)