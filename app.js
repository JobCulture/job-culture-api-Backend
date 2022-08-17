const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(express.json())
app.use(cors())
//All endpoints go here
const router = require('../job-culture-api-Backend/routes/userrouter')
const companyrouter = require('../job-culture-api-Backend/routes/companyrouter')
const reviewrouter = require('../job-culture-api-Backend/routes/reviewrouter')
app.use('/',router) //define endpoints here. //router function is called here
app.use('/',companyrouter) //define company router here
app.use('/',reviewrouter)//review router defined here
app.get('/', (req, res) => {
    res.status(200).json({"message" : "This Api Is Working :)"});
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
