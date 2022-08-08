const { Pool } = reqiure("pg");
const pool = new Pool({
    user: 'postgres',
    password: '',
    database: 'jobculture'
})

module.exports = pool;