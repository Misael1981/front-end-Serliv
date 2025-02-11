# Tutorial: Criando um Checkbox Personalizado com Transições Suaves

Neste tutorial, vamos aprender a criar um checkbox personalizado com transições suaves no background e no "bolinha" que indica o estado marcado/desmarcado.

## Passo 1: HTML

Comece criando a estrutura básica do seu checkbox no HTML:

```
<div class="desafio-dois">
  <label>
    <input type="checkbox">
    <span></span>
  </label>
</div>
```

- `desafio-dois`: Um contêiner para o nosso checkbox personalizado.
- `label`: Um rótulo para o checkbox, que também servirá como nosso "interruptor".
- `span`: O elemento que estilizará a aparência do nosso checkbox e conterá a "bolinha".
- `input type="checkbox"`: O checkbox propriamente dito, que ficará escondido.

## Passo 2: CSS

Agora, vamos adicionar o CSS para estilizar o checkbox:

```
.desafio-dois {
  margin: 5rem auto;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

label {
  font-size: 2rem;
  cursor: pointer; /* Indica que o rótulo é clicável */
}

span {
  border: 1px solid #555;
  width: 4rem;
  height: 2rem;
  display: inline-block;
  border-radius: 15px;
  background-color: #444;
  position: relative;
  transition: background 1s ease-in-out; /* Transição para o background */
}

span::after {
  content: "";
  width: 2rem;
  height: 2rem;
  background-color: #cfd8bc;
  display: block;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0rem;
  transform: translateX(0);
  transition: transform 1s ease-in-out; /* Transição para a bolinha */
}

input[type="checkbox"]:checked + span {
  background-color: #cfd8bc; /* Cor quando marcado */
}

input[type="checkbox"]:checked + span::after {
  transform: translateX(100%); /* Bolinha para a direita quando marcado */
  background-color: #444; /* Cor da bolinha quando marcado */
}
```

- Estilos básicos para o contêiner, rótulo e "interruptor" (`span`).
- `::after`: Cria a "bolinha" dentro do `span`.
- `transition`: Define as transições para o `background` do - `span` e o `transform` da "bolinha".
- `input[type="checkbox"]:checked + span`: Estilos para quando o checkbox está marcado.

## Passo 3: JavaScript (Opcional)

Se você precisar de alguma lógica mais complexa, como enviar dados para um servidor quando o checkbox é alterado, pode adicionar JavaScript. Mas para o efeito visual básico, o CSS já é suficiente.

### Resultado

Com esse código, você terá um checkbox personalizado com um visual moderno e transições suaves. Ao clicar no rótulo, o background do "interruptor" e a "bolinha" mudarão de cor e posição de forma animada.

### Dicas

- **Personalize as cores**: Adapte as cores do CSS para o tema do seu site.
- **Explore outras transições**: Experimente diferentes valores para transition (duração, timing function) para obter efeitos variados.
- **Adicione mais estilos**: Use sua criatividade para adicionar sombras, bordas, etc.

**Observação**: O código HTML acima usa um `label` para tornar o checkbox mais acessível. Associar o `label` ao `input` é uma prática recomendada para melhorar a usabilidade.

### [Voltar ao Menu - Transformações 2D](./menu.md)