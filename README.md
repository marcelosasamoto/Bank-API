## Bank-API

### Simula uma API de um banco

Esse repositorio esta sendo desenvolvido para fazer algumas atividades básicas de um banco, isso não quer dizer que essa API é de um banco ou foi feita para esse propósito, por tanto, esse repositório não segue os critérios que um banco regulamento deve ter. Sendo uma API para testar aplicativos.



### Para acessar a API

* Ao acessar as rotas remover os [ ... ] Ex:  `https://bank-api-one.herokuapp.com/api/j4ugf82jso/newtransaction ` 

#### Dados da conta do usuario

**(Metodo GET)** `https://bank-api-one.herokuapp.com/api/user/[ID_DO_USUARIO]`

##### Resultado

```json
{
  "fatura": 200,
  "fatura_vencimento_dia": "06",
  "debito": 0,
  "cartao_credito": 800,
  "_id": "5ee7901ca5031242016ec4d2",
  "name": "joao",
  "email": "joao@email.com",
  "password": "$2b$08$Fte0ZFz0f2PAqnwlwnsqpONU6V9Elm9TGhcvvgkYzM9Md6/EvUlOW",
  "cpf": 10000000003,
  "address": "Belem - PA",
  "bday": "1999-12-30T00:00:00.000Z",
  "account": [
    {
      "_id": "5ee7901ca5031242016ec4d3",
      "agencia": 2325,
      "agencia_digito": 8,
      "numero_conta": 1740,
      "conta_digito": 0
    }
  ],
  "cards": [
    {
      "cardtype": "VISA",
      "active": true,
      "_id": "5ee7901ca5031242016ec4d4",
      "name": "Bank API",
      "number": 6795829583904242,
      "valid_until": "2027-03-01T03:00:00.000Z",
      "cvv": 915
    }
  ],
  "transacao": [
    {
      "valor": 200,
      "tipo": "Transferencia",
      "descricao": "String",
      "categoria": "none",
      "_id": "5ee79060a5031242016ec4d5",
      "data": "2020-04-27T08:01:53.676Z",
      "cpf_destinatario": 10000000002,
      "cpf_remetente": 10000000003
    }
  ],
  "__v": 0
}
```



#### Criar conta no Bank-API 

**(Metodo POST)**  `https://bank-api-one.herokuapp.com/api/user/[ID_DO_USUARIO]/createuser`

##### Estrutura do JSON

```
{
	"name":"joao",
	"email":"joao@email.com",
	"password":"sasa",
	"cpf":10000000003,
	"address":"Belem - PA",
	"bday":"1999-12-30"
} 
```



#### Ver Cartões 

**(Metodo GET)**  `https://bank-api-one.herokuapp.com/api/user/[ID_DO_USUARIO]/cards`

##### Resultado

```
[
  {
    "cardtype": "VISA",
    "active": true,
    "name": "Bank API",
    "number": 6795829583904242,
    "valid_until": "2027-03-01T03:00:00.000Z",
    "cvv": 915
  }
]
```



#### Ver Transações 

**(Metodo GET)**  `https://bank-api-one.herokuapp.com/api/user/[ID_DO_USUARIO]/transactions`

##### Resultado

```
[
  {
    "valor": 200,
    "tipo": "Transferencia",
    "descricao": "String",
    "categoria": "none",
    "_id": "5ee78238231ac03ea21af0cd",
    "data": "2020-04-27T08:01:53.676Z",
    "cpf_destinatario": 10000000002,
    "cpf_remetente": 10000000001
  },
  {
    "valor": 500,
    "tipo": "Transferencia",
    "descricao": "String",
    "categoria": "none",
    "_id": "5ee7803994f4973e385698c2",
    "data": "2020-04-27T08:01:53.676Z",
    "cpf_destinatario": 10000000002,
    "cpf_remetente": 10000000001
  },
]
```



#### Fazer Transação

**(Metodo POST)** `https://bank-api-one.herokuapp.com/api/user/[ID_DO_USUARIO]/newtransaction`

##### Estrutura em JSON

```json
{
	"transacao":{
		"tipo":"Transferencia",
		"valor":200,
		"data":"2020-04-27t08:01:53.676Z",
		"descricao":"String",
		"cpf_destinatario":10000000002,
		"categoria": "none"
	}
}
```

