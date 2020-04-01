"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.database = new sequelize_1.Sequelize({
    database: 'test-db',
    dialect: 'sqlite',
    storage: ':memory:',
});
//# sourceMappingURL=database.js.map