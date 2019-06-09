var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  mac: String,
  descricao:  String,
  sensores:[{
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'sensor',
      required: true
    },    
  }],
});


module.exports = mongoose.model('controlador', schema);
