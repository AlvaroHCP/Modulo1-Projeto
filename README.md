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

O projeto foi publicado no [Vercel](https://vercel.com/), no link [Medication Management](https://modulo1-projeto-alvaro.vercel.app/). 

Ao acessar o sistema, O usuário começa na tela de Login:

![Login](<Captura de Tela 2023-08-31 às 22.15.23.png>)

Ao efetuar o login com êxito, o usuário abre um Modal

![Login-Successfull](<Captura de Tela 2023-08-31 às 22.15.50.png>)

onde ele pode escolher se vai para a página de Listagem de Medicamentos ou para a página de Mapa de Farmácias.

Indo para a Listagem de Medicamentos, abre a seguinte tela:

![DrugsList](<Captura de Tela 2023-08-31 às 22.16.14.png>)

Já se escolher o Mapa de Farmácias, a tela é:

![Map](<Captura de Tela 2023-08-31 às 22.17.05.png>)
![Map-Bottom](<Captura de Tela 2023-08-31 às 22.17.14.png>)

onde esse comprimido marca a posição inicial do usuário, que neste projeto é no RJ.


Como a página de Medicamentos está sem nenhum tipo de produto, é necessário cadastrar um na página de Cadastro de Medicamentos:

![Drugs-Subscription](<Captura de Tela 2023-08-31 às 22.17.38.png>)

e após cadastrar os medicamentos, ou clicar no botão que lê os dados previamente carregados no sistema, o usuário pode ir para a página de Medicamentos e encontrará 

![Loaded-Data](<Captura de Tela 2023-08-31 às 22.18.07.png>)

Onde os cards de medicamentos contém as informações dos produtos, e ao clicar em cada um dos cards, o usuário pode ler a descrição de cada medicamento. 

Há também a opção de favoritar cada produto clicando no icone de coração, no canto superior direito de cada card.

Para o cadastro de Farmácias da rede DevInPharmacy LTDA, o usuário precisa ir à página de cadastro de Farmácias:

![DrugStore-Subscription](<Captura de Tela 2023-08-31 às 22.19.36.png>)
![DrugStore-Subscription-Bottom](<Captura de Tela 2023-08-31 às 22.19.46.png>)

E ao cadastrar uma farmácia, ou ler os dados previamente carregados no sistema, o usuário pode ver a página de Mapa de Farmácias da seguinte forma:

![Map-Radius-0](<Captura de Tela 2023-08-31 às 22.20.14.png>)

