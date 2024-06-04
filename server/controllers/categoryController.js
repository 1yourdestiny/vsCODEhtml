const {category} = require(`../models/models`);
const apiError = require(`../error/apiError`);

class categoryController {
    async create(req, res) {
        const { name } = req.body;
        const Category = await category.create({ name });
        return res.json(Category);
    }
    async getAll(req, res) {
        const categories = await category.findAll();
        return res.json(categories);
    }
}

module.exports = new categoryController();

