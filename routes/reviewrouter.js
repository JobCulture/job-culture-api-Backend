const express = require('express')
const router = express.Router()

router.get('/companies/reviews') //get all company reviews
router.get('/companies/:id/reviews/:id')//get a single company review
router.post('/companies/:id/reviews/:id') //create a single company review
module.exports = router