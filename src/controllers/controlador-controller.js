'use strict';

const mongoose = require('mongoose');
//const Produto = mongoose.model('sensor');

let controlador = {
  mac: 'mac',
  descricao: 'descricao',
  sensores: ['idsensor1', 'idsensor2']
}

exports.get = async (req, res, next) => {
  try {
    res.status(200).send({
      controlador
    })

  } catch (error) {
    res.status(500).send({
      message: 'Falha ao processar requisição',
      erro: error.message
    })
  }
}