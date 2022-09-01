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
    try {
    const reviewData = req.body;

    let companyId = reviewData.company.id;
    let userId = undefined;

      const findCompany = companyId ? await companyModels.oneCompany(reviewData.company.id) : undefined;

      if (!findCompany) {
        companyId = await companyModels.newCompanyCreate(reviewData.company.name);
      }

      const findUser = await userModels.getUserByName(reviewData.user.email);     
      if (!findUser) {
        userId = await userModels.newUserCreate(reviewData.user.email, reviewData.user.job_location, reviewData.user.job_position);
      } else {
        userId = findUser.id;
      }

      
      const ratings = reviewData.reviews;
      const ratingsSavedPromises = ratings.map((element) => {
        const newReview = {
            ...element,
            user_id: userId,
            company_id: companyId
        };
        return reviewModels.postReview(newReview);
      });

      await Promise.all(ratingsSavedPromises);

      res.status(200).json({ message: 'Review was created successfully'});
    }catch(err) {
        res.status(500).send({message: 'Internal server error' });
    }
}

module.exports = {
    getAllReviews,
    postAReview
}
