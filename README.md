## Bank-API

### Simula uma API de um banco

Esse repositorio esta sendo desenvolvido para fazer algumas atividades básicas de um banco, isso não quer dizer que essa API é de um banco ou foi feita para esse propósito, por tanto, esse repositório não segue os critérios que um banco regulamento deve ter. Sendo uma API para testar aplicativos.



### Para acessar a API

* Ao acessar as rotas remover os [ ... ] Ex:  `http://localhost:3200/api/j4ugf82jso/newtransaction ` 

#### Ver Transações 

**(Metodo GET)**  `http://[IP_DO_SERVIDOR]:3200/api/user/[ID_DO_USUARIO]/transactions`

##### Resultado

```
[
  {
    "valor": 1000,
    "tipo": "Deposito",
    "descricao": "String",
    "categoria": "none",
    "_id": "5edd587a92da831325177ea8",
    "data": "2020-04-27T08:01:53.676Z",
    "dataLote": "2020-04-27T00:00:00.000Z",
    "numeroDocumento": "1000",
    "cpfCnpj": "1234"
  }
  ...
]
```



#### Nova Transação

**(Metodo POST)** `http://[IP_DO_SERVIDOR]:3200/api/user/[ID_DO_USUARIO]/newtransaction`

##### Estrutura em JSON

```json
{
	"Transacoes":{
		"tipo":"Deposito",
		"valor":123,
		"data":"2020-04-27t08:01:53.676Z",
		"dataLote":"2020-04-27",
		"descricao":"String",
		"numeroDocumento":1000,
		"cpfCnpj":1234,
		"categoria": "none"
	}
}
```

