'use strict';
const mongoose = require('mongoose');
const Plantio = mongoose.model('plantio');

exports.get = async() => {
    const res = await Plantio
        .find({},'area controladores produtividade')
        .populate('controlador');
    return res;
}

exports.create = async(data) => {
    var plantio = new Plantio(data);
    const res = await plantio.save();
    return res;
}

exports.update = async(data) => {
    let res = await Plantio
        .findOneAndUpdate({
            _id: data._id
        }, {
            $set: {
                area: data.area,
                controladores: data.controladores,
                produtividade: data.produtividade
            }
        }, {upsert: true, new: true}, function(err, res){

        });

    return res;
}

exports.delete = async(id) => {
    return await Plantio
        .findByIdAndRemove(id);
}

