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
<<<<<<< HEAD
    { useUnifiedTopology: true, useNewUrlParser: true,useFindAndModify:false, useCreateIndex:true}
=======
    { useUnifiedTopology: true, useNewUrlParser: true,'useFindAndModify': false}
>>>>>>> 7ddd2aa8b53e0531e2912894c7756af25acc8197

);

requireDir('./src/models');

app.use('/api',require("./src/routes"));    //Rota da api

<<<<<<< HEAD
=======

>>>>>>> 7ddd2aa8b53e0531e2912894c7756af25acc8197
app.listen(process.env.PORT || 3200)