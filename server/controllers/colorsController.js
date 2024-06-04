const {colors} = require(`../models/models`);
const apiError = require(`../error/apiError`);


class colorsController {
    async create(req, res) {
        const { name } = req.body;
        const Colors = await colors.create({ name });
        return res.json(Colors);
    }
    async getAll(req, res) {
        const color = await colors.findAll();
        return res.json(color);
    }
}
module.exports = new colorsController();

