# DevInPharmacy LTDA

É uma grande empresa farmacêutica, que em plena expansão, precisa do desenvolvimento de um software farmacêutico, entitulado de <b>Medication Management<b>

## Medication Management

Este sistema desenvolvido para esta empresa é um Sistema de Gestão de Medicamentos e Farmácias. 

Nele a empresa pode gerenciar os medicamentos em estoque, assim como as informações de cada um deles, nome, dosagem, laboratório fabricante, etc, e cadastrar novos produtos, conforme necessite.

Este sistema também faz o cadastro e acesso da rede de farmácias em torno de uma localização, permitindo a consuulta de qualquer loja nas redondezas de uma cidade. Para essa consulta, o mapa de geolocalização mostra a posição do usuário e das farmácias ao redor.

## Descrição do Sistema

### Tecnologias

O sistema foi desenvolvido utilizando JavaScript e [React](https://react.dev/). 

Foram empregadas também bibliotecas como :
- [Material UI (Mui)](https://mui.com/), para a estilização junto de [Styled Components](https://styled-components.com/); 
- [React Leaflet](https://react-leaflet.js.org/), para a renderização e manipulação de mapas;
- [React-Icons](https://react-icons.github.io/react-icons), para utilizar icones que não vinham com características de botões. Estes icones podem inclusive serem utilizados no corpo do texto.

### O Projeto

O sistema desenvolvido apresenta uma interface interativa, leve e agradável, com uma identidade visual que traz o usuário a um estado de tranquilidade, com a utilização de paletas de cores de tons verdes entre quentes, para os elementos de mais destaque, e frios, para os elementos mais estruturais.

A presenç de tons levemente azulados quebra a predominância do verde, e traz uma alternância de leve alegria a elementos estratégicos, como botões e hovers de cards.

O sistema inteiro pode ser visto no [Vídeo do Projeto](https://modulo1-projeto-alvaro.vercel.app/).

Falemos mais das telas do sistema, e de como utilizá-lo.

### Por dentro do sistema

Para rodar o sistema localmente, o usuário precisa clonar o repositório do GitHub onde está o projeto fazendo

- git clone https://github.com/AlvaroHCP/Modulo1-Projeto.git

Após isso, deve entrar no diretório clonado e iniciar os comandos, através do console, de instalação das dependências do projeto:

- npm install

E após a instalação das dependências, deve rodar no servidor local utilizando o comando

- npm run dev

No terminal será gerado um link para o navegador, e ao visitar esse link, o projeto já poderá ser executado normalmente.

Caso o usuário prefira, pode rodar o sistema diretamente do servidor de publicação do projeto.

O projeto foi publicado no [Vercel](https://vercel.com/), no link [Medication Management](https://modulo1-projeto-alvaro.vercel.app/). 

1. **Login**

Ao acessar o sistema, O usuário começa na tela de Login:

![Login](<./src/images/Readme/Captura22.15.23.png>)

2. **Funcionalidade Extra: Modal de Login Efetuado com Sucesso**
Ao efetuar o login com êxito, o usuário abre um Modal

![Login-Successfull](<./src/images/Readme/Captura22.15.50.png>)

onde ele pode escolher se vai para a página de Listagem de Medicamentos ou para a página de Mapa de Farmácias.

3. **Lista de Medicamentos**
Indo para a Listagem de Medicamentos, abre a seguinte tela:

![DrugsList](<./src/images/Readme/Captura22.16.14.png>)

4. **Mapa de Farmácias**
Já se escolher o Mapa de Farmácias, a tela é:

![Map](<./src/images/Readme/Captura22.17.05.png>)
![Map-Bottom](<./src/images/Readme/Captura22.17.14.png>)

onde esse comprimido marca a posição inicial do usuário, que neste projeto é no RJ.

5. **Cadastro de Medicamentos**
Como a página de Medicamentos está sem nenhum tipo de produto, é necessário cadastrar um na página de Cadastro de Medicamentos:

![Drugs-Subscription](<./src/images/Readme/Captura22.17.38.png>)

e após cadastrar os medicamentos, ou clicar no botão que lê os dados previamente carregados no sistema, o usuário pode ir para a página de Medicamentos e encontrará 

![Loaded-Data](<./src/images/Readme/Captura22.18.07.png>)

Onde os cards de medicamentos contém as informações dos produtos, e ao clicar em cada um dos cards, o usuário pode ler a descrição de cada medicamento. 

Há também a opção de favoritar cada produto clicando no icone de coração, no canto superior direito de cada card.

6. **Cadastro de Farmácias**
Para o cadastro de Farmácias da rede DevInPharmacy LTDA, o usuário precisa ir à página de cadastro de Farmácias:

![DrugStore-Subscription](<./src/images/Readme/Captura22.19.36.png>)
![DrugStore-Subscription-Bottom](<./src/images/Readme/Captura22.19.46.png>)

E ao cadastrar uma farmácia, ou ler os dados previamente carregados no sistema, o usuário pode ver a página de Mapa de Farmácias da seguinte forma:

![Map-Radius-0](<./src/images/Readme/Captura22.20.14.png>)


7. **Funcionalidade extra: Escala do Mapa variando automaticamente com a mudança do Raio**
À primeira vista, pode parecer que nada aconteceu, mas ao selecionar o raio de distância a partir do usuário, as farmácias começam a aparecer no mapa por um reescalonamento automático, implementado por uma função matemática que eu modelei.

A medida que o raio de abrangência vai aumentando, o mapa vai ficando conforme a seguir:

Para um Raio = 373 metros, temos:

![Map-Radius-373m](<./src/images/Readme/Captura22.20.27.png>)

Raio = 1009 metros:

![Map-Radius-1009m](<./src/images/Readme/Captura22.20.57.png>)

Raio = 2000 metros:

![Map-Radius-2000m](<./src/images/Readme/Captura22.21.39.png>)

Nesse caso, já percebemos que todas as farmácias cadastradas foram enquadradas nessa escala. 

Caso existam outras frmácias fora dessa escala, pode-se utilizar os botões de zoom do próprio mapa, no canto superior esquerdo, para afastar a imagem.

Neste sistema o Raio máximo de busca foi limitado a 2000 metros por ser uma distância bem grande e considerável na busca por farmácias próximas, mas isso pode absolutamente facilmente ser aumentado ou diminuído, conforme o desejo do cliente.

8. **Funcionalidade Extra: Dark Mode**
Existe também no cabeçalho do sistema, um botão de Dark Mode, que ao ser clicado se torna um botão de Light Mode, e toda a aplicação fica no modo noturno:

- **Página de Medicamentos**
![Dark-DrugsList](<./src/images/Readme/Captura22.22.42.png>)

- **Página de Cadastro de Medicamentos**
![Dark-DrugsSubscription](<./src/images/Readme/Captura22.22.56.png>)

assim como as outras páginas, que seguem exatamente o mesmo tema.

Ao clicar no botão de Light Mode, todo o tema da aplicação volta ao modo tradicional.

9. **Funcionalidade Extra: Tela de Página Não Encontrada**

Foi implementada nesta aplicação ainda, uma tela de página não encontrada, 404 - Not Found, do tipo:

![404-NotFound](<./src/images/Readme/Captura22.53.06.png>)

que foi escolhida uma cor rosa mais para a temperatura quente, e tom pastel, para trazer um acolhimento e um tom clássico para a página, que não precisa ser sem graça ou sem identidade.

Essa página leva o usuário automaticamente para a Lista de Medicamentos após 5 segundos, ou à última página, caso o botão seja pressionado.

## O que pode Melhorar?
 
 Pontos que devem ser melhorados no projeto incluem:
- Ajuste da utilização do favorito dos cards de medicamentos, que atualizam a página ao serem clicados
- Ao atualizar a página em Dark Mode, a aplicação volta para o Light Mode
- Melhorar as RegEx dos campos de input da aplicação para serem mais eficientes
- Melhorar a estilização dos componentes
- Componentizar melhor o código
 etc...
 