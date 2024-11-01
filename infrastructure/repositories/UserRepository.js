const UserModel = require('../database/models/UserModel')


const createUser = async (userData) => {
    return UserModel.create(userData); // Insère un nouveau document utilisateur
  };
  
  module.exports = {
    createUser,
  };