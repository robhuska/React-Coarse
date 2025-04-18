import { MongoClient } from 'mongodb';
import { MONGODB_URI } from '@/config';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({
      message: 'Meetup inserted!',
    });
  }
}

export default handler;
