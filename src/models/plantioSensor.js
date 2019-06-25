var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  cultura: Number, // m2
  produtividade: {
    pesoBruto: Number, //kg
    pesoLiquido: Number //kg
  }
});


module.exports = mongoose.model('plantioSensor', schema);
