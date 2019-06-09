'use strict';
const mongoose = require('mongoose');
const Controlador = mongoose.model('controlador');

exports.get = async() => {
    const res = await Controlador.find({}, 
        'mac descricao sensores');
    return res;
}

exports.create = async(data) => {
    var controlador = new Controlador(data);
    const res = await controlador.save();
    return res;
}

exports.update = async(data) => {
    let res = await Controlador
        .findOneAndUpdate({
            _id: data._id
        }, {
            $set: {
                mac: data.mac,
                descricao: data.descricao,
                sensores: data.sensores
            }
        }, {upsert: true, new: true}, function(err, res){

        });

    return res;
}

exports.delete = async(id) => {
    return await Controlador
        .findByIdAndRemove(id);
}

