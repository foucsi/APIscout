const APIModel = require('../../infrastructure/database/models/APIModel')


// Objectif : contient la ligique metier de création d'une api par un utilisateur

const createApi = async({name, description, version, baseUrl}) =>{
    const api = new APIModel({
        name,
        description,
        version,
        baseUrl
    })

    await api.save()
    return api
}

module.exports = createApi