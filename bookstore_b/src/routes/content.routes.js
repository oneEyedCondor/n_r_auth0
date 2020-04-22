const { checkJwt } = require('../auth');

module.exports = async (app) => {
    const content = require('../controllers/content.controller.js');

    app.get('/api/books', async (req, res) => {
        try {
            const books = await content.getBooks();
            res.status(200).send(books);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    app.post('/api/books', checkJwt, async (req, res) => {
        try {
            await content.createBook(req.body);
            res.sendStatus(201);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    app.get('/api/categories', async (req, res) => {
        try {
            const categories = await content.getCategories();
            res.status(200).send(categories);
        } catch (err) {
            res.status(500).send(err);
        }
    });
};