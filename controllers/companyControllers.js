const companyModels = require('../models/Company')

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
        res.status(200).json({
            companydb: getSingleCompany
        })
    }catch(err) {
        res.status(404).send({message: err.message});
    }
}

async function companySearch(req, res) {
    const input = req.body
    try{
        const searchACompany = await companyModels.searchCompany(input);
        res.status(200).json({
            companydb: searchACompany
        })
    }catch(err) {
        res.status(404).send({message: err.message});
    }
}

module.exports = {
    getAllCompany,
    singleCompany,
    companySearch
}