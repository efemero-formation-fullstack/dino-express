import "dotenv/config";
import express from "express";
import morgan from "morgan";
import db from "./database/index.js";
//import router from "./router/index.js";

await db.sequelize.authenticate();

await db.sequelize.sync({ alter: true }); // ATTENTION

const { APP_PORT } = process.env;
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

//app.use(router);

app.listen(APP_PORT, () => {
  console.log(`Web API available at http://localhost:${APP_PORT}`);
});
