import { Router } from "express";
import DinosauresRouter from "./dinosaures.router.js";

const router = Router();

router.use("/dinosaures", DinosauresRouter);

export default router;
