var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  mac: {
    type: String, //temperatura, pressão, umidade 
    required: true
  },
  descricao: {
    type: String, //temperatura, pressão, umidade 
    required: true
  },
  sensores:[{
    sensor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'sensor',
      required: false
    },
    codigo: {
      type: String, //temperatura, pressão, umidade 
      required: false
    }
  }],
});


module.exports = mongoose.model('controlador', schema);
