const UserService = require('../../application/use_cases/UserService');

// controllers/UserController.js
exports.getAllUsers = (req, res) => {
    // Logic to get all users
    res.send('Get all users');
  };
  
  exports.getUserById = (req, res) => {
    const userId = req.params.id;
    // Logic to get user by id
    res.send(`Get user with id ${userId}`);
  };
  
  exports.createUser = (req, res) => {
    const userData = req.body;
    // Logic to create a new user
    res.send('Create a new user');
  };
  
  exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    // Logic to update user
    res.send(`Update user with id ${userId}`);
  };
  
  exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    // Logic to delete user
    res.send(`Delete user with id ${userId}`);
  };

  exports.createUser = async (req, res) => {
    try {
      // Récupération des données du corps de la requête
      const { username, email, password } = req.body;
      
      // Appel du service pour créer un nouvel utilisateur
      const newUser = await UserService.createUser({ username, email, password });
  
      // Réponse avec les informations de l'utilisateur créé (sans mot de passe)
      res.status(201).json({ 
        message: 'User created successfully',
        user: {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
        }
      });
    } catch (error) {
      // Gestion des erreurs et réponse avec le message d'erreur approprié
      res.status(500).json({ message: error.message });
    }
  };

  exports.loginUser = (req, res) => {

  }
  
  


