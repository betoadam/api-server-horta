'use strict';

const mongoose = require('mongoose');
//const Produto = mongoose.model('sensor');

let sensor = {
  cultura: 'alface',
  codigo: '', //não alterado
  tipo: 'BME380', //BME380 / 20 AWG
  coordenada: {
    lt: 51.000,
    lg: -15.000
  }
}

exports.get = async (req, res, next) => {
  try {
    res.status(200).send({
      sensor
    })
    
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao processar requisição',
      erro: error.message
    })
    
  }
}