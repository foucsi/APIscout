// src/application/use_cases/UserService.js
const UserModel = require('../../infrastructure/database/models/UserModel');
const bcrypt = require('bcrypt');

//Objectif : Contient la logique métier de création d’un utilisateur en utilisant Mongoose.

/*
  Ce que Nous Faisons :
    Le service vérifie d’abord si l'email existe déjà en base de données.
    Si l’email est nouveau, il hache le mot de passe avant de créer et de sauvegarder l’utilisateur en base de données.
    Les validations définies dans le schéma Mongoose sont appliquées automatiquement lors de la sauvegarde.
*/

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
