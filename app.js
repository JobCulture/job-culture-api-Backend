require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

//All endpoints go here
const router = require('./routes/userrouter');
const companyrouter = require('./routes/companyrouter');
const reviewrouter = require('./routes/reviewrouter');
const characteristicrouter = require('./routes/characteristicrouter');

app.use('/', router) //define endpoints here. //router function is called here
app.use('/', companyrouter) //define company router here
app.use('/', reviewrouter)//review router defined here
app.use('/', characteristicrouter); //characteristic router defined here
app.get('/', (req, res) => {
    res.status(200).json({"message" : "This Api Is Working :)"});
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  });
