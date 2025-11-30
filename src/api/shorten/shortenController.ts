import slug from "slug";
import shortenModel from "./shortenModel";
import { Response } from "express";
import { UrlRequest } from "./shortenInterfaces";

const addNewUrl = async (req: UrlRequest, res: Response) => {
  const { initialUrl, createdBy } = req.body;
  const sluggedUrl: string = slug(initialUrl);
  const duplicate = await shortenModel
    .findOne({ shortCode: sluggedUrl })
    .exec();

  if (duplicate) return res.sendStatus(409); // Conflict

  try {
    const result = await shortenModel.create({
      shortCode: sluggedUrl,
      initialUrl: initialUrl,
      createdBy: createdBy,
      createdAt: new Date(),
    });

    console.log(result);
    res.status(201).json({ success: `New ${sluggedUrl} created!` });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getUrl = async (request: UrlRequest, response: Response) => {
  const { shortCode } = request.params;
  try {
    const result = await shortenModel.findOne({ shortCode });
    response.status(200).json({ result });
  } catch (error) {
    response.status(500).json({ message: error });
  }
};

export default { addNewUrl, getUrl };
