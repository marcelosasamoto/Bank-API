const mongoose = require("mongoose");
const CardScheme = require("./Card");
const TransactionScheme = require('./Transaction')

const Account = new mongoose.Schema({
    agencia:{
        type:Number,
        min:1000,
        required:true
    },
    agencia_digito:{
        type:Number,
        min:0,
        required:true
    },
    numero_conta:{
        type:Number,
        min:1000,
        required:true
    },
    conta_digito:{
        type:Number,
        min:0,
        required:true
    }
});

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        lowercase:true,
        unique:true,
        required:[true, "Email is required"]
    },
    account:[
        Account
    ],
    password:{
        type:String,
        required:true,
    },
    cpf:{
        type:Number,
        unique:true,
        min:10000000000,
        max:99999999999,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    fatura:{
        type:Number,
        default:0
    },
    fatura_vencimento_dia:{
        type:String,
        default:'06'
    },
    debito:{
        type:Number,
        default:0
    },
    cartao_credito:{
        type:Number,
        default:1000
    },
    transacao:[TransactionScheme],
    bday:{
        type:Date,
        require:true
    },
    cards: [CardScheme],

    //Tem que criar outros Schemas do usuario para o banco
});
const User = mongoose.model('User',UserSchema);
module.exports = User;