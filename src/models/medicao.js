'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new Schema({
  controlador:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'controlador',
      required: true  
  },
  sensor:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'sensor',
      required: true
  },
  medicao: [{
    tipo: {
      type: String, //temperatura, pressão, umidade 
      required: true
    }, 
    valor: {
      type: Number,
      required: true
    } 
  }],
  data: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('medicao', schema);