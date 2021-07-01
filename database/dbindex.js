//database/index
const knex = require('knex')({
    client: 'pg',
    connection: 'postgres://postgres:docker@localhost:5432/todo',
});

module.exports = knex;