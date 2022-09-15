const adModel = require('../models/adsModel')

const createAdService = async (body) => {
    try {
        return adModel.create(body);
    } catch(e){
        throw e;
    }
}

const updateAdService = async (id, body) => {
    try {
        return adModel.updateOne({
            id
        },
        body,{
            returnOriginal: false
        })
    } catch(e){
        throw e;
    }
}

const getAdService = async ()=>{
    try {
        return adModel.find();
    } catch(e){
        throw e;
    }
}

module.exports = { createAdService, updateAdService , getAdService }