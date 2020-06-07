const mongoose = require("mongoose");

const TransacoesSchema = new mongoose.Schema({
    valor:{
        type:Number,
        default:0,
        required: true
    },
    tipo:{
        type:String,
        default:"",
        required: true
    },
    data:{
        type: Date,
        
        required: true
    },
    dataLote:{
        type:Date,
        required: true

    },
    descricao:{
        type:String,
        default:" "
    },
    numeroDocumento:{
        type:String,
        required:true
    },
    cpfCnpj:{
        type:String,
        required:true
    },
    categoria: {
        type:String,
        default:""
    }

});

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    transacoes:[TransacoesSchema]
    //Tem que criar outros Schemas do usuario para o banco
});
const User = mongoose.model('User',UserSchema);
module.exports = User;