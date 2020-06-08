const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserController");
const TransacoesController = require("./controllers/TransacoesController");


//Rotas do User
routes.get("/user/showall",UserController.showall);
routes.get("/user/:id",UserController.user);
routes.get("/createuser",UserController.store);


//Rotas da Transacoes
routes.get("/user/:id/transactions",TransacoesController.Transactions);
routes.post("/user/:id/newtransaction",TransacoesController.newTransaction);





module.exports = routes;