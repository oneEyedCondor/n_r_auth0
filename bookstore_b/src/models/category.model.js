const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../config/sequelize');

class Category extends Model {}
Category.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sort_order: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, { sequelize, modelName: 'category' });

module.exports = Category;