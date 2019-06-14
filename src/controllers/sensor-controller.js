'use strict';

const mongoose = require('mongoose');
const Sensor = mongoose.model('sensor');
const repository = require('../repositories/sensor-repository');

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