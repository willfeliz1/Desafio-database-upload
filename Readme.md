<h1 align="center">
  Desafio GoStack #6
</h1>
<h1 align="center">
  <img src="https://ik.imagekit.io/l4en7xyqq3/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67_u7F4RKLkz.png">
</h1>

## 📕 About

The main objective of this challenge is to insert records to the database through file import.

## ⚡ Techs

* [Node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [Typescript] - typed superset of JavaScript that compiles to plain JavaScript.
* [TypeORM] - an ORM that can run in Nodej, browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript
* [Yarn] - package manager that doubles down as project manager.

## 💻 Instalation

### Docker

With docker hub installed, follow the commands:

```sh

$ docker run --name gostack_postgree -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgrees

$ docker start gostack_postgree

```
### Start server

Install dependencies and start the server.

```sh

$ yarn
$ yarn dev:server

```

## If you want to see the unit testing 😊


```sh

$ yarn test

```
### what he expects

```
$ cross-env NODE_ENV=test jest
 PASS  src/__tests__/Transaction.spec.ts
  Transaction
    📌 should be able to list transactions
    📌 should be able to create new transaction
    📌 should create tags when inserting new transactions
    📌 should not create tags when they already exists
    📌 should not be able to create outcome transaction without a valid balance
    📌 should be able to delete a transaction
    📌 should be able to import transactions

```



[node.js]: <http://nodejs.org>
[express]: <http://expressjs.com>
[typescript]: <https://www.typescriptlang.org/>
[typeORM]: <https://typeorm.io/#/>
[Yarn]: <https://yarnpkg.com/>
