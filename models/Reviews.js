const reviewData = require('../database/database')
class Review {
    static async everyReview() {
        const reviewDataFromDb = await reviewData.query('SELECT * FROM review JOIN company ON review.company_id = company.id')
        return reviewDataFromDb.rows;
    }
}

module.exports = Review;