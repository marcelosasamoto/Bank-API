const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserController");
const TransacoesController = require("./controllers/TransacoesController");
const CardsController = require("./controllers/CardController");

routes.get("/",UserController.documentacao);
//Rotas do User
routes.get("/user/showall",UserController.showall);
routes.get("/user/:id",UserController.user);
routes.post("/createuser",UserController.store);

//Rotas de Cartoes
routes.get("/user/:id/cards",CardsController.showcard);

//Rotas da Transacoes
routes.get("/user/:id/transactions",TransacoesController.Transactions);
routes.post("/user/:id/newtransaction",TransacoesController.newTransaction);





module.exports = routes;