const APIService = require('../../application/use_cases/APIService')


// controllers/APIController.js
exports.createAPI = async (req, res) => {
  try {
    const { name, description, version, baseUrl, endpoints, isPublic, status } = req.body;
    
    // Récupérer l'ID de l'utilisateur authentifié depuis req.user.id pour l'utiliser comme owner
    const owner = req.user.id;

    // Appeler le use case avec owner et les autres paramètres
    const newAPI = await APIService.createApi({
      name,
      description,
      version,
      baseUrl,
      owner, // Ici, owner est défini par req.user.id
      endpoints,
      isPublic,
      status,
    });

    // Répondre avec la nouvelle API créée
    res.status(201).json({
      message: 'API created successfully',
      api: newAPI,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllAPIs = async (req, res) => {
  try {
    const apis = await APIService.getAll() // Récupère toutes les APIs
    res.status(200).json(apis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAPIById = (req, res) => {
  const apiId = req.params.id;
  // Logic to get API by id
  res.send(`Get API with id ${apiId}`);
};

exports.updateAPI = (req, res) => {
  const apiId = req.params.id;
  const apiData = req.body;
  // Logic to update API
  res.send(`Update API with id ${apiId}`);
};

exports.deleteAPI = (req, res) => {
  const apiId = req.params.id;
  // Logic to delete API
  res.send(`Delete API with id ${apiId}`);
};
