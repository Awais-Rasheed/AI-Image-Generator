const { MongoClient } = require('mongodb');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

async function main() {
  const uri = 'mongodb://localhost:27017';
  const client = new MongoClient(uri);
const app = express();

app.use(cors());
app.use(bodyParser.json());

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const database = client.db('API');
    const collection = database.collection('Endpoints');

    const insertResult = await collection.insertOne({ name: 'Alice', age: 25 });
    console.log('New document inserted with _id:', insertResult.insertedId);

    
    app.get('/api/db', async (req, res)=>{
      const foundDocument = await collection.findOne({ name: 'Alice' });
      res.send(foundDocument);
      console.log('Found document:', foundDocument);
    })
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
