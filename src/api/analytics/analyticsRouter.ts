import { Router } from "express";
import analyticsController from "./analyticsController";
const analyticsRouter = Router();

analyticsRouter.get(
  "/getAnalytics/:shortCode",
  analyticsController.getAnalytics
);

export default analyticsRouter;
