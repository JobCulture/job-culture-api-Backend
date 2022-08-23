const reviewData = require('../database/database')

class Review {
    static async everyReview(companyID) {
        const reviewDataFromDb = await reviewData.query('SELECT * FROM review JOIN company ON review.company_id = company.id WHERE company.id = $1', [companyID])
        return reviewDataFromDb.rows;
    }

    static async getTotalReviews(companyID) {
        const totalReviewsCompany = await reviewData.query('SELECT COUNT(*) FROM review WHERE review.company_id = $1', [companyID])
        const totalReviews = totalReviewsCompany.rows[0].count;
        return totalReviews;
    }

    static async getAverageRatings(companyID) {
        const averageRatings = await reviewData.query('SELECT AVG(rating) as rating, characteristic_id FROM "review" WHERE review.company_id = $1 group by characteristic_id', [companyID])
        return averageRatings.rows;
    }
    
    static async postReview(newReviewInfo) {
        const {user_id,company_id,review_text, rating} = newReviewInfo
        const reviewDataFromDb = await reviewData.query('INSERT INTO review (user_id,company_id,review_text,rating) VALUES ($1, $2, $3, $4) RETURNING *' , [user_id, company_id, review_text, rating])
        return reviewDataFromDb.rows;
    }
}

module.exports = Review;
