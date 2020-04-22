const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../config/sequelize');

class Book extends Model {}
Book.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, { sequelize, modelName: 'book' });

module.exports = Book;