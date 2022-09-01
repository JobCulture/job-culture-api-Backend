const companyModels = require('../models/Company');
const reviewModels = require('../models/Reviews');

//get All Companies
async function getAllCompany(req, res){
    try {
        const findAllCompanies = await companyModels.everyCompany();
        res.status(200).json({
            companydb: findAllCompanies
        });
    }catch(err) {
        res.status(500).send({message: err.message});
    }
}

async function singleCompany(req, res) {
    const id = req.params.id
    try{
        const getSingleCompany = await companyModels.oneCompany(id);
        const getTotalReviews = await reviewModels.getTotalReviews(id);
        const averageRatings = await reviewModels.getAverageRatings(id);
        let calcAverage = 0;
        averageRatings.forEach(element => { 
            calcAverage = parseInt(element.rating) + calcAverage;
         });
         
        res.status(200).json({
            companydb: getSingleCompany,
            total_reviews: getTotalReviews,
            average_rating: calcAverage / averageRatings.length,
            ratings: averageRatings
        })
    }catch(err) {
        res.status(404).send({message: err.message});
    }
}

async function companySearch(req, res) {
    const input = req.query.q;
    try{
        const searchACompany = await companyModels.searchCompany(input);
        res.status(200).json({
            companydb: searchACompany
        })
    }catch(err) {
        res.status(404).send({message: err.message});
    }
}

async function newCompany(req, res){
    const {name, info, location} = req.body
        if(!name || !info || !location){
        res.status(400).json({message: "complete company info"})
    }
    try {
        const createNewCompany = await companyModels.newCompanyCreate(name, info, location)
        res.status(200).json({
            companydb: createNewCompany
        })
    }catch(err) {
        res.status(404).send({message: err.message});
    }
}

module.exports = {
    getAllCompany,
    singleCompany,
    companySearch,
    newCompany
}
