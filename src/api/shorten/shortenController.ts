import slug from "slug";
import shortenModel from "./shortenModel";
import { Request } from "express";

const addNewUrl = async (req: Request, res: any) => {
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

export default { addNewUrl };
