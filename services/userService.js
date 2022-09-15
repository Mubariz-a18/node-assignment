const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel')

const addUserService = async (body) => {
    try {
        const phoneNumber = body.phoneNumber;
        const user = await userModel.create(body);
        const token = jwt.sign({phoneNumber, userId: user.id},'secret123@');
        return token;
    } catch(e) {
        throw e;
    }
}

const updateUserService = async (id, body) => {
    try {
        return userModel.updateOne({
            id
        },
        body,{
            returnOriginal: false
        })
    } catch(e) {
        throw e;
    }
}

const getUserService = async ()=>{
    try{ 
        return userModel.find();
    } catch(e) {
        throw e;
    }
}

module.exports = { addUserService, updateUserService , getUserService }