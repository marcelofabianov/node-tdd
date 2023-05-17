# Node TDD

Este projeto tem como objetivo realizar um estudo de modelagem de dominio guiado por TDD

### Sobre

Este projeto foi criado com o objetivo de estudar a criação de um servidor GraphQL com NodeJS, utilizando TypeScript, SWC, Nodemon, Pino, Jest, Husky, Eslint, Prettier, Commitizen cs-cli, Github Actions e SuperTest.

### Tecnologias utilizadas

- [x] Dotenv
- [x] TypeScript
- [x] SWC
- [x] Nodemon
- [x] Pino
- [x] Jest
- [x] Husky
- [x] Eslint
- [x] Prettier
- [x] Commitizen cs-cli
- [x] Github Actions
- [x] SuperTest
- [x] Prisma PostgreSQL

- [ ] Start Domain

### Instalação

Para instalar o projeto, basta clonar o repositório e rodar o comando npm install na raiz do projeto.

```bash
git clone https://github.com/marcelofabianov/node-graphQL-swc-nodemon-pino && npm install
```

### Execução

Para rodar o servidor em modo de desenvolvimento, basta rodar o comando npm run dev:server na raiz do projeto. O servidor irá reiniciar automaticamente a cada mudança no código.

```bash
npm run dev:server
```

Para rodar o servidor em modo de produção, basta rodar o comando npm start na raiz do projeto.

```bash
npm start:prod
```

### Execução dos testes

Para rodar os testes, basta rodar o comando npm run test na raiz do projeto.

```bash
npm run test
```

ou npm run test:watch ou test:coverage ou test:cov-watch

### Uso

Para utilizar o servidor, basta acessar o endereço http://localhost:4000 e utilizar o playground do GraphQL para fazer as requisições.

### Politicas de versonamento

Este projeto esta seguindo as convenções de "Conventional Commits". Para facilitar o uso destas convenções, o Commitizen foi adicionado ao projeto. Para fazer um commit, basta rodar o comando npm run commit na raiz do projeto.

Exemplo:

```bash
git add . && npm run commit
```

Para saber mais sobre o Commitizen, acesse:

- https://github.com/commitizen/cz-cli

Para saber sobre o padrao de commits utilizado, acesse:

- https://www.conventionalcommits.org/en/v1.0.0/

Extra:

- https://semver.org/
- https://www.npmjs.com/package/husky
