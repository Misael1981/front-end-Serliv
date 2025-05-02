Pelo que vejo no seu código, você já está selecionando todas as linhas (<tr>) dentro do <tbody> e, para cada linha, você está pegando todas as células (<td>). Você também está criando um objeto aluno com as informações de cada linha.

A sua dificuldade está em acessar apenas as notas de todos os alunos, certo? Pense em como você pode armazenar as notas de cada aluno à medida que você itera pelas linhas da tabela. Em vez de sobrescrever o objeto aluno a cada iteração, você pode criar uma estrutura de dados que acumule as notas de todos os alunos.

Considere o que tipo de estrutura de dados seria mais adequada para guardar as notas de vários alunos. Você poderia ter...

...um array onde cada elemento representa um aluno?
...um objeto onde as chaves poderiam ser os nomes dos alunos e os valores seriam as notas?
E dentro dessa estrutura, como você organizaria as notas de cada aluno? Seria um...

...outro array contendo as quatro notas?
...um objeto com chaves como nota1, nota2, etc.?
Lembre-se que os dados de cada nota estão dentro das células (<td>) que você já está selecionando. O índice dessas células corresponde à coluna da tabela. A coluna das notas começa a partir de um certo índice.

Pense em como você pode usar um loop para percorrer as linhas e, dentro desse loop, acessar as células correspondentes às notas e armazená-las na estrutura de dados que você escolher.
