const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
//All endpoints go here
const router = require('../job-culture-api-Backend/routes/userrouter')
app.use('/', router) //define endpoints here. //router function is called here
app.get('/', (req, res) => {
    res.status(200).json({"message" : "This Api Is Working :)"});
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
