# Notifications-Service

> Projeto realizado durante o evento IgniteLab-NodeJs da Rocketseat
 
 ## Projeto foi desenvolvido com NodeJs, TypeScript, Nest e SQLite, e fornece uma Api Rest para o envio e o gerenciamento de notificações.
 
 > Status do Projeto: Concluido :heavy_check_mark:
 
 ## Principais libs utilizadas

- [NodeJs](https://nodejs.org/en/)
- [NestJs](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Jest](https://jestjs.io/pt-BR/)
- [SQLite](https://www.sqlite.org/index.html)

 ## Back-End - NodeJs com NestJs
 
#### Foi utilizado o framework NestJs para a criação da Api, aplicando conceitos do Solid, e Jest para a criação dos testes unitários.

Com o desenvolvimento da api seguindo os padrões do nest e utilizando conceitos do Solid como inversão de dependência e injeção de dependência, utilizando o PrismaOrm para se conectar ao banco de dados em memória e realizar operações.

## Rotas da aplicação

- > http://localhost:3000/notifications : Post - Criação de uma nova notificação, recipientId no formato uuid, exemplo:
```sh
{
"recipientId": "944ae520-85f4-4bef-94cb-6940097f4706",
"content": "Nova notificação para o readme",
"category": "readme"
}
```

- > http://localhost:3000/notifications/from/:recipientId : Get - Listagem de todas as notificações de um usuário.

- > http://localhost:3000/notifications/count/from/:recipientId : Get - Contagem de todas as notificações de um usuário.

- > http://localhost:3000/notifications/:id/unread : Patch - Faz a leitura de uma notificação através do id

- > http://localhost:3000/notifications/:id/unread : Patch - Retira a leitura de uma notificação através do id

- > http://localhost:3000/notifications/:id/unread : Patch - Cancela uma notificação através do id

## Iniciando aplicação e principais scripts

- Instalar dependências 
```sh
> npm install
```

- Gerar o build da aplicação
```sh
> npm run build
```

- Inicia a aplicação
```sh
> npm run start
```

- Inicia a aplicação em ambiente de desenvolvimento
```sh
> npm run start:dev
```

- Inicia a aplicação em ambiente de produção
```sh
> npm run start:prod
```

- Executa os testes da aplicação
```sh
> npm run test
```

<!--
-->
