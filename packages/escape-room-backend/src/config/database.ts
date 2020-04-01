import { Sequelize } from 'sequelize';

export const database = new Sequelize({
  database: 'test-db',
  dialect: 'sqlite',
  storage: ':memory:',
});