var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  area: Number, // m2
  controladores:[{
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'controlador',
      required: true
    },    
  }],
  produtividade: {
    pesoBruto: Number, //kg
    pesoLiquido: Number //kg
  }
});


module.exports = mongoose.model('plantio', schema);
