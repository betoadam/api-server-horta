var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  cultura: {//front-end informa a cultura do sensor
    type: String,
    required: false
  },
  codigo: {//front-end informa a cultura do sensor
    type: Number,
    required: true
  },
  macControlador: {//front-end informa a cultura do sensor
    type: String,
    required: true
  },
  tipo: {// Umidade, Temperatura, Luminosidade, etc
    type: String,
    required: true
  },
  posicao: {
    lat: {
      type: String,
      required: false
    },
    long: {
      type: String,
      required: false
    }
  },
  limiar: {
    valorMinimo: {
      type: Number,
      required: false
    },
    valorMaximo: {
      type: Number,
      required: false
    },
    tempo: {
      type: Number,
      required: false
    }
  }
});


module.exports = mongoose.model('sensor', schema);