# SCC0219_Trabalho_Web

Trabalho em grupo da disciplina de Introdução ao Desenvolvimento Web - 1º semestre, 2022.

![Logo](./src/assets/img/logo.png)

## Membros:

- Giovanni Shibaki Camargo (11796444)
- Lucas Keiti Anbo Mihara (11796472)
- Vítor Caetano Brustolin (11795589)


## Requisitos

- O sistema possui 2 tipos de usuários: Clientes e Administradores.
    - Os administradores são responsáveis por registrar e manejar outros administradores, clientes e cartas de pokémon oferecidas. A aplicação deverá vir com uma conta de administrador com email **admin@admin.com** e senha **admin**. (**Este exato email e senha são necessários para logar como Admin e acessar as páginas destinadas aos Administradores**).
    - Os clientes são usuários que acessam o sistema para comprar cartas.
- O registro de administrador deve incluir: Nome, email e senha, sendo os demais campos, referentes a endereço, opcionais.
- O registro de cada cliente deve incluir: Nome, email, senha, endereço e telefone.
- Os registros das cartas devem incluir: Id, nome, nome do set, preço mínimo de venda, preço médio de mercado, quantidade em estoque, URL da imagem da carta e uma lista de até 2 ataques por carta.
- Venda de cartas de pokemon: Cartas e suas quantidades são selecionados e incluídas no carrinho. As cartas são compradas utilizando dados de cartão de crédito (qualquer número é aceito pelo sistema). A quantidade vendida de cartas é subtraída da quantidade em estoque. O carrinho é esvaziado somente após o pagamento ou retirada manual pelo cliente.
- Manejo de cartas: Administradores devem ser capazes de criar, atualizar, ler e deletar (CRUD) novas cartas de Pokemon. Por exemplo, eles devem ser capazes de mudar a quantidade de cartas em estoque.
- O sistema deve conter requisitos de accessibilidade e prover boa usabilidade para o cliente.

### Funcionalidade extra:

- Todos os dias, os clientes podem acessar uma tela chamada **Carta do dia**, na qual uma das cartas presentes na loja será sorteada e terá um desconto especial naquele dia.

## Descrição do projeto

- O projeto desenvolvido trata-se de uma loja de cartas colecionáveis de pokemon que também podem ser utilizadas para partidas reais. As funcionalidades apresentadas no tópico anterior foram organizadas da seguinte forma:

![Diagrama de navegação](./src/assets/img/PokeCard%20Diagrama.png)

- A partir de todas as páginas da plataforma é possível acessar a Página Principal através do cabeçalho.

- O cliente pode realizar login e cadastro através da página de **Sign In / Up**.

- Após logado, o cliente pode editar as informações cadastradas em seu perfil através da página **Edit Profile** e sortear, diariamente, uma carta na qual receberá uma oferta de desconto especial através da página **Card Of The Day**. Ambas páginas são acessíveis por meio dos botões presentes no dropdown do canto superior direito da tela ao passar o mouse sobre o nome do usuário logado.

- A todo momento é possível acessar a página de carrinho (**Cart**) através do ícone presente no cabeçalho.

- A todo momento é possível acessar a página de catálogo (**Catalogue**) através do ícone presente no cabeçalho.

- Quando logado em uma conta de administrador, será possível acessar a página **Admin Page** atrvés de um botão que estará presente no dropdown ao passar com o mouse sobre o nome de usuário logado presente no canto superior direito da tela. Dessa forma, na página do administrador será possível acessar todas as funcionalidades voltadas aos administradores.

- Além disso, na página de **Item**, quando logado como administrador, será visível um botão de editar item, que fará irá para a página **Edit Card** para edição da carta selecionada.

### Informações armazenadas no servidor

- Informações sobre os usuários clientes (id, nome, email, senha, endereço e telefone);
- Informações sobre os usuários administradores (id, nome, email e senha);
- Informações sobre as cartas (nome, id, imagem, ataques, série (coleções de cartas de cada geração), preço, quantidade (em estoque), raridade e supertipo).
- Data da última carta do dia sorteada por cada usuário, a carta sorteada e o valor de desconto

## Comentários sobre o código

- O arquivo de estilização CSS está dividido em sessões para cada parte essencial das páginas. Essa divisão é feita de forma simples através de comentários que explicitam o inicio e fim dos blocos de código de cada página. Vide exemplo abaixo:

![Divisao CSS](./src/assets/img/print_css.png)

- Como utilizamos diferentes componentes para cada página do site, os arquivos referentes a cada página estão presentes na pasta **/src/views/**. Dentro de cada arquivo .vue está o código de marcação (HTML), estilização (CSS) e script (JAVASCRIPT) utilizado em cada uma das páginas.

- Vale notar que, como se trata de uma SPA (Single Page Application), os componentes são dinamicamente carregados dentro de um componente principal (**App.vue**) que possui o cabeçalho, rodapé e uma TAG especial do **Vue Router** (\<router-view\>) responsável por carregar dinamicamente os componentes de cada página, sem recarregar toda a página.

## Plano de testes

A seguir estão listados os testes realizados:
1) Busca de carta por nome
    - Buscar por uma carta no catálogo por meio de uma string de busca a partir da barra de busca presente no cabeçalho do site.
2) Filtragem por categoria
    - Testar se, na página de catálogo, ao clicar em uma das diferentes categorias, apenas as cartas daquela categoria são exibidas.
3) Navegação nas diferentes páginas do catálogo
    - Testar se a barra de navigate, presente no final da página de catálogo, funciona conforme esperado.
4) Adicionar item ao carrinho
    - Através do botão **Add** presente na página principal, catálogo, página do item
    - Através do botão **Add to Cart** presente na página do Item
5) Remover um item do carrinho
    - Na página do carrinho testar se o item será removido ao clicar no botão **Remove**
6) Testar a máscara de input em alguns dos campos presentes no site
7) Testar funcionalidade de edição de carta quando logado como Administrador
8) Testar inclusão de cartas e usuários por parte do administrador
9) Testar alteração de perfil por parte do usuário
10) Testar finalização de compra após itens serem adicionados ao carrinho.

## Resultados dos testes

1) As buscas por cartas funcionam conforme esperado
2) Ao selecionar cada categoria, as cartas exibidas no catálogo são atualizadas conforme esperado
3) A navegação nas diferentes páginas do catálogo funciona conforme esperado, alterando o número de páginas caso alguma categoria específica tenha sido selecionada ou uma busca tenha sido realizada no catálogo
4) O item é adicionado ao carrinho em ambos os casos, sendo que na página do item é possível adicionar a quantidade especificada no campo de quantidade a ser adicionada ao carrinho.
5) Na página do carrinho, ao clicar no botão **Remove** a carta será removida do carrinho independentemente do número de cartas de um mesmo item conforme o esperado.
6) A maioria dos campos numéricos possui máscaras de input.
7) Quando logado como Administrador, ao selecionar uma carta do catálogo e clicar para editar o item, as informações a serem editadas da carta são exibidas e as alterações, após clicar no botão de alterar carta, são salvas no banco de dados conforme esperado.
8) As inclusões de cartas e usuários, quando logado como administrador, funcionam conforme o esperado, permitindo que um administrador faça o cadastro de outros administradores no sistema.
9) Quando logado como um usuário comum, é possível editar as informações de perfil que são salvas no banco de dados conforme esperado.
10) Após os dados referentes às informações bancárias (dados fictícios) serem preenchidos, a compra é finalizada subtraindo do estoque as cartas que estavam presentes no carrinho, e o carrinho é esvaziado, conforme o esperado.

## Procedimentos de build

- Para a entrega final foram apenas desenvolvidos todas as páginas do sistema ([link figma](https://www.figma.com/file/vWXNlQr1lu3tz3Tc1HSfxf/PokemonCards-Mockup?node-id=0%3A1)) utilizando o framework [Vue](https://pt.wikipedia.org/wiki/Vue.js) e também todas as funcionalidades que utilizam o banco de dados MongoDB.

- Todas as componentes (HTML + CSS + JAVASCRIPT) desenvolvidas estão presentes na pasta **/src/**, sendo que, para o desenvolvimento de uma SPA (Single Page Application) utilizou-se o [Vue Router](https://router.vuejs.org/), fazendo com que os componentes da página sejam dinamicamente carregados durante a nevegação do usuário.

- As componentes desenvolvidas são as seguintes:
    - **App.vue**: componente principal contendo header, footer e as demais componentes dinamicamente carregadas.
    - **AdminPageView.vue**: página do administrador para inserção de novos clientes/administradores e cartas.
    - **CardOfTheDayView.vue**: página da funcionalidade extra de carta do dia.
    - **CartView.vue**: página do carrinho de compras.
    - **CatalogueView.vue**: página de catálogo das cartas Pokémon.
    - **ChangeInfoView.vue**: página de edição de perfil.
    - **EditCardViewView.vue**: página de edição de carta pelo administrador.
    - **HomeView.vue**: página principal do site.
    - **ItemPageView.vue**: página individual do item.
    - **PaymentView.vue**: página de pagamento.
    - **SignInUpView.vue**: página de login e cadastro.

### Tutorial de Build

Abaixo, um pequeno tutorial de como rodar e visualizar as páginas do site:

Para executar a aplicação é preciso que o software Node.js esteja instalado em sua máquina através do tutorial abaixo:        
https://nodejs.org/en/

**IMPORTANTE!**

Para o correto funcionamento da aplicação é necessária que tanto o FrontEnd (presente neste repositório) quanto o BackEnd (presente no repositório [BackEnd](https://github.com/giovanni-shibaki/SCC0219_Trabalho_Web_Server)) estejam em execução. Dessa forma, dividiu-se o tutorial de build em duas partes que devem ser executadas ao mesmo tempo:

#### **FrontEnd**

    Faça download do projeto por meio do botão [Code] -> [Download ZIP] presente no GitHub e decompacte o arquivo .ZIP, ou clone o projeto em sua pasta de preferência.

    Depois, por meio do terminal, dentro da pasta do projeto, executar o comando abaixo:
    > npm install

    Em seguida, para executar o projeto, basta utilizado o comando abaixo:
    > npm run serve

    Por fim, em seu navegador, vá para a url abaixo: 
    localhost:8080/

    Pronto! Você agora estará na página principal de nosso site!

#### **BackEnd**

    Faça download do BackEnd do projeto ([BackEnd](https://github.com/giovanni-shibaki/SCC0219_Trabalho_Web_Server)) por meio do botão [Code] -> [Download ZIP] presente no GitHub e decompacte o arquivo .ZIP, ou clone o projeto em sua pasta de preferência.

    Depois, por meio do terminal, dentro da pasta do projeto, executar o comando abaixo:
    > npm install

    Em seguida, para executar o BackEnd, basta utilizado o comando abaixo:
    > npm run start

    Pronto! O BackEnd da aplicação agora está em execução e todas as funcionalidades que necessitam de acesso ao banco de dados MongoDB estarão funcionando!

## Exemplos de cartas para inserção

No arquivo **insertionSamples.txt** estão alguns exemplos de possíveis inserções de cartas no sistema que podem ser utilizadas para testar o cadastro de novas cartas quando logado como administrador.

## Problemas

- Não foram encontrados grandes problemas durante o desenvolvimento deste projeto.

## Comentários

- Foi possível revisar diversos conceitos aprendidos em aula sobre HTML, CSS e JAVASCRIPT, além de aprender novas tags e atributos de estilização para personalizar diversos aspectos do sistema e deixar parecido com o que planejamos nos mockups do sistema.
- Além disso, pôde-se aprender o processo de desenvolvimento web utilizando o framework **Vue JS** e o desenvolvimento de um SPA (Single Page Application) de forma a criar uma interface rápida e agradável aos usuários.
- Por fim, pôde-se aprender o funcionando básico de um banco NoSQL com a divisão do projeto em FrontEnd, que cuida de todas as páginas acessíveis pelos usuários ao sistema, e BackEnd, responsável pela comunicação com o banco de dados, atendendo a solicitações do FrontEnd.



