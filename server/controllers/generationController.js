const {generation} = require(`../models/models`);
const apiError = require(`../error/apiError`);


class generationController {
    async create(req, res) {
        const { name } = req.body;
        const Generation = await generation.create({ name });
        return res.json(Generation);
    }
    async getAll(req, res) {
        const generations = await generation.findAll();
        return res.json(generations);
    }
}
module.exports = new generationController();

