const APIModel = require('../database/models/APIModel')

const createAPI = async(database)=>{
    return await APIModel.create(database)
}

module.exports = {
    createAPI
}