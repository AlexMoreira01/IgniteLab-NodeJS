# Notifications-Service

> Project carried out during Rocketseat's IgniteLab-NodeJs event
 
 ## Project was developed with NodeJs, TypeScript, Nest and SQLite, and provides a Rest Api for sending and managing notifications.
 
 > Status: Completed :heavy_check_mark:
 
## 🛠 Techs

- [NodeJs](https://nodejs.org/en/)
- [NestJs](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Jest](https://jestjs.io/pt-BR/)
- [SQLite](https://www.sqlite.org/index.html)

 ## Back-End - NodeJs with NestJs
 
#### NestJs framework was used to create the Api, applying Solid and Jest concepts for the creation of unit tests.

With the development of the api following nest standards and using Solid concepts such as dependency inversion and dependency injection, using PrismaOrm to connect to the in-memory database and perform operations.

## Routes 

- > http://localhost:3000/notifications : Post - Creating a new notification, recipientId in uuid format, example:
```sh
{
"recipientId": "944ae520-85f4-4bef-94cb-6940097f4706",
"content": "New notification for readme",
"category": "readme"
}
```

- > http://localhost:3000/notifications/from/:recipientId : Get - Listing of all notifications for a user.

- > http://localhost:3000/notifications/count/from/:recipientId : Get - Count of all notifications of a user.

- > http://localhost:3000/notifications/:id/unread : Patch - Reads a notification using id.

- > http://localhost:3000/notifications/:id/unread : Patch - Removes the reading of a notification by id.

- > http://localhost:3000/notifications/:id/unread : Patch - Cancels a notification by id.

## Getting Started

- Install dependencies: 
```sh
> npm install or yarn 
```

- Build the project
```sh
> npm run build or yarn build
```

- Running the project
```sh
> npm run start or yarn start
```

- Start the application in development environment
```sh
> npm run start:dev or yarn start:dev
```

- Start the aplication in production environment
```sh
> npm run start:prod or yarn start:prod
```

- Running testd
```sh
> npm run test or yarn test
```
