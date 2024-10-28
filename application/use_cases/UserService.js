// src/application/use_cases/UserService.js
const UserModel = require('../../infrastructure/database/models/UserModel');
const bcrypt = require('bcrypt');

const createUser = async ({ username, email, password }) => {
  // Vérifier si l'utilisateur existe déjà
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  // Hachage du mot de passe
  const hashedPassword = await bcrypt.hash(password, 10);

  // Créer un nouvel utilisateur
  const user = new UserModel({
    username,
    email,
    password: hashedPassword,
  });

  await user.save();
  return user;
};

module.exports = {
  createUser,
};
