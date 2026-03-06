import { Router } from "express";
import DinosauresRouter from "./dinosaure.router.js";

const router = Router();

router.use("/dinosaures", DinosauresRouter);

export default router;
