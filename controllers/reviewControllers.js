const reviewModels = require('../models/Reviews')

//get All Company Reviews
async function getAllReviews(req, res) {
    try {
        const findAllReviews = await reviewModels.everyReview();
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