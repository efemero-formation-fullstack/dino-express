import { Router } from "express";
import dinosauresController from "../controllers/dinosaures.controller"; 
const DinosauresRouter = Router();

DinosauresRouter.post("/",dinosauresController.create)

export default {
  DinosauresRouter,
};
