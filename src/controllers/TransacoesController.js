const mongoose = require('mongoose');
const User = mongoose.model('User');
module.exports = {

    async newTransaction(req, res) {
        await User.findByIdAndUpdate(req.params.id,  
            { $push: { transacoes: req.body.transacoes } } , { new: true})  //Atualiza o array
        .then(function(){
            return res.sendStatus(200)
        })
        .catch(function(err){
            console.log(err);
            return res.sendStatus(400);
        })
    },
    async Transactions(req,res){ 
        await User.findById(req.params.id)
        .then(function(usr){
            return res.json(usr.transacoes)
        })
        .catch(function(err){
            return res.sendStatus(400)
        })
    }


}