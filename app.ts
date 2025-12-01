import pkg from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import shortenRouter from "./src/api/shorten/shortenRouter";
import analyticsRouter from "./src/api/analytics/analyticsRouter";

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
app.use(pkg.urlencoded({ extended: true }));
app.use("/shorten", shortenRouter);
app.use("/analytics", analyticsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
