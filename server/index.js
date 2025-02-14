require(`dotenv`).config();

const express = require(`express`);
const models = require('./models/models')
const cors = require(`cors`);
const fileUpload = require(`express-fileupload`);
const router = require(`./routes/index`);
const errorHandler = require(`./middleware/ErrorHandlingMiddleware`);

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(`/api`, router);
const sequelize = require(`./db`);

//Obrabotka oshibok. Last middleware //
app.use(errorHandler);

//app.get(`/`, (req, res) => {
 // res.status(200).json({ message: `Rabotaet`});
//})


const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
