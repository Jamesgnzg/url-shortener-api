/* {
  "_id": ObjectId("..."),
  "shortUrlId": ObjectId("..."),  // references short_urls
  "clickedAt": ISODate("2025-02-01T14:23:55Z"),
  "ip": "203.0.113.44",
  "userAgent": "Mozilla/5.0 ...",
  "referrer": "https://google.com"
} */

import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema({
  id: { type: String, required: true },
  shortUrlId: { type: String, required: true },
  clickedAt: { type: Date, required: true },
  ip: { type: String },
  userAgent: { type: String },
  referrer: { type: String },
});

export default mongoose.model("Analytics", analyticsSchema);
