const UserModel = require('../database/models/UserModel')


const createUser = async (userData) => {
    return UserModel.create(userData); // Insère un nouveau document utilisateur
  };

const findAllUsers = async()=>{
  const users = await UserModel.find();
  if (users.length === 0) {
    throw new Error("Database empty");
  }
  return users;
}
  
  module.exports = {
    createUser,
    findAllUsers
  };