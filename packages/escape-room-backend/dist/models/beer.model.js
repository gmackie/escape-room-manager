"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Beer extends sequelize_1.Model {
}
exports.Beer = Beer;
Beer.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    }
}, {
    tableName: 'beers',
    sequelize: database_1.database
});
Beer.sync({ force: true }).then(() => console.log('Beer table created'));
//# sourceMappingURL=beer.model.js.map