const Router = require(`express`);
const colorsController = require("../controllers/colorsController");
const router = new Router();

router.post(`/`, colorsController.create);
router.get(`/`, colorsController.getAll);

module.exports = router;
