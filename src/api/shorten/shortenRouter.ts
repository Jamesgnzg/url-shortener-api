import { Router } from "express";
import shortenController from "./shortenController";
const shortenRouter = Router();

shortenRouter.post("/add", shortenController.addNewUrl);

export default shortenRouter;
