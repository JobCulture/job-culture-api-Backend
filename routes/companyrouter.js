const express = require('express')
const router = express.Router()

router.get('/companies') //get all companies
router.get('/companies/:id')//get a single company
router.post('/companies/') //create a company

module.exports = router