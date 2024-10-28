var express = require('express');
var router = express.Router();

const UserController = require('../../controllers/UserControllers');
const validationMiddleware = require('../../../infrastructure/middlewares/validationMiddleware');
const userSchema = require('../../../infrastructure/database/models/UserModel');
const authMiddleware = require('../../../infrastructure/middlewares/authMiddleware');

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.post('/register',authMiddleware, validationMiddleware(userSchema), UserController.createUser)
router.post('/login', UserController.loginUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
