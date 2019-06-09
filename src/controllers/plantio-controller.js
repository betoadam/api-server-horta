'use strict';

const mongoose = require('mongoose');
//const Produto = mongoose.model('sensor');

let plantio = {
  area: 30,
  controladores:['503049asdeead33334ad'],
  produtividade: {
    pesoBruto: 50, //kg
    pesoLiquido: 45 //kg
  }
}

exports.get = async (req, res, next) => {
  try {
    res.status(200).send({
      plantio
    })
    
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao processar requisição',
      erro: error.message
    })    
  }
}