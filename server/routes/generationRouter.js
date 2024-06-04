const Router = require(`express`);
const generationController = require("../controllers/generationController");
const router = new Router();

router.post(`/`, generationController.create);
router.get(`/`, generationController.getAll);

module.exports = router;
