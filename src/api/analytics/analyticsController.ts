import { Request, Response } from "express";
import analyticsModel from "./analyticsModel";

const getAnalytics = async (request: Request, response: Response) => {
  const { shortCode } = request.params;

  try {
    const result = await analyticsModel.findOne({ shortCode });
    response.status(200).json({ result });
  } catch (error) {
    response.status(500).json({ message: error });
  }
};

export default { getAnalytics };
