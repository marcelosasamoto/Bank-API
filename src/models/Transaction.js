const mongoose = require("mongoose");


const TransactionSchema = new mongoose.Schema({
    valor:{
        type:Number,
        default:0,
        min:1,
        required: true
    },
    tipo:{
        type:String,
        default:'',
        required: true
    },
    data:{
        type: Date,
        required: true
    },
    descricao:{
        type:String,
        default:''
    },
    cpf_destinatario:{
        type:Number,
        min:10000000000,
        required:true
    },
    cpf_remetente:{
        type:Number,
        min:10000000000,
        required:true
    },
    categoria: {
        type:String,
        default:""
    }
});

module.exports = TransactionSchema;
