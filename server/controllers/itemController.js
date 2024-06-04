const uuid = require(`uuid`);
const path = require(`path`);
const { item } = require(`../models/models`);
const apiError = require(`../error/apiError`);


class itemController {
    async create(req, res, next) {
        try {
            const { name, price, categoryId, colorsId, generationId, info} = req.body;
            const { img } = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, `..`, `static`, fileName));

            const Item = await item.create({ 
                name,
                price,
                categoryId,
                colorsId,
                generationId,
                img: fileName
            });

            return res.json(Item);
        } catch (e) {
            next(apiError.badRequest(e.message));
        }
    }
    async getAll(req, res) {
        
    }
    async getOne(req, res) {
        
    }

}
module.exports = new itemController();


