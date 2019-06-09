'use strict';
const mongoose = require('mongoose');
const Sensor = mongoose.model('sensor');

exports.get = async() => {
    const res = await Sensor.find({}, 
        'cultura codigo tipo posicao medicao limiar macControlador');
    return res;
}

exports.create = async(data) => {
    var sensor = new Sensor(data);
    const res = await sensor.save();
    return res;
}

exports.getByMacCodigo = async(codigo,tipo,macControlador) => {
    const res = await Sensor
        .findOne({
            codigo: codigo,
            tipo: tipo,
            macControlador: macControlador
        }, 'cultura codigo tipo posicao medicao limiar macControlador');
    return res;
}

exports.update = async(data) => {
    let res = await Sensor
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
    return await Sensor
        .findByIdAndRemove(id);
}

