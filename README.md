# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

![Logo](https://github.com/AS-IPB-23/Team10-front/blob/9650f031d7e86da45a2f9b2158570364359bb6ca/src/assets/images/logo.png)


# Green life


Este projeto é o resultado de um trabalho desenvolvido durante a disciplina de Arquitetura de Software no Instituto Politécnico de Bragança (IPB). O tema atribuído a este trabalho é o combate contra a fome e agricultura sustentável. Sobre o tema, surgiu a ideia sobre um sistema no qual tem por objetivo ser uma plataforma de apoio para o gerenciamento de hortas comunitárias.

## Layout

O desenvolvimento do layout foi realizado por meio da plataforma Figma ao qual poderá se verificada e análisada por meio do seguinte [link to figma](https://www.figma.com/file/GyXr42jx6d3Go3m4qW2Wwh/Mockup-principal?type=design&node-id=0%3A1&t=GV80ZybA2edsQmcq-1)


## Documentação de cores

| Nome          | Color                                                    | Hexadecimal |
| ------------- | ---------------------------------------------------------|-------------|
| Green 900     | ![#003D21](https://via.placeholder.com/10/003D21?text=+) | #003D21     |
| Green 700     | ![#02734A](https://via.placeholder.com/10/02734A?text=+) | #02734A     |
| Green 500     | ![#05A66B](https://via.placeholder.com/10/05A66B?text=+) | #05A66B     |
| Brown 400     | ![#69311F](https://via.placeholder.com/10/69311F?text=+) | #69311F     |
| Red 700       | ![#BE3737](https://via.placeholder.com/10/BE3737?text=+) | #BE3737     |
| Red 400       | ![#FF0000](https://via.placeholder.com/10/FF0000?text=+) | #FF0000     |
| Gray 700      | ![#757575](https://via.placeholder.com/10/757575?text=+) | #757575     |
| Gray 600      | ![#AAAAAA](https://via.placeholder.com/10/AAAAAA?text=+) | #AAAAAA     |
| Gray 400      | ![#B3B3B3](https://via.placeholder.com/10/B3B3B3?text=+) | #B3B3B3     |
| Gray 200      | ![#EEEEEE](https://via.placeholder.com/10/EEEEEE?text=+) | #EEEEEE     |
| Gray 100      | ![#F2F2F2](https://via.placeholder.com/10/F2F2F2?text=+) | #F2F2F2     |


## Funcionalidades

- Registro de um novo terro
- Registro de interessados
- Controle de ferramentas
- Controle de estoques
- Alocação de recursos
- Gestão de negócio
- Geração de estatísticas

## Documentação da API

#### Documentação completa poderá se vista por meio do [Backend](https://github.com/AS-IPB-23/Team10-api)



## Stack utilizada

**Front-end:** React, Styled-Components, React-Slick, React-Router-Dom@v6, Axios, Material UI 

**Back-end:** Python, FastAPI, Swagger

**Banco de dados:** MongoDB


## Rodando localmente

  O projeto foi desenvolvido utilizando o gerenciador de pacotes Yarn.

Clone o projeto

```bash
  git clone https://github.com/AS-IPB-23/Team10-front.git frontend
```

Entre no diretório do projeto

```bash
  cd frontend
```

Instale as dependências 

```bash
  yarn
```

Inicie o servidor

```bash
  yarn start
```

Ao final do processo o projeto será executado na porta 3000.