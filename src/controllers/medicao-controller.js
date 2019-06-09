'use strict';

const repository = require('../repositories/medicao-repository');

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}
/*
exports.getById = async(req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}*/

exports.post = async(req, res, next) => {
    try {
        let medicao = {
            codigoSensor: req.body.codigoSensor,
            mac: req.body.mac,
            tipo: req.body.tipo,
            medicao: req.body.medicao,
            data: new Date()
        };
        let retorno = await repository.create(medicao);
        console.log(retorno);
        
        res.status(201).send({
            message: 'Medicao cadastrado com sucessoo!',
            resposta: retorno
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição',
            erro: e
        });
    }
};

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body.id)
        res.status(200).send({
            message: 'Servico removido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};