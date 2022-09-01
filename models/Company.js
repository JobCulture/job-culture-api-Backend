const companyData = require('../database/database')

class Company {
    static async everyCompany() {
        const companyDataFromDb = await companyData.query('SELECT * FROM "company" ORDER BY id');
        return companyDataFromDb.rows;
    }

    static async oneCompany(id){
        const companyDataFromDb = await companyData.query('SELECT * FROM "company" WHERE id = $1', [id])
        return companyDataFromDb.rows[0];
    }
    static async searchCompany(input){
        const companyDataFromDb = await companyData.query(`SELECT * FROM "company" WHERE company.name ILIKE $1`, [`%${input}%`])
        return companyDataFromDb.rows;
    }
    static async newCompanyCreate(name,info,location){
        const companyDataFromDb = await companyData.query('INSERT into "company" (name,info,location) values ($1,$2,$3) RETURNING id', 
        [name,info,location])
        return companyDataFromDb.rows[0]?.id;
    }
}
module.exports = Company;
