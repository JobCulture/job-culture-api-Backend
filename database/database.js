const { Pool } = require("pg");
const pool = new Pool({
    user: 'postgres',
    password: '',
    database: 'jobculture'
})

module.exports = pool;