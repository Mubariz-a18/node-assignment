const express = require('express');
const {
    createUser,
    updateUser,
    getUsers
} = require('../controllers/userController.js');

const router =express.Router();

router.post('/register',createUser)
router.put('/update/:id',updateUser)
router.get('/users',getUsers)

module.exports = router
