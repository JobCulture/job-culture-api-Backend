const express = require('express')
const router = express.Router()
const userController = require('../controllers/userControllers')
//Crud routers go here where controllers will be called.
router.get('/users', userController.getAllUsers) //get all users
router.get('/users/:id',userController.singleUser)//get one user
router.get('/companies/:id/users') // get all users that belong to that specific company
router.get('/companies/:id/users/:id') //get a user that belongs to a specific company

module.exports = router