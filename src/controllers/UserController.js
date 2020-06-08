const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');
const saltRounds = 8;

module.exports = {

    async store(req, res) {
        await User.findOne({email: req.body.email }) //retorna email se existir
        .then(function(userExist){
            if (userExist){
                return res.status(400).json( {error: 'E-mail já está em uso'}); //retorna que o usuario ja existe
            }
            const { name, email, password } = req.body;
            bcrypt.hash(password, saltRounds, function (err,hash){
                const user = User.create({
                    name: name,
                    email: email,
                    password: hash
                }).then(function(data){
                    if (data){
                        res.json(data)
                    }
                });
            });
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


}