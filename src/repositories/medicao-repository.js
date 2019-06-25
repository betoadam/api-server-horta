'use strict';
const mongoose = require('mongoose');
const Medicao = mongoose.model('medicao');

exports.get = async() => {
    const res = await Medicao.find({}, 
        'controlador sensor medicao data');
    return res;
}

exports.getByControlador = async(id) => {
    const res = await Medicao.find({controlador:id}, 
        'controlador sensor medicao data');
    return res;
}

exports.create = async(data) => {
    var medicao = new Medicao(data);
    const res = await medicao.save();
    return res;
}

exports.update = async(data) => {
    let res = await Medicao
        .findOneAndUpdate({
            _id: data._id
        }, {
            $set: {
                codigoSensor: data.codigoSensor,
                mac: data.mac,
                tipo: data.tipo,
                medicao: data.medicao,
                data:data.data
            }
        }, {upsert: true, new: true}, function(err, res){

        });

    return res;
}

exports.delete = async(id) => {
    return await Medicao
        .findByIdAndRemove(id);
}

