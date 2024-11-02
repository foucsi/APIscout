const APIModel = require('../database/models/APIModel')

const createAPI = async(database)=>{
    return await APIModel.create(database)
}

const findAllAPI = async()=>{
    const apis = await APIModel.find()
    if(apis.length === 0){
        throw new Error ('Database API empty')
    }
    return apis
}

module.exports = {
    createAPI,
    findAllAPI
}