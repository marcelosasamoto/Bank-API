const mongoose = require('mongoose');
const User = mongoose.model('User');


module.exports = {

    async newTransaction(req, res) {
        if (req.body.transacao.valor <= 0){
            return res.json({message:"Valor invalido"})
        }
        const cpfExist = User.findOne({cpf:req.body.transacao.cpf_destinatario})
        .then(async function(d){
            if (d){  
                await User.findById(req.params.id).then(async function(a){
                    if (a.cpf === d.cpf){
                        return res.json({message:"Não use seu CPF"})
                    }
                    console.log('fatura',a.fatura, 'credito',a.cartao_credito)
                    if (req.body.transacao.valor > a.cartao_credito){
                        return res.json({message:"Você não tem credito suficiente para essa transação"})
                    }
                    await User.findByIdAndUpdate(req.params.id,  
                        { $push: 
                            { transacao: {
                                tipo:req.body.transacao.tipo,
                                valor:-req.body.transacao.valor,
                                data:req.body.transacao.data,
                                descricao:req.body.transacao.descricao,
                                cpf_destinatario:req.body.transacao.cpf_destinatario,
                                cpf_remetente:a.cpf,
                                categoria:req.body.transacao.categoria
                            }
                            }
                        } , { new: true})  //Atualiza o array
                    .then(async function(remetente){
                        //console.log(d.cpf)
                        User.findOneAndUpdate({cpf:remetente.cpf},{ $set: { cartao_credito: remetente.cartao_credito-req.body.transacao.valor } })
                        .then(function(s){
                            //console.log('SSSSS',s.cartao_credito)
                            User.findOneAndUpdate({cpf:d.cpf},{ $set: { debito: d.debito+req.body.transacao.valor} })   //destinatario recebe
                            .then(async function(s){
                                
                                await User.findOneAndUpdate({cpf:d.cpf},    //extrado do destinatario
                                    { $push: 
                                        { transacao: {
                                            tipo:req.body.transacao.tipo,
                                            valor:+req.body.transacao.valor,
                                            data:req.body.transacao.data,
                                            descricao:req.body.transacao.descricao,
                                            cpf_destinatario:req.body.transacao.cpf_destinatario,
                                            cpf_remetente:a.cpf,
                                            categoria:req.body.transacao.categoria
                                        }
                                        }
                                    } , { new: true})
                                .then(async function(p){
                                    //console.log(p.cpf,p.transacao)
                                    await User.findOneAndUpdate({cpf:remetente.cpf},{ $set: { fatura: remetente.fatura+ req.body.transacao.valor}})
                                    .then(function(w){
                                        return res.json({message:"Transação realizado com sucesso"})
                                    })
                                })
                            })

                            
                        })
                        
                    })
                    .catch(function(err){
                        console.log(err)
                        return res.sendStatus(400);
                    })


                })
            }
            else{
                return res.json({message:"cpf nao cadastrado"})
            }
            
        })
        .catch(function(err){
            console.log("(cpfExist)",err)
        })
        
        
    },
    async Transactions(req,res){ 
        await User.findById(req.params.id)
        .then(function(usr){
            return res.json(usr.transacao)
        })
        .catch(function(err){
            return res.sendStatus(400)
        })
    },
    async Pagarfatura(req,res){
        await User.findByIdAndUpdate(req.params.id,{
            fatura:0,
            cartao_credito:1000
        })
        .then(q=>{
            return res.json({message:'Fatura paga com sucesso'})
        })
        .catch(w=>{
            console.log('errrooooo')
        })
    }


}