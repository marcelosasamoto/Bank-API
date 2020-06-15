const mongoose = require('mongoose');
const User = mongoose.model('User');

const bcrypt = require('bcrypt');
const saltRounds = 8;

module.exports = {

    async store(req, res) {
        const { name, email, password, cpf, address, bday } = req.body;
        User.find({$or:[{email:req.body.email},{cpf:req.body.cpf}]})
        .then(function(exist){
            if (exist.length === 0){
                bcrypt.hash(password, saltRounds, function (err,hash){
                    const user = User.create({
                        name: name,
                        email: email,
                        password: hash,
                        cpf:cpf,
                        address:address,
                        bday:bday,
                        account:{
                            agencia: 2325,
                            agencia_digito: Math.floor(Math.random() * 9),
                            numero_conta:Math.floor(Math.random() * 8999)+1000,
                            conta_digito:Math.floor(Math.random() * 9)
        
                        },
                        cards:{
                            name:'Bank API',
                            number: Math.floor(Math.random()*8999999999999999)+1000000000000000,
                            valid_until:"2027/03",
                            cvv: Math.floor(Math.random()*899)+100

                        }
                    }).then(function(data){
                        if (data){
                            res.json(data)
                        }
                    })
                    .catch(function(err){
                        console.log(err._message)
                        return res.status(400).json({not_unique:err.keyValue})
                    })
                });
            }
            else{
                return res.status(400).json({error:"CPF/Email already exist"})
            }
        })
        
        
       
    },
    
    async showall(req,res){ // Usado para desenvolvimento
        await User.find()
        .then(function(users){
            return res.json(users);
        })
    },

    async user (req, res) {
        await User.findById(req.params.id)
        .then(function(usr){
            return res.json(usr);
        })
        .catch(function(err){
            return res.status(400)
        })
    },
    async documentacao(req,res){
        return res.json({messsage:'Acesse o repositorio em https://github.com/marcelosasamoto/Bank-API'});
    }


}