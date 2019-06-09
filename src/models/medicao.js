'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  codigoSensor: {
    type: String,
    required: true
  },
  mac: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true
  },
  medicao: [{
    tipo: {
      type: String,
      required: true
    },
    valor: {
      type: Number,
      required: true
    }
  }],
  data: {
    type: Date,
    required:false
  }

});

module.exports = mongoose.model('medicao', schema);