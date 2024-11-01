const UserModel = require('../database/models/UserModel')


const createUser = async (userData) => {
    return UserModel.create(userData); // Insère un nouveau document utilisateur
  };

const findAllUsers = async(userData)=>{
  return UserModel.find(userData) // Récupére tous les Users de la db
}
  
  module.exports = {
    createUser,
    findAllUsers
  };