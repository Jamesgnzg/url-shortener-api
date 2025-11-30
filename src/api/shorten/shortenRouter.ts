import { Router } from "express";
import shortenController from "./shortenController";
const shortenRouter = Router();

shortenRouter.post("/add", shortenController.addNewUrl);
shortenRouter.get("/getUrl/:shortCode", shortenController.getUrl);

export default shortenRouter;
