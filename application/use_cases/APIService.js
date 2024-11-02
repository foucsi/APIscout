// src/application/use_cases/ApiService.js
const APIModel = require('../../infrastructure/database/models/APIModel');
const UserModel = require('../../infrastructure/database/models/UserModel');
const EndpointModel = require("../../infrastructure/database/models/EndpointModel");
const APIRepository = require('../../infrastructure/repositories/APIRepository')

const createApi = async({ name, description, version, baseUrl, owner, endpoints }) => {
  // Vérifier si le nom de l'API est unique
  const existingAPI = await APIModel.findOne({ name });
  if (existingAPI) {
    throw new Error('An API with this name already exists');
  }

  // Vérifier l'existence du propriétaire (owner)
  const ownerExist = await UserModel.findById(owner);
  if (!ownerExist) {
    throw new Error('Owner not found');
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

  // Création de la nouvelle API
  const api = new APIRepository.createAPI({
    name,
    description,
    version,
    baseUrl,
    owner,
    endpoints: validEndpoints,
  });

  // Sauvegarde en base de données
  await api.save();
  return api;
};

const getAll = async()=>{
  return await APIRepository.findAllAPI()
}

module.exports = createApi;
