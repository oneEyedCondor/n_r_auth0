const Book = require('./book.model');
const Category = require('./category.model');

Category.hasMany(Book);

// require('../../config/mock');