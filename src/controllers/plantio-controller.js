'use strict';

const mongoose = require('mongoose');
const Plantio = mongoose.model('plantio');
const repository = require('../repositories/plantio-repository');
const repository_medicao = require('../repositories/medicao-repository');

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

exports.leitura = async (req, res, next) => {
  try {

    var plantios = repository.get()
    
    let leitura = {
      idPlantio
    }

    for (const i in plantios) {
       for (const j in plantios[i].controladores){
         let medicao = repository_medicao.getByControlador(plantios[i].controladores[j]._id)
       }
    }
    
    res.status(200).send(lista)
    
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao processar requisição',
      erro: error.message
    })    
  }
}


