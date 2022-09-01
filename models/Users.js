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

    static async getUserByName(name) {
        const userDataFromDb = await userData.query('SELECT * FROM "user" WHERE name = $1', [name])
        return userDataFromDb.rows[0];
    }

    static async newUserCreate(name, job_location, job_position){
        const userDataFromDb = await userData.query('INSERT into "user" (name, job_location, job_position) values ($1,$2,$3) RETURNING id', 
        [name, job_location, job_position])
        return userDataFromDb.rows[0]?.id;
    }
}
module.exports = User;