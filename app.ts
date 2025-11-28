import pkg from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import shortenRouter from "./src/api/shorten/shortenRouter";

config();
const app = pkg();
const port = 3000;
mongoose.connect(process.env.DATABASE_URL || "", {
  family: 4,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(pkg.json());
app.use("/shorten", shortenRouter);

app.get("/", (req, res) => {
  console.log("HEY");
  res.send("Hello Everyone!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
