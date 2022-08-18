const reviewModels = require('../models/Reviews')

//get All Company Reviews
async function getAllReviews(req, res) {
    const companyID = req.params.id;
    try {
        const findAllReviews = await reviewModels.everyReview(companyID);
        res.status(200).json({
            reviewDb: findAllReviews
        });
    }catch(err) {
        res.status(500).send({message: err.message});
    }
}

module.exports = {
    getAllReviews
}
