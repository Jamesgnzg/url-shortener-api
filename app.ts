import Express = require("express");

const app = Express();
const port = 3000;

const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017"; // Replace with your connection string
const client = new MongoClient(uri);

async function createDatabaseAndCollection() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("url-shortener"); // Specify your database name
    const collection = db.collection("myNewCollection");

    // Insert a document to implicitly create the database and collection
    await collection.insertOne({ name: "Example Document" });
    console.log("Database and collection created, document inserted.");
  } finally {
    await client.close();
  }
}

createDatabaseAndCollection();

app.get("/", (req, res) => {
  res.send("Hello Everyone!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
