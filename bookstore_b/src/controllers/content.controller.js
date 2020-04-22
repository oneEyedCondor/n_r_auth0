const Book = require('../models/book.model');
const Category = require('../models/category.model');

module.exports.getCategories = async () => {
    return await Category.findAll();
};

module.exports.getBooks = async () => {
    return await Book.findAll();
};

module.exports.createBook = async (data) => {
    return await Book.create({ ...data });
};