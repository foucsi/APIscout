// src/application/use_cases/UserService.js
const UserModel = require('../../infrastructure/database/models/UserModel');
const UserRepository = require('../../infrastructure/repositories/UserRepository')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const User = require('../../infrastructure/database/models/UserModel');

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
  const user = await UserRepository.createUser({
    username,
    email,
    password: hashedPassword,
    uniqueId:uuidv4()
  });

  await user.save();
  return user;
};



const authenticateUser = async (email, password) => {
  // Vérification de l'existence de l'utilisateur
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new Error('Invalid email or password');
  }

  // Vérification du mot de passe
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }

  // Génération du token JWT
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return { token, user };
};

const getAll = async()=>{
  return await UserRepository.findAllUsers()
}

module.exports = {
  authenticateUser,
  createUser,
  getAll
};