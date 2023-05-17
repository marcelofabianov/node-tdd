# Node GraphQL

Este é um exemplo de como utilizar GraphQL com Node e outras tecnologias

### Sobre

Este projeto mostra como criar um servidor GraphQL utilizando as tecnologias mencionadas acima. O TypeScript é utilizado para trazer tipagem e segurança de tipos para o código, enquanto o SWC é utilizado para compilar o código TypeScrip. O Apollo Server é utilizado para criar o servidor GraphQL em si, e o Nodemon é utilizado para reiniciar o servidor automaticamente a cada mudança no código. O Pino é um logger utilizado para logar as requisições e respostas do servidor, e o Dotenv é utilizado para carregar variáveis de ambiente a partir de um arquivo .env.

### Tecnologias utilizadas

- [x] Dotenv
- [x] TypeScript
- [x] SWC
- [x] Nodemon
- [x] Pino
- [x] GraphQL
- [x] Apollo Server 4
- [x] Jest
- [x] Husky
- [x] Eslint
- [x] Prettier
- [x] Commitizen cs-cli
- [x] Github Actions
- [ ] SuperTest
- [ ] Prisma PostgreSQL

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
