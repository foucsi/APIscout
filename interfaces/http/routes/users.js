var express = require('express');
var router = express.Router();

const UserController = require('../../controllers/UserControllers');

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
