import slug from "slug";
import shortenModel from "./shortenModel";

const addNewUrl = async (
  request: { body: { originalUrl: string; createdBy: number } },
  response: any
) => {
  const { originalUrl, createdBy } = request.body;
  const sluggedUrl: string = slug(originalUrl);
  const duplicate = await shortenModel
    .findOne({ shortCode: sluggedUrl })
    .exec();

  if (duplicate) return response.sendStatus(409); // Conflict

  try {
    const result = await shortenModel.create({
      shortCode: sluggedUrl,
      originalUrl,
      createdBy,
      createdAt: new Date(),
    });

    console.log(result);
    response.status(201).json({ success: `New ${sluggedUrl} created!` });
  } catch (error) {
    response.status(500).json({ message: error });
  }
};

export default { addNewUrl };
