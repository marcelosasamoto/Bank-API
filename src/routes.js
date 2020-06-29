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

//Rotas para acesso do banco
routes.post("/user/acess/",CardsController.acessbank);

//Rotas da Transacoes
routes.get("/user/:id/transactions",TransacoesController.Transactions);
routes.post("/user/:id/newtransaction",TransacoesController.newTransaction);

routes.post("/user/:id/transactionmodify",TransacoesController.transactionmodify);

//Rota de Deposito
routes.get("/user/:id/pagarfatura",TransacoesController.Pagarfatura);

//Rota de Categorizar
routes.post("/user/categorizar",TransacoesController.upcategoria);



module.exports = routes;