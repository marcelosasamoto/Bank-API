const mongoose = require('mongoose');
const User = mongoose.model('User');
module.exports = {
    
    async showcard(req,res){ 
        var card = [];
        await User.findById(req.params.id)
        .then(function(usr){
            for (let i=0;i<usr.cards.length;i++){
                console.log('usr',usr.cards[i]);
                card[i] = {
                    cardtype: usr.cards[i].cardtype,
                    active: usr.cards[i].active,
                    limit: usr.limit,
                    name: usr.cards[i].name,
                    number: usr.cards[i].number,
                    valid_until: usr.cards[i].valid_until,
                    cvv: usr.cards[i].cvv
                }
            }
            
            console.log(card)
            return res.json(card);
        })
        .catch(function(err){
            console.log(err)
            return res.sendStatus(400)
        })
    },
    async acessbank(req,res){
        User.find({cpf:req.body.cpf})
        .then( c =>{
            const {cpf,num} = req.body
            c = c[0]
            for(i=0;i<c.cards.length;i++){
                if(c.cpf == cpf && c.cards[i].number == num){
                    return res.json({id:c._id})
                }
            }
            return res.json({message:'Não é possivel adicionar o cartão, verifique seus dados'})
        })
        .catch(c=>{
            console.log('errr',c)
        })
    }


}