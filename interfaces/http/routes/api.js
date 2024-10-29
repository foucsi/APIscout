var express = require('express');
var router = express.Router();

const APIController = require('../../controllers/APIControllers');
const authMiddleware = require('../../../infrastructure/middlewares/authMiddleware')

router.get('/', APIController.getAllAPIs);
router.get('/:id', APIController.getAPIById);
router.post('/',authMiddleware, APIController.createAPI);
router.put('/:id', APIController.updateAPI);
router.delete('/:id', APIController.deleteAPI);

module.exports = router;