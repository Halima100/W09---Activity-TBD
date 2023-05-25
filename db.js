const pg = require('pg');
const DB_PASSWORD = process.env.DB_PASSWORD;

const pool = new pg.Pool({
    host: 'db.bit.io',
    port: 5432,
    ssl: true,
    database: 'otto4334/PRIME',// <-- in quotes
    user: 'TBD',
    password: DB_PASSWORD
});

module.exports = pool

