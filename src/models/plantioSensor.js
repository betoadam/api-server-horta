var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  cultura: String, //
  produtividade: {
    pesoBruto: Number, //kg
    pesoLiquido: Number //kg
  }
});


module.exports = mongoose.model('plantioSensor', schema);
