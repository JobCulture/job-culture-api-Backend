const reviewModels = require('../models/Reviews')
const userModels = require('../models/Users')
const companyModels = require('../models/Company');
const { newCompanyCreate } = require('../models/Company');
const { newUserCreate } = require('../models/Users');
const { postReview } = require('../models/Reviews');
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
    // const {user_id, company_id,review_text, rating, characteristic_id} = req.body[0];
    // const newReviewInfo = {user_id, company_id,review_text, rating, characteristic_id}
    let newReviewInfo = []
    const reviews = req.body;
    try {
        //user post, companypost, object with nested object
        // const createAReview = await reviewModels.postReview(newReviewInfo);
        reviews.forEach(async (ele) => {
            console.log(ele, 'testingele')
           const data = await reviewModels.postReview(ele)
           newReviewInfo.push(data)
        })

        // createAReview.forEach(ele => {
        //     if(user_id && company_id){
        //         newArray.push(review_text,rating,characteristic_id)
        //     }
        //     console.log(newArray)
        // })
        res.status(200).json({
            reviewDb: newReviewInfo
        });
    }catch(err) {
        res.status(500).send({message: err.message});
    }
}

module.exports = {
    getAllReviews,
    postAReview
}
