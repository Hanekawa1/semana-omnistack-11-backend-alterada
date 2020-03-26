import knex from 'knex';
import config from '../../knexfile';

const conn = knex(config.development);

export default conn;
