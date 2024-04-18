const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.js'); // Adjust the path as necessary

router.post('/create', userController.create);
router.get('/user/:id', userController.getUserById);
router.get('/users', userController.getAllUsers);
router.put('/update/:id', userController.updateUserById);
router.delete('/delete/:id', userController.deleteUserById);

module.exports = router;
