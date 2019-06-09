var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  cultura:  String, //front-end informa a cultura do sensor
  codigo: Number, //não alterado
  tipo: String, // Umidade, Temperatura, Luminosidade, etc
  posicao: {
    x: String,
    y: String,
    z: String
  },
  medicao: [{
    valor: Number, //temperatura, 
    data:  Date
  }],
  limiar: {
    valorMinimo: Number,
    valorMaximo: Number,
    tempo: Number //segundos
  }
});


module.exports = mongoose.model('sensor', schema);