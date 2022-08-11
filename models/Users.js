const userData = require('../database/database')

class User {
    static async everyUser() {
        const userDataFromDb = await userData.query('SELECT * FROM "user" ORDER BY id');
        return userDataFromDb.rows;
    }
    static async oneUser(id) {
        const userDataFromDb = await userData.query('SELECT * FROM "user" WHERE id = $1', [id])
        return userDataFromDb.rows[0];
    }
}
module.exports = User;