const express = require('express')
const router = express.Router()
const companyController = require('../controllers/companyControllers')
router.get('/companies', companyController.getAllCompany) //get all companies
router.get('/companies/:id', companyController.singleCompany)//get a single company
router.post('/companies') //create a company

module.exports = router