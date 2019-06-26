'use strict';

const repository = require('../repositories/medicao-repository');
const repository_controlador = require('../repositories/controlador-repository');
const repository_sensor = require('../repositories/sensor-repository');

exports.get = async (req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.sincronizar = async (req, res, next) => {
    let lista = new Array();
    try {
        let retorno
        let item = req.body
        let medicao = {
            controlador: '',
            medicao: item.medicao,
            data: new Date()
        }
        let controlador = await repository_controlador.getByMac(item.mac)
        if (!controlador) {
            let unic_controlador = {
                mac: item.mac,
                descricao: item.mac + '-' + item.tipo
            }
            controlador = await repository_controlador.create(unic_controlador)
        }
        medicao.controlador = controlador.id
        for (let i in item.medicao) {
            let sensor = await repository_sensor.getByMacCodigo(Number(item.medicao[i].codigoSensor), item.medicao[i].tipo, item.mac)
            if (!sensor) {
                let unic_sensor = {
                    macControlador: item.mac,
                    codigo: Number(item.medicao[i].codigoSensor),
                    tipo: item.medicao[i].tipo
                }
                sensor = await repository_sensor.create(unic_sensor)
            }
            medicao.medicao[i].sensor = sensor.id
        }


        //let mycontroler = await repository_controlador.getByMacSensores(item.mac)
        let listaSensores = medicao.medicao
        for (let i in item.medicao) {
            if (listaSensores.length < 1) {
                controlador.sensores.push({ sensores: { sensor: medicao.medicao[i].sensor, codigo: Number(item.medicao[i].codigoSensor) } })
                controlador.sensores[0].sensor = medicao.medicao[i].sensor
                controlador.sensores[0].codigo = Number(item.medicao[i].codigoSensor)
                let sucesso = await repository_controlador.update(controlador)
            } else {
                let adiciona = false
                for (let i in listaSensores) {
                    if (medicao.medicao[i].sensor == listaSensores[i].sensor)
                        adiciona = true
                }
                if (!adiciona) {

                    controlador.sensores.push({ sensores: { sensor: medicao.medicao[i].sensor, codigo: Number(item.medicao[i].codigoSensor) } })
                    controlador.sensores[controlador.sensores.length - 1].sensor = medicao.medicao[i].sensor
                    controlador.sensores[controlador.sensores.length - 1].codigo = Number(item.medicao[i].codigoSensor)
                    let vai = await repository_controlador.update(controlador)
                }
            }
        }
        retorno = await repository.create(medicao)
        res.status(201).send({
            message: 'Sucesso',
            retorno
        });
    } catch (erro) {
        res.status(403).send({
            message: erro.message || erro,
            //mesmo se der erro tem que retornar a lista a aplicação cliente irá comparar
            //a lista de retorno pra verificar se houve problema
            lista
        });
    }
};

exports.delete = async (req, res, next) => {
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