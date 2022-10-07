import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb } from 'utils/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await connectToDb();

  switch (req.method) {
    case 'GET': {
      const data = await db.collection('users').find().sort({ _id: 1 }).toArray();
      res.json(data);

      break;
    }
  }
};
