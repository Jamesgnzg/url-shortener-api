import shortenModel from "./shortenModel";
import { Response } from "express";
import { UrlRequest } from "./shortenInterfaces";

const addNewUrl = async (req: UrlRequest, res: Response) => {
  const { initialUrl, createdBy } = req.body;
  let randomShortCode = Math.random().toString(36).slice(2);
  let duplicate = await shortenModel
    .findOne({ shortCode: randomShortCode })
    .exec();

  while (duplicate) {
    if (duplicate) {
      randomShortCode = Math.random().toString(36).slice(2);
      duplicate = await shortenModel
        .findOne({ shortCode: randomShortCode })
        .exec();
    }
  }

  try {
    const result = await shortenModel.create({
      shortCode: randomShortCode,
      initialUrl: initialUrl,
      createdBy: createdBy,
      createdAt: new Date(),
    });

    console.log(result);
    res.status(201).json({ success: `New ${randomShortCode} created!` });
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
