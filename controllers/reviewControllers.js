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

// post a Company Review
async function postAReview(req, res) {
    const {user_id,company_id,review_text, rating} = req.body;
    const newReviewInfo = {user_id,company_id,review_text, rating}
    try {
        const createAReview = await reviewModels.postReview(newReviewInfo);
        res.status(200).json({
            createAReview
        });
    }catch(err) {
        res.status(500).send({message: err.message});
    }
}

module.exports = {
    getAllReviews,
    postAReview
}
