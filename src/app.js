'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

// Connecta ao banco
    mongoose
      .connect(config.connectionString, { useNewUrlParser: true, useMongoClient: true })
      .then(() => console.log("mongoDB connected"))
      .catch(err => console.log(err));
  
    console.log("Desenvolvimento");
  

// Carrega os Models
const Medicao = require('./models/medicao');

// Carrega as Rotas

const indexRoute = require('./routes/index-route');
const medicaoRoute = require('./routes/medicao-route');

app.use(bodyParser.json({
    limit: '5mb'
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

console.log('teste');

app.use('/', indexRoute);
app.use('/medicao', medicaoRoute);

module.exports = app;