const APIModel = require('../../infrastructure/database/models/APIModel')
const UserModel = require('../../infrastructure/database/models/UserModel')
const EndpointModel = require("../../infrastructure/database/models/EndpointModel")

// Objectif : contient la ligique metier de création d'une api par un utilisateur

const createApi = async({name, description, version, baseUrl, owner, endpoints}) =>{


    // Vérifier si le nom de l'API est unique
    const existingAPI = await APIModel.findOne({name})
    if(!existingAPI){
        throw new Error ('An API with this name already exists')
    }

    // Vérifier l'existence du propriétaire (owner)
    const ownerExist = await UserModel.findOne(owner)
    if(!ownerExist){
        throw new Error ('Owner not found')
    }

    // Vérifier l'existence de chaque endpoint
    const validEndpoints = [];
    for (const endpointId of endpoints) {
        const endpointExists = await EndpointModel.findById(endpointId);
        if (!endpointExists) {
        throw new Error(`Endpoint with ID ${endpointId} not found`);
        }
        validEndpoints.push(endpointId);
    }


    const api = new APIModel({
        name,
        description,
        version,
        baseUrl,
        owner,
        endpoints: validEndpoints,
    })

    await api.save()
    return api
}

module.exports = createApi