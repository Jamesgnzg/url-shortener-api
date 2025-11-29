/* {
  "_id": "...",
  "shortCode": "abc123",
  "originalUrl": "...",
  "createdAt": "...",
  "clickStats": {
    "total": 304,
    "last24h": 12,
    "byDate": {
      "2025-02-01": 30,
      "2025-02-02": 22
    }
  }
} */

import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema({
  shortCode: { type: String, required: true },
  initialUrl: { type: String, required: true },
  createdBy: { type: Number, required: true },
  createdAt: { type: Date, required: true },
});

export default mongoose.model("short_url", shortUrlSchema);
