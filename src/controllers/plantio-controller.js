'use strict';

const mongoose = require('mongoose');
const Plantio = mongoose.model('plantio');
const repository = require('../repositories/plantio-repository');

exports.get = async (req, res, next) => {
  try {
    var lista = await repository.get()
    res.status(200).send(lista)
    
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao processar requisição',
      erro: error.message
    })    
  }
}