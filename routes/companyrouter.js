const express = require('express')
const router = express.Router()
const companyController = require('../controllers/companyControllers')
router.get('/companies', companyController.getAllCompany) //get all companies
router.get('/companies/:id', companyController.singleCompany)//get a single company
router.get('/companies/search', companyController.companySearch) //search for a company 

module.exports = router