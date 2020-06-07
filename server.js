const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const app = express();
require('dotenv/config');

app.use(express.json());
mongoose.connect(
    'mongodb://0.0.0.0:27017/bankDB',
    { useUnifiedTopology: true, useNewUrlParser: true,'useFindAndModify': false}

);

requireDir('./src/models');

app.use('/api',require("./src/routes"));    //Rota da api

app.listen( 3200)