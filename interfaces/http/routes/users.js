var express = require('express');
var router = express.Router();

const UserController = require('../../controllers/UserControllers');
const authMiddleware = require('../../../infrastructure/middlewares/authMiddleware');

router.get('/',authMiddleware, UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
