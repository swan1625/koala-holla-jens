const pg = require('pg');
const Pool = pg.Pool;

const config = {
    database: 'koalas',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
};

const pool = new Pool(config);

pool.on('connect', () => {
    console.log('Koalas connected');
})


pool.on('error', (error) => {
    console.log('koalas got soaked :(', error);
})

module.exports = pool;