# Notifications-Service
 
 ## Projeto foi desenvolvido com NodeJs, TypeScript, Nest e SQLite, e fornece uma Api Rest para o envio e o gerenciamento de notificações.
 
   <!-- ### Projeto realizado durante o evento IgniteLab-NodeJs da Rocketseat -->
 
 > Status do Projeto: Concluido :heavy_check_mark:
 
 ## Principais frameworks e libs utilizadas

- [NodeJs](https://nodejs.org/en/)
- [NestJs](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Jest](https://jestjs.io/pt-BR/)
- [SQLite](https://www.sqlite.org/index.html)

 ## Back-End - NodeJs com NestJs
 
#### Foi utilizado o framework NestJs para a criação da Api, aplicando conceitos do Solid, e Jest para a criação dos testes unitários.

Com o desenvolvimento da api seguindo os padrões do nest e utilizando conceitos do Solid como inversão de dependência e injeção de dependência, utilizando o PrismaOrm para se conectar ao banco de dados em memória e realizar operações.
 
<br>

## Rotas da aplicação
<!--
### Links - rotas utilizando somente o http - https sem funcionamento ainda
- > http://54.211.140.125/link/list : Get - Listagem de todos os links
- > http://54.211.140.125/link/create : Post - Criação de links com informações passadas no body como Json, exemplo:
```sh
{
"label": "Título ",
"url": "Link artigo"
}
```
- > http://54.211.140.125/link/devGo/import : Post - Importação de link com informações passadas no body como Json, exemplo:
```sh
{
"url": "https://devgo.com.br/"
}
```
- > http://54.211.140.125/link/update/:id : Put - Atualização de um link pelo seu id passado por route param
- > http://54.211.140.125/link/delete/:id : Delete - Deleta um link pelo seu id passado por route param

## Deploy da Aplicação com Netlify e Aws:

> https://control-links.netlify.app/ - Front-end

> http://54.211.140.125 - Back-end, acesso a Api http - requisições pelo insomnia

> https://dev.freelancerdesucesso.fun/ - Back-end, acesso a Api com https - não propagado ainda

## Para se executar o projeto em desenvolvimento ou build

#### Atenção ao se rodar as migrations do typeorm deve se alterar a pasta em server/src/database/index.ts, que esta comentado, o caminho para acesso das migrations é alterado quando se gera o build da aplicação.
#### O link utilizado pelo axios em web/src/services/api.ts, também deve ser alterado e nele ja contém o link que é a rota padrão para acesso das outras, em desenvolvimento esta: http://54.211.140.125/link e em produção https://dev.freelancerdesucesso.fun/link

- Instalar dependências - Executar na pasta web e server - yarn ou npm
```sh
yarn ou npm
```
- Na pasta web e server - Inicia a duas aplicações como desenvolvimento
```sh
yarn dev
```
- Na pasta web e server - Cria o build das duas aplicações
```sh
yarn build
```
- Na pasta server - Roda a aplicação com o build gerado
```sh
yarn start
```
- Na pasta web - Roda a aplicação com o build gerado
```sh
yarn deploy
```

 
 <br>
 

-->
 
