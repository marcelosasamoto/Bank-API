const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const requireDir = require("require-dir");
const app = express();
require('dotenv/config');
app.use(cors())
app.use(express.json());
mongoose.connect(
    process.env.DB_LINK,
    { useUnifiedTopology: true, useNewUrlParser: true,useFindAndModify:false, useCreateIndex:true}

);

requireDir('./src/models');

app.use('/api',require("./src/routes"));    //Rota da api

app.listen(process.env.PORT || 3200)