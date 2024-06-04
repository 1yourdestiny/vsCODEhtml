const Router = require(`express`);
const router = new Router();
const userRouter = require(`./userRouter`);
const colorsRouter = require(`./colorsRouter`);
const itemRouter = require(`./itemRouter`);
const categoryRouter = require(`./categoryRouter`);
const generationRouter = require(`./generationRouter`);


router.use(`/user`, userRouter);
router.use(`/colors`, colorsRouter);
router.use(`/item`, itemRouter);
router.use(`/category`, categoryRouter);
router.use(`/generation`, generationRouter);

module.exports = router;