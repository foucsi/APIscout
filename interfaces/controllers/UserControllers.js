const UserService = require('../../application/use_cases/UserService');

// Get all Users
exports.getAllUsers = async(req, res) => {
    try{
      const users = await UserService.getAll()
      res.status(200).json(users)
    }catch(error){
      res.status(500).json({message: error.message})
    }
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

  // Objectif : Gérer la logique de création d’un utilisateur en utilisant le modèle Mongoose.
  /*
  Ce que Nous Faisons :
    Le contrôleur reçoit les données de la requête et appelle le service pour créer un utilisateur.
    Il envoie ensuite une réponse JSON avec les détails de l’utilisateur créé, sans inclure le mot de passe.
  */

  exports.createUser = async (req, res) => {
    try {
      // Récupération des données du corps de la requête
      const { username, email, password } = req.body;
      
      // Appel du service pour créer un nouvel user
      const newUser = await UserService.createUser({ username, email, password });
  
      // Réponse avec les informations de l'utilisateur créé (sans mot de passe)
      res.status(201).json({ 
        message: 'User created successfully',
        user: {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
          uniqueId: newUser.uniqueId
        }
      });
    } catch (error) {
      // Gestion des erreurs et réponse avec le message d'erreur approprié
      res.status(500).json({ message: error.message });
    }
  };

  exports.loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Appel au service pour authentifier l'utilisateur
      const { token, user } = await UserService.authenticateUser(email, password);
  
      // Réponse avec le token et les informations de base de l'utilisateur
      res.status(200).json({
        message: 'Login successful',
        token,
        user: {
          id: user._id,
          email: user.email,
          username: user.username,
        },
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  


